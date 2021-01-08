import crypto from 'crypto'
import mysql from 'mysql'

export type MySQLClientOptions = mysql.PoolConfig

export enum TableCompare {
  CountChanged = 'count_changed',
  EmptyChanged = 'empty_changed',
  DataChanged = 'data_changed',
  DdlChanged = 'ddl_changed',
  AutoIncrementChanged = 'auto_increment_changed',
  Added = 'added',
  Removed = 'removed',
  Same = 'same'
}

export interface TableDiff {
  type: TableCompare
  table: string
}

export interface Timing {
  name: string
  start: [number, number]
  end?: [number, number]
  diff?: [number, number]
}

export class MySQLClient {
  public options: MySQLClientOptions
  private databasePools: { [key: string]: mysql.Pool } = {}
  private lockConnections: mysql.Connection[] = []
  private timings: Timing[] = []

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

  public getTimings(): string[] {
    return this.timings.flatMap(t => (t.diff ? [`${t.name} ${t.diff[0]}s ${t.diff[1] / 1000000}ms`] : []))
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

  public async releaseAllLocks(lockConnection: mysql.Connection): Promise<number> {
    const res = await this.querySingle<{ releasedCount: number }>(
      lockConnection,
      `
        SELECT RELEASE_ALL_LOCKS() as releasedCount;
      `
    )
    return res?.releasedCount || 0
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

  public async dropTable(database: string, table: string): Promise<void> {
    const pool = await this.getConnectionPool('mysql')
    await this.query(pool, `DROP TABLE IF EXISTS \`${database}\`.\`${table}\`;`)
  }

  public async truncateTable(database: string, table: string, resetAutoIncrement?: number): Promise<void> {
    const pool = await this.getConnectionPool('mysql')
    await this.query(
      pool,
      `
        TRUNCATE TABLE \`${database}\`.\`${table}\`; 
        ${resetAutoIncrement ? `ALTER TABLE \`${database}\`.\`${table}\` AUTO_INCREMENT = ${resetAutoIncrement};` : ''}
      `
    )
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async checkoutDatabase(database: string, tables: string[] = []): Promise<string> {
    // TODO: Look into reusing the copied database with "SELECT TABLE_NAME, UPDATE_TIME FROM information_schema.tables; as this could be quicker"

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
        WHERE SCHEMA_NAME LIKE 'checkout_${database}%'
        ORDER BY name;
        `
      )

      const lockConnection = await this.getConnection('mysql')
      this.lockConnections.push(lockConnection)

      // Try to get a lock of some of the existing checkouts
      for (const checkout of checkouts) {
        if (await this.takeLock(lockConnection, checkout)) {
          const diff = await this.compareDatabasesDiff(pool, database, checkout, tables)
          if (diff.every(t => t.type === 'same')) {
            return checkout
          } else {
            this.startTiming(`checkoutDatabase:${checkout}:fixup`)
            // TODO: Maybe use dropTable + cloneTable or event dropDatabase and create new checkout if the diff is very large might be quicker
            for (const change of diff) {
              if (change.type === 'removed') {
                await this.cloneTable(pool, change.table, checkout, change.table)
              } else if (change.type === 'added') {
                await this.dropTable(checkout, change.table)
              } else if (change.type === 'ddl_changed') {
                await this.dropTable(checkout, change.table)
                await this.cloneTable(pool, change.table, checkout, change.table)
              } else if (change.type === 'auto_increment_changed') {
                const autoIncrement = await this.getTableAutoIncrement(pool, database, change.table)
                await this.truncateTable(checkout, change.table, autoIncrement)
                await this.copyTableData(pool, change.table, checkout, change.table)
              } else if (change.type === 'empty_changed') {
                await this.truncateTable(checkout, change.table)
              } else if (change.type === 'data_changed') {
                await this.truncateTable(checkout, change.table)
                await this.copyTableData(pool, change.table, checkout, change.table)
              }
            }

            this.saveTiming(`checkoutDatabase:${checkout}:fixup`)
            return checkout
          }
        }
      }

      const checkout = `checkout_${database}-` + crypto.randomBytes(2).toString('hex')
      this.startTiming(`checkoutDatabase:${checkout}:cloneDatabase`)
      await this.takeLock(lockConnection, checkout)
      await this.cloneDatabase(pool, checkout)
      this.saveTiming(`checkoutDatabase:${checkout}:cloneDatabase`)
      return checkout
    } finally {
      pool?.end()
    }
  }

  // https://gist.github.com/christopher-hopper/8431737
  public async createDatabaseCopy(database: string, tables: string[] = []): Promise<string> {
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
      await this.cloneDatabase(pool, destinationDatabase, tables)

      return destinationDatabase
    } finally {
      pool?.end()
    }
  }

  public async compareDatabases(
    pool: mysql.Pool,
    database1: string,
    database2: string,
    tables: string[] = []
  ): Promise<boolean> {
    const result = await this.compareDatabasesDiff(pool, database1, database2, tables)
    return result.every(r => r.type === 'same')
  }

  public async compareDatabasesDiff(
    pool: mysql.Pool,
    database1: string,
    database2: string,
    tables: string[] = []
  ): Promise<TableDiff[]> {
    const allTables = await this.query<{ name: string; database: string }>(
      pool,
      `
        SELECT table_name as name, table_schema as \`database\` FROM information_schema.tables
        WHERE table_schema IN('${database1}', '${database2}');
      `
    )

    const tableNames1 = allTables.filter(t => t.database === database1).map(t => t.name)
    const tableNames2 = allTables.filter(t => t.database === database2).map(t => t.name)

    const removed: string[] = []
    const added: string[] = []
    if (tables.length > 0) {
      const missingInSource = tables.filter(t => !tableNames1.includes(t))
      if (missingInSource.length > 0) {
        throw new Error(`Tables missing in ${database1}: ${missingInSource.join(',')}`)
      }
      removed.push(...tables.filter(t => !tableNames2.includes(t)))
    } else {
      removed.push(...tableNames1.filter(t => !tableNames2.includes(t)))
      added.push(...tableNames2.filter(t => !tableNames1.includes(t)))
      tables = tableNames1
    }

    // Make sure we only compare to tables that exist in database2
    tables = tables.filter(t => tableNames2.includes(t))

    const tableComparePromises: Promise<TableCompare>[] = []
    for (const tableName of tables) {
      tableComparePromises.push(this.compareTableDiff(pool, database1, tableName, database2, tableName))
    }
    const tableCompareResults = await Promise.all(tableComparePromises)

    return [
      ...removed.map<TableDiff>(t => {
        return { type: TableCompare.Removed, table: t }
      }),
      ...added.map<TableDiff>(t => {
        return { type: TableCompare.Added, table: t }
      }),
      ...tables.map((table, i) => {
        return {
          table,
          type: tableCompareResults[i]
        }
      })
    ]
  }

  public async listTables(
    pool: mysql.Pool,
    tables: string[] = [],
    skipGenerated = false
  ): Promise<Array<{ name: string; columns: string[] }>> {
    // Find all tables and their columns in the database
    // -- SELECT TABLE_NAME AS name FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = DATABASE();
    const tableColumns = await this.query<{ name: string; column: string; extra: string }>(
      pool,
      `
        SELECT TABLE_NAME as \`name\`, COLUMN_NAME as \`column\`, EXTRA as extra
        FROM INFORMATION_SCHEMA.COLUMNS
        WHERE TABLE_SCHEMA = DATABASE()
        ${tables.length > 0 ? `AND TABLE_NAME IN (${tables.map(t => `'${t}'`).join(',')})` : ''}
        ORDER BY TABLE_NAME, ORDINAL_POSITION;
      `
    )
    const allTables: Array<{ name: string; columns: string[] }> = []
    for (const tableColumn of tableColumns) {
      if (skipGenerated && tableColumn.extra.match(/(:?STORED|VIRTUAL) GENERATED/)) {
        // Skip generated columns as we can't INSERT TO them
        continue
      }
      const lastTable = allTables.length > 0 ? allTables[allTables.length - 1] : { name: '', columns: [] }
      if (lastTable.name === tableColumn.name) {
        lastTable.columns.push(tableColumn.column)
      } else {
        allTables.push({
          name: tableColumn.name,
          columns: [tableColumn.column]
        })
      }
    }
    return allTables
  }

  public async cloneDatabase(pool: mysql.Pool, destinationDatabase: string, tables: string[] = []): Promise<void> {
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

    const allTables = await this.listTables(pool, tables, true)
    const promises: Promise<void>[] = []
    for (const table of allTables) {
      promises.push(this.cloneTable(pool, table.name, destinationDatabase, table.name, table.columns))
    }
    await Promise.all(promises)
  }

  public async compareTableDiff(
    pool: mysql.Pool,
    database1: string,
    table1: string,
    database2: string,
    table2: string
  ): Promise<TableCompare> {
    const table1Ddl = await this.getTableDdl(pool, database1, table1)
    const table2Ddl = await this.getTableDdl(pool, database2, table2)
    if (table1Ddl !== table2Ddl) {
      if (table1Ddl.replace(/AUTO_INCREMENT=\d+/, '') === table2Ddl.replace(/AUTO_INCREMENT=\d+/, '')) {
        return TableCompare.AutoIncrementChanged
      }
      return TableCompare.DdlChanged
    }
    const table1Count = await this.getTableRowCount(pool, database1, table1)
    const table2Count = await this.getTableRowCount(pool, database2, table2)
    if (table1Count !== table2Count) {
      if (table1Count === 0) {
        return TableCompare.EmptyChanged
      }
      return TableCompare.CountChanged
    }
    if (!(await this.compareTableData(pool, database1, table1, database2, table2))) {
      return TableCompare.DataChanged
    }
    return TableCompare.Same
  }

  public async compareTable(
    pool: mysql.Pool,
    database1: string,
    table1: string,
    database2: string,
    table2: string
  ): Promise<boolean> {
    return (await this.compareTableDiff(pool, database1, table1, database2, table2)) === 'same'
  }

  public async getTableRowCount(pool: mysql.Pool, database1: string, table1: string): Promise<number> {
    const tableCount = await this.querySingle<{ count: number }>(
      pool,
      `SELECT COUNT(*) AS count FROM \`${database1}\`.\`${table1}\`;`
    )
    if (!tableCount) {
      throw new Error(`Count result did not return value`)
    }
    return tableCount.count
  }

  public async compareTableCount(
    pool: mysql.Pool,
    database1: string,
    table1: string,
    database2: string,
    table2: string
  ): Promise<boolean> {
    return (
      (await this.getTableRowCount(pool, database1, table1)) === (await this.getTableRowCount(pool, database2, table2))
    )
  }

  public async getTableAutoIncrement(pool: mysql.Pool, database: string, table: string): Promise<number | undefined> {
    const autoIncrement = await this.querySingle<{ autoIncrement: number }>(
      pool,
      `SELECT \`AUTO_INCREMENT\` as autoIncrement FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = '${database}' AND TABLE_NAME = '${table}';`
    )
    return autoIncrement?.autoIncrement
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

  public async getTableDdl(pool: mysql.Pool, database: string, table: string): Promise<string> {
    const tableDdl = await this.querySingle<{ 'Create Table': string }>(
      pool,
      `SHOW CREATE TABLE \`${database}\`.\`${table}\`;`
    )
    if (!tableDdl) {
      throw new Error('Failed to get table DDL')
    }

    return tableDdl['Create Table']
  }

  public async compareTableDdl(
    pool: mysql.Pool,
    database1: string,
    table1: string,
    database2: string,
    table2: string,
    ignoreAutoIncrement = false
  ): Promise<boolean> {
    const table1Ddl = await this.getTableDdl(pool, database1, table1)
    const table2Ddl = await this.getTableDdl(pool, database2, table2)
    if (ignoreAutoIncrement) {
      return table1Ddl.replace(/AUTO_INCREMENT=\d+/, '') === table2Ddl.replace(/AUTO_INCREMENT=\d+/, '')
    }
    return table1Ddl === table2Ddl
  }

  public async copyTableData(
    pool: mysql.Pool,
    sourceTable: string,
    destinationDatabase: string,
    destinationTable: string,
    columns: string[] = []
  ): Promise<void> {
    if (columns.length === 0) {
      const tables = await this.listTables(pool, [sourceTable], true)
      if (tables.length === 0) {
        throw new Error(`Table ${sourceTable} does not exist`)
      }
      columns = tables[0].columns
    }
    const selectColumns = columns ? columns.map(c => `\`${c}\``).join(', ') : '*'
    const insertColumns = columns ? `(${selectColumns})` : ''

    await this.query(
      pool,
      ` 
        ALTER TABLE \`${destinationDatabase}\`.\`${destinationTable}\` DISABLE KEYS;
        INSERT INTO \`${destinationDatabase}\`.\`${destinationTable}\` ${insertColumns} SELECT ${selectColumns} FROM \`${sourceTable}\`;
        ALTER TABLE \`${destinationDatabase}\`.\`${destinationTable}\` ENABLE KEYS;
      `
    )
  }

  public async cloneTable(
    pool: mysql.Pool,
    sourceTable: string,
    destinationDatabase: string,
    destinationTable: string,
    columns: string[] = []
  ): Promise<void> {
    await this.query(
      pool,
      `
        CREATE TABLE \`${destinationDatabase}\`.\`${destinationTable}\` LIKE \`${sourceTable}\`;
      `
    )
    await this.copyTableData(pool, sourceTable, destinationDatabase, destinationTable, columns)
  }

  public async cleanup(): Promise<void> {
    for (const database of Object.keys(this.databasePools)) {
      await new Promise(resolve => this.databasePools[database].end(resolve))
      delete this.databasePools[database]
    }
    while (this.lockConnections.length > 0) {
      const connection = this.lockConnections.shift()
      if (connection) {
        await this.releaseAllLocks(connection)
        await new Promise(resolve => connection.end(resolve))
      }
    }
    this.timings.length = 0
  }

  private startTiming(name: string): void {
    const start = process.hrtime()
    this.timings.push({ name, start })
  }

  private saveTiming(name: string): void
  private async saveTiming<T = void>(name: string, wrap: (() => Promise<T>) | Promise<T>): Promise<T>
  private async saveTiming(name: string, wrap?: (() => Promise<unknown>) | Promise<unknown>): Promise<unknown> {
    if (wrap) {
      const start = process.hrtime()
      const result = typeof wrap === 'function' ? await wrap() : await wrap
      const diff = process.hrtime(start)
      this.timings.push({ name, start, diff })
      return result
    }
    for (const timing of this.timings.reverse()) {
      if (timing.name === name) {
        timing.diff = process.hrtime(timing.start)
        return
      }
    }
    return
  }
}
