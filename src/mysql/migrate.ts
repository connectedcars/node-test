import fs from 'fs'
import mysql from 'mysql'
import util from 'util'

import { MySQLClient } from './mysql-client'
import { dumpDatabase } from './mysqld-utils'

const readdir = util.promisify(fs.readdir)
const readFile = util.promisify(fs.readFile)
const mkdirAsync = util.promisify(fs.mkdir)
const existsAsync = util.promisify(fs.exists)

export interface MigrationRow {
  timestamp: string
  name: string
}

export interface Migration {
  path: string
  timestamp: string
  name: string
  sql: string
}

export interface MigrationResult {
  [schema: string]: SchemaMigrationResult
}

export interface SchemaMigrationResult {
  [database: string]: Migration[]
}

export interface MigrateOptions {
  mysqlClient: MySQLClient
  migrationsPaths?: string[]
  cachePaths?: string[]
  ignoreCache?: boolean
}

export class Migrate {
  private mysqlClient: MySQLClient
  private migrationsDir = ''
  private cachePaths: string[] = []
  private initPromise: Promise<void>
  private schemaFolders!: string[]
  private databaseMap!: { [key: string]: string[] }
  private basePool!: mysql.Pool
  private ignoreCache: boolean
  private timings: string[] = []
  private migrationsPaths: string[]

  public constructor(options: MigrateOptions) {
    this.mysqlClient = options.mysqlClient
    this.migrationsPaths = options.migrationsPaths || ['./migrations']
    this.cachePaths = options.cachePaths || ['./cache']
    this.ignoreCache = options.ignoreCache || false
    this.initPromise = this.init()
    this.initPromise.catch(() => {
      // Ignore so we don't et unhandled promise rejection
    })
  }

  public async init(): Promise<void> {
    // Find databases.json
    for (const migrationPath of this.migrationsPaths) {
      if (await existsAsync(`${migrationPath}/databases.json`)) {
        this.migrationsDir = migrationPath
        break
      }
    }
    if (!this.migrationsDir) {
      throw new Error(`databases.json could not be found in any of the migration paths`)
    }
    await this.saveTiming<void>('loadDatabaseJson', async () => {
      const [databasesJSON, schemaFolders] = await Promise.all([
        readFile(`${this.migrationsDir}/databases.json`, 'utf8'),
        readdir(this.migrationsDir)
      ])
      this.databaseMap = JSON.parse(databasesJSON)
      this.schemaFolders = schemaFolders.filter(s => s in this.databaseMap)
    })
    this.basePool = await this.mysqlClient.getConnectionPool('mysql')
  }

  public async getTimings(): Promise<string[]> {
    await this.initPromise // Make sure init has finished
    return this.timings
  }

  public async cleanup(): Promise<void> {
    await this.initPromise
    for (const schemaFolder of this.schemaFolders) {
      for (const database of this.databaseMap[schemaFolder]) {
        await this.mysqlClient.dropDatabase(database)
      }
    }
  }

  public async cacheSchemas(): Promise<void> {
    if (this.cachePaths.length === 0) {
      throw new Error('No cache paths defined')
    }
    await mkdirAsync(this.cachePaths[0], { recursive: true, mode: 0o777 })
    for (const schemaFolder of this.schemaFolders) {
      await dumpDatabase(
        this.mysqlClient.options.port || 0, // TODO: Make this a lot prettier
        this.databaseMap[schemaFolder],
        `${this.cachePaths}/${schemaFolder}.sql`
      )
    }
  }

  public async migrate(until?: string): Promise<MigrationResult> {
    await this.initPromise
    const result: MigrationResult = {}
    const promises: Array<Promise<SchemaMigrationResult>> = []
    const lockConnection = await this.mysqlClient.getConnection('mysql')
    try {
      await this.mysqlClient.takeLock(lockConnection, 'migrate')
      for (const schemaFolder of this.schemaFolders) {
        promises.push(this.migrateSchema(schemaFolder, until))
      }
      const migrations = await this.saveTiming('migrateAllSchema', Promise.all(promises))
      // Populate the MigrationResult structure
      for (const schemaFolder of this.schemaFolders) {
        result[schemaFolder] = migrations.shift() || {}
      }
      return result
    } finally {
      await this.mysqlClient.closeConnection(lockConnection)
    }
  }

  public async migrateSchema(schemaFolder: string, until?: string): Promise<SchemaMigrationResult> {
    // Find the first cache file that matches
    let selectCacheFile = ''
    for (const cachePath of this.cachePaths) {
      const possibleCacheFile = `${cachePath}/${schemaFolder}.sql`
      if (await existsAsync(possibleCacheFile)) {
        selectCacheFile = possibleCacheFile
        break
      }
    }

    // Find out if we should skip cache if all database already exists for this schemaFolder
    if (!this.ignoreCache && selectCacheFile) {
      const existingDatabases = await this.mysqlClient.queryArray<string>(
        this.basePool,
        `
          SELECT SCHEMA_NAME as \`name\`
          FROM information_schema.SCHEMATA;
        `
      )
      const skipCache = this.databaseMap[schemaFolder].some(d => existingDatabases.includes(d))
      if (!skipCache) {
        const cacheData = await readFile(selectCacheFile, 'utf8')
        try {
          await this.saveTiming(`applyCacheFile(${selectCacheFile})`, this.mysqlClient.query(this.basePool, cacheData))
        } catch (e) {
          throw new Error(`Failed applying cache file ${selectCacheFile}: ${e}`)
        }
      }
    }

    const result: SchemaMigrationResult = {}
    const migrations = await this.readMigrations(schemaFolder)
    const migrationPromises: Array<Promise<Migration[]>> = []
    for (const database of this.databaseMap[schemaFolder]) {
      migrationPromises.push(this.migrateDatabase(database, migrations, until))
    }
    const dbMigrationsResults = await this.saveTiming(
      `applyAllMigrations(${schemaFolder})`,
      Promise.allSettled(migrationPromises)
    )

    // Populate the SchemaMigrationResult structure
    for (const database of this.databaseMap[schemaFolder]) {
      const migrationResult = dbMigrationsResults.shift()
      if (migrationResult?.status === 'fulfilled') {
        result[database] = migrationResult.value
      } else if (migrationResult?.status === 'rejected') {
        throw migrationResult.reason
      }
    }
    return result
  }

  public async migrateDatabase(database: string, migrations: Migration[], until?: string): Promise<Migration[]> {
    // Create the database and migration if they do not exist
    await this.mysqlClient.query(
      this.basePool,
      `
        CREATE DATABASE IF NOT EXISTS \`${database}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
        CREATE TABLE IF NOT EXISTS \`${database}\`.Migrations (
          id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
          timestamp VARCHAR(255) NOT NULL,
          name VARCHAR(255) NOT NULL,
          createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
          PRIMARY KEY (id)
        );
      `
    )

    const pool = await this.mysqlClient.getConnectionPool(database)

    // Fetch applied migrations
    const appliedMigrations = await this.mysqlClient.query<MigrationRow>(
      pool,
      'SELECT `timestamp`, `name` FROM `Migrations`'
    )

    const result: Migration[] = []
    for (const migration of migrations) {
      // Skip if the full migration has been applied
      if (appliedMigrations.find(v => v.timestamp === migration.timestamp && v.name === migration.name)) {
        continue
      }

      // https://www.mysqltutorial.org/mysql-comment/
      // Remove comments and split migrations into different statements except if they have LOCK or TRANSACTION in them
      const migrationStatements = migration.sql.match(/LOCK TABLES|START TRANSACTION/i)
        ? [migration.sql]
        : migration.sql
            .replace(/--\n|--\s[^\n]*|#[^\n]*|\/\*[^!].*?\*\//gs, '')
            .split(';')
            .filter(s => !s.match(/^\s*$/s))

      const connection = await this.mysqlClient.getConnectionFromPool(pool)
      try {
        for (const [i, migrationStatement] of migrationStatements.entries()) {
          const migrationStatementName = migrationStatements.length > 1 ? `${migration.name}:${i}` : migration.name
          if (appliedMigrations.find(m => m.timestamp === migration.timestamp && m.name === migrationStatementName)) {
            continue
          }
          await this.mysqlClient.query(connection, migrationStatement)
          await this.mysqlClient.query(connection, 'INSERT INTO `Migrations` (`timestamp`, `name`) VALUES (?, ?)', [
            migration.timestamp,
            migrationStatementName
          ])
          result.push(migration)

          if (until && until <= migration.timestamp) {
            break
          }
        }
      } catch (e) {
        throw new Error(`Failed applying migration "${migration.path}: ${e}"`)
      } finally {
        pool.releaseConnection(connection)
      }
    }

    return result
  }

  public async readMigrations(schemaPath: string): Promise<Migration[]> {
    const migrationsFiles = (await readdir(`${this.migrationsDir}/${schemaPath}`)).sort()
    const promises: Promise<Migration>[] = []
    for (const migrationFile of migrationsFiles) {
      promises.push(this.readMigration(`${schemaPath}/${migrationFile}`))
    }
    return Promise.all(promises)
  }

  public async readMigration(migrationFile: string): Promise<Migration> {
    const match = migrationFile.match(/\/([^_]+)_([^.]+\.sql)$/)
    if (!match) {
      throw new Error(`Migration file does not follow format: ${migrationFile}`)
    }
    const contents = await readFile(`${this.migrationsDir}/${migrationFile}`, 'utf8')
    const sql = contents.split(/\nEXIT/im).shift()
    if (!sql) {
      throw new Error(`Empty migration`)
    }
    return {
      path: migrationFile,
      timestamp: match[1],
      name: match[2],
      sql
    }
  }

  private async saveTiming<T>(name: string, wrap: (() => Promise<T>) | Promise<T>): Promise<T> {
    const start = process.hrtime()
    const result = typeof wrap === 'function' ? await wrap() : await wrap
    const diff = process.hrtime(start)
    this.timings.push(`${name} ${diff[0]}s ${diff[1] / 1000000}ms`)
    return result
  }
}
