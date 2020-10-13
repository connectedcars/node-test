import crypto from 'crypto'
import mysql from 'mysql'

export type MySQLClientOptions = mysql.PoolConfig

export class MySQLClient {
  public options: MySQLClientOptions
  private databasePools: { [key: string]: mysql.Pool } = {}
  private lockConnections: mysql.Connection[] = []
  private timings: string[] = []

  public constructor(options: MySQLClientOptions = {}) {
    this.options = {
      host: '127.0.0.1',
      user: 'root',
      password: '',
      connectionLimit: 10,
      insecureAuth: true,
      multipleStatements: true,
      charset: 'utf8mb4',
      ...options
    }
  }

  public async getTimings(): Promise<string[]> {
    return this.timings
  }

  public async getConnection(database: string, options?: MySQLClientOptions): Promise<mysql.Connection> {
    return mysql.createConnection({
      ...this.options,
      ...options,
      database: database
    })
  }

  public async getConnectionPool(database: string, cache = true, options?: MySQLClientOptions): Promise<mysql.Pool> {
    let pool = cache ? this.databasePools[database] : null
    if (!pool) {
      pool = mysql.createPool({
        ...this.options,
        ...options,
        database: database
      })
      if (cache) {
        this.databasePools[database] = pool
      }
    }
    return pool
  }

  public async query<T>(pool: mysql.Pool | mysql.Connection, sql: string, values?: string[]): Promise<T[]> {
    return new Promise((resolve, reject) => {
      pool.query(sql, values, (error, results) => {
        if (error) {
          return reject(error)
        }
        return resolve(results as [])
      })
    })
  }

  public async querySingle<T>(pool: mysql.Pool | mysql.Connection, sql: string, values?: string[]): Promise<T | null> {
    const result = await this.query<T>(pool, sql, values)
    if (result.length > 0) {
      return result[0]
    }
    return null
  }

  public async queryArray<T>(pool: mysql.Pool | mysql.Connection, sql: string, values?: string[]): Promise<T[]> {
    const result = await this.query<{ [key: string]: T }>(pool, sql, values)
    if (result.length == 0) {
      return []
    }
    const column = Object.keys(result[0])[0]
    return result.map(r => r[column])
  }

  public async takeLock(lockConnection: mysql.Connection, name: string): Promise<boolean> {
    const res = await this.querySingle<{ lockStatus: number }>(
      lockConnection,
      `
        SELECT GET_LOCK('${name}', 0) as lockStatus;
      `
    )
    return res?.lockStatus === 1
  }

  public async hasLock(lockConnection: mysql.Connection, name: string): Promise<boolean> {
    const res = await this.querySingle<{ lockStatus: number }>(
      lockConnection,
      `
        SELECT IS_USED_LOCK('${name}') = CONNECTION_ID() as lockStatus;
      `
    )
    return res?.lockStatus === 1
  }

  public async createTmpDatabase(sql?: string): Promise<string> {
    const pool = await this.getConnectionPool('mysql')
    const database = 'tmp-' + crypto.randomBytes(4).toString('hex')
    await this.query(
      pool,
      `CREATE DATABASE IF NOT EXISTS \`${database}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;`
    )
    if (sql) {
      const myPool = await this.getConnectionPool(database, true, { connectionLimit: 10 })
      await this.query(myPool, sql)
    }

    return database
  }

  public async dropDatabase(database: string): Promise<void> {
    const pool = await this.getConnectionPool('mysql')
    await this.query(pool, `DROP DATABASE IF EXISTS \`${database}\`;`)
  }

  public async checkoutDatabase(database: string, readonly = false): Promise<string> {
    // TODO: Look into reusing the copied database "SELECT TABLE_NAME, UPDATE_TIME FROM information_schema.tables;"

    let pool: mysql.Pool | null = null
    try {
      // Disable foreign keys for these connections
      pool = await this.getConnectionPool(database, false, { connectionLimit: 10 })
      pool.on('connection', connection => {
        connection.query(`
          SET SESSION FOREIGN_KEY_CHECKS=0;
          SET SQL_MODE='ALLOW_INVALID_DATES'
        `)
      })

      const checkouts = await this.queryArray<string>(
        pool,
        `
        SELECT SCHEMA_NAME as \`name\` FROM information_schema.SCHEMATA
        WHERE SCHEMA_NAME LIKE 'checkout_${database}%';
        `
      )

      const lockConnection = await this.getConnection('mysql')
      this.lockConnections.push(lockConnection)

      // Try to get a lock of some of the existing checkouts
      for (const checkout of checkouts) {
        if (await this.takeLock(lockConnection, checkout)) {
          if (await this.compareDatabases(pool, database, checkout)) {
            return checkout
          } else {
            // TODO: Be smarter about this and only drop tables that changed or delete data and recopy
            await this.dropDatabase(checkout)
          }
        }
      }

      const checkout = `checkout_${database}-` + crypto.randomBytes(2).toString('hex')
      await this.takeLock(lockConnection, checkout)
      await this.cloneDatabase(pool, checkout)
      return checkout
    } finally {
      pool?.end()
    }
  }

  // https://gist.github.com/christopher-hopper/8431737
  public async createDatabaseCopy(database: string, tables: string[] = []): Promise<string> {
    // TODO: Look into reusing the copied database "SELECT TABLE_NAME, UPDATE_TIME FROM information_schema.tables;"
    let pool: mysql.Pool | null = null
    try {
      // Disable foreign keys for these connections
      pool = await this.getConnectionPool(database, false, { connectionLimit: 10 })
      pool.on('connection', connection => {
        connection.query(`
          SET SESSION FOREIGN_KEY_CHECKS=0;
          SET SQL_MODE='ALLOW_INVALID_DATES'
        `)
      })

      // Create target database
      const databasePostfix = crypto.randomBytes(2).toString('hex')
      const destinationDatabase = `${database}-${databasePostfix}`
      await this.cloneDatabase(pool, destinationDatabase)

      return destinationDatabase
    } finally {
      pool?.end()
    }
  }

  public async compareDatabases(pool: mysql.Pool, database1: string, database2: string): Promise<boolean> {
    const tables = await this.query<{ name: string; database: string }>(
      pool,
      `
        SELECT table_name as name, table_schema as \`database\` FROM information_schema.tables
        WHERE table_schema IN('${database1}', '${database2}');
      `
    )

    // Check if we have table in either database that does not exists in the other
    const tableNames1 = tables
      .filter(t => t.database === database1)
      .map(t => t.name)
      .sort()
    const tablesName2 = tables
      .filter(t => t.database === database2)
      .map(t => t.name)
      .sort()
    const isSame = tableNames1.every(t => tablesName2.includes(t)) && tablesName2.every(e => tableNames1.includes(e))
    if (!isSame) {
      return false
    }

    const promises: Promise<boolean>[] = []
    for (const table of tables) {
      promises.push(this.compareTable(pool, database1, table.name, database2, table.name))
    }
    const result = await Promise.all(promises)
    return result.every(r => r === true)
  }

  public async cloneDatabase(pool: mysql.Pool, destinationDatabase: string): Promise<void> {
    // Fetch charset and collation from source database
    const dbInfo = await this.query<{ charset: string; collation: string }>(
      pool,
      `
        SELECT default_character_set_name AS 'charset', DEFAULT_COLLATION_NAME AS 'collation'
        FROM information_schema.SCHEMATA WHERE SCHEMA_NAME = DATABASE();
      `
    )

    await this.query(
      pool,
      `
        CREATE DATABASE \`${destinationDatabase}\` CHARACTER SET ${dbInfo[0].charset} COLLATE ${dbInfo[0].collation};
      `
    )

    // Find all tables and their columns in the database
    // -- SELECT TABLE_NAME AS name FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = DATABASE();
    const tableColumns = await this.query<{ name: string; column: string; extra: string }>(
      pool,
      `
        SELECT TABLE_NAME as \`name\`, COLUMN_NAME as \`column\`, EXTRA as extra
        FROM INFORMATION_SCHEMA.COLUMNS
        WHERE TABLE_SCHEMA = DATABASE()
        ORDER BY \`name\`;
      `
    )
    const tables: Array<{ name: string; columns: string[] }> = []
    for (const tableColumn of tableColumns) {
      if (tableColumn.extra.match(/GENERATED/)) {
        // Skip generated columns as we can't INSERT TO them
        continue
      }
      const lastTable = tables.length > 0 ? tables[tables.length - 1] : { name: '', columns: [] }
      if (lastTable.name === tableColumn.name) {
        lastTable.columns.push(tableColumn.column)
      } else {
        tables.push({
          name: tableColumn.name,
          columns: [tableColumn.column]
        })
      }
    }

    const promises: Promise<void>[] = []
    for (const table of tables) {
      promises.push(this.cloneTable(pool, table.name, destinationDatabase, table.name, table.columns))
    }
    await Promise.all(promises)
  }

  public async compareTable(
    pool: mysql.Pool,
    database1: string,
    table1: string,
    database2: string,
    table2: string
  ): Promise<boolean> {
    return (
      (await this.compareTableDdl(pool, database1, table1, database2, table2)) &&
      (await this.compareTableData(pool, database1, table1, database2, table2))
    )
  }

  public async compareTableData(
    pool: mysql.Pool,
    database1: string,
    table1: string,
    database2: string,
    table2: string
  ): Promise<boolean> {
    const table1Checksum = await this.querySingle<{ Checksum: string }>(
      pool,
      ` CHECKSUM TABLE \`${database1}\`.\`${table1}\`;`
    )
    const table2Checksum = await this.querySingle<{ Checksum: string }>(
      pool,
      ` CHECKSUM TABLE \`${database2}\`.\`${table2}\`;`
    )
    return table1Checksum?.Checksum === table2Checksum?.Checksum
  }

  public async compareTableDdl(
    pool: mysql.Pool,
    database1: string,
    table1: string,
    database2: string,
    table2: string
  ): Promise<boolean> {
    const table1Ddl = await this.querySingle<{ 'Create Table': string }>(
      pool,
      `SHOW CREATE TABLE \`${database1}\`.\`${table1}\`;`
    )
    const table2Ddl = await this.querySingle<{ 'Create Table': string }>(
      pool,
      `SHOW CREATE TABLE \`${database2}\`.\`${table2}\`;`
    )
    return table1Ddl?.['Create Table'] === table2Ddl?.['Create Table']
  }

  public async cloneTable(
    pool: mysql.Pool,
    sourceTable: string,
    destinationDatabase: string,
    destinationTable: string,
    columns?: string[]
  ): Promise<void> {
    const selectColumns = columns ? columns.map(c => `\`${c}\``).join(', ') : '*'
    const insertColumns = columns ? `(${selectColumns})` : ''

    await this.query(
      pool,
      `
        CREATE TABLE \`${destinationDatabase}\`.\`${destinationTable}\` LIKE \`${sourceTable}\`;
        ALTER TABLE \`${destinationDatabase}\`.\`${destinationTable}\` DISABLE KEYS;
        INSERT INTO \`${destinationDatabase}\`.\`${destinationTable}\` ${insertColumns} SELECT ${selectColumns} FROM \`${sourceTable}\`;
        ALTER TABLE \`${destinationDatabase}\`.\`${destinationTable}\` ENABLE KEYS;
      `
    )
  }

  public async cleanup(): Promise<void> {
    for (const database of Object.keys(this.databasePools)) {
      await new Promise(resolve => this.databasePools[database].end(resolve))
      delete this.databasePools[database]
    }
    while (this.lockConnections.length > 0) {
      const connection = this.lockConnections.shift()
      await new Promise(resolve => connection?.end(resolve))
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
