import fs from 'fs'
import mysql from 'mysql'
import util from 'util'

import { MySQLClient } from './mysql-client'
import { dumpDatabase } from './mysqld-utils'

const readdir = util.promisify(fs.readdir)
const readFile = util.promisify(fs.readFile)
const mkdirAsync = util.promisify(fs.mkdir)
const existsAsync = util.promisify(fs.exists)

interface MigrationRow {
  timestamp: string
  name: string
}

interface Migration {
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
  migrationsDir?: string
  cachePath?: string
  ignoreCache?: boolean
}

export class Migrate {
  private mysqlClient: MySQLClient
  private migrationsDir: string
  private cachePath: string
  private initPromise: Promise<void>
  private schemaFolders!: string[]
  private databaseMap!: { [key: string]: string[] }
  private basePool!: mysql.Pool
  private ignoreCache: boolean

  public constructor(options: MigrateOptions) {
    this.mysqlClient = options.mysqlClient
    this.migrationsDir = options.migrationsDir || './migrations'
    this.cachePath = options.cachePath || './cache'
    this.ignoreCache = options.ignoreCache || false
    this.initPromise = this.init()
    this.initPromise.catch(() => {
      // Ignore so we don't et unhandled promise rejection
    })
  }

  public async init(): Promise<void> {
    const [databasesJSON, schemaFolders] = await Promise.all([
      readFile(`${this.migrationsDir}/databases.json`, 'utf8'),
      readdir(this.migrationsDir)
    ])
    this.databaseMap = JSON.parse(databasesJSON)
    this.schemaFolders = schemaFolders.filter(s => s in this.databaseMap)

    this.basePool = await this.mysqlClient.getConnectionPool('mysql')
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
    await mkdirAsync(this.cachePath, { recursive: true, mode: 0o777 })
    for (const schemaFolder of this.schemaFolders) {
      await dumpDatabase(
        this.mysqlClient.options.port || 0, // TODO: Make this a lot prettier
        this.databaseMap[schemaFolder],
        `${this.cachePath}/${schemaFolder}.sql`
      )
    }
  }

  public async migrate(until?: string): Promise<MigrationResult> {
    await this.initPromise
    const result: MigrationResult = {}
    const promises: Array<Promise<SchemaMigrationResult>> = []
    for (const schemaFolder of this.schemaFolders) {
      promises.push(this.migrateSchema(schemaFolder, until))
    }
    const migrations = await Promise.all(promises)

    // Populate the MigrationResult structure
    for (const schemaFolder of this.schemaFolders) {
      result[schemaFolder] = migrations.shift() || {}
    }
    return result
  }

  public async migrateSchema(schemaFolder: string, until?: string): Promise<SchemaMigrationResult> {
    const cacheFile = `${this.cachePath}/${schemaFolder}.sql`
    if (!this.ignoreCache && (await existsAsync(cacheFile))) {
      try {
        const contents = await readFile(cacheFile, 'utf8')
        await this.mysqlClient.query(this.basePool, contents)
      } catch (e) {
        throw new Error(`Failed applying cache file ${cacheFile}: ${e}`)
      }
    }
    const result: SchemaMigrationResult = {}
    const migrations = await this.readMigrations(schemaFolder)
    const promises: Array<Promise<Migration[]>> = []
    for (const database of this.databaseMap[schemaFolder]) {
      promises.push(this.migrateDatabase(database, migrations, until))
    }
    const dbMigrations = await Promise.all(promises)

    // Populate the SchemaMigrationResult structure
    for (const database of this.databaseMap[schemaFolder]) {
      result[database] = dbMigrations.shift() || []
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
      if (appliedMigrations.filter(v => v.timestamp === migration.timestamp && v.name === migration.name).length > 0) {
        continue
      }
      try {
        await this.mysqlClient.query(pool, migration.sql)
        await this.mysqlClient.query(pool, 'INSERT INTO `Migrations` (`timestamp`, `name`) VALUES (?, ?)', [
          migration.timestamp,
          migration.name
        ])
        result.push(migration)
      } catch (e) {
        throw new Error(`Failed applying migration "${migration.path}: ${e}"`)
      }
      if (until && until <= migration.timestamp) {
        break
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
}