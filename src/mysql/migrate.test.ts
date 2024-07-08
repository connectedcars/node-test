/* eslint-disable no-console */
import { Migrate, MigrateOptions } from './migrate'
import { MySQLClient } from './mysql-client'
import { MySQLServer } from './mysql-server'

async function time<T>(promise: Promise<T>): Promise<[T, number]> {
  const start = process.hrtime()
  const result = await promise
  const diff = process.hrtime(start)
  return [result, diff[0] * 1000000 + diff[1] / 1000]
}

describe('Migrate', () => {
  const mysqldPath = process.env['MYSQLD']
  const defaultTestMigrationPaths = ['src/mysql/resources/migrations']

  let mySqlClient: MySQLClient

  async function doInitialMigrate(migrateOptions: Partial<MigrateOptions> = {}): Promise<Migrate> {
    const mergedOptions = {
      mysqlClient: mySqlClient,
      migrationsPaths: defaultTestMigrationPaths,
      ignoreCache: true,
      ...migrateOptions
    }

    // Do initial migration and without using cache
    const initialMigrate = new Migrate(mergedOptions)
    await initialMigrate.cleanup()

    return initialMigrate
  }

  beforeAll(async () => {
    const mySqlServer = new MySQLServer({ mysqlBaseDir: 'mysql-context', mysqldPath })
    // console.log(await mySqlServer.getTimings())
    mySqlClient = new MySQLClient({ port: await mySqlServer.getListenPort() })
  }, 30000)

  afterEach(async () => {
    await mySqlClient?.cleanup()
  })

  it('should migrate schema over two migration runs', async () => {
    const initialMigrate = await doInitialMigrate()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [migrationResultBefore, timingBefore] = await time(initialMigrate.migrate('2020-04-02T165700'))
    // console.log(timingBefore / 1000)
    const pool = await mySqlClient.getConnectionPool('my_test01')
    const columnsBefore = await mySqlClient.queryArray<string>(
      pool,
      `
        SELECT COLUMN_NAME AS 'column'
        FROM INFORMATION_SCHEMA.COLUMNS
        WHERE TABLE_SCHEMA ='my_test01' AND TABLE_NAME='VehicleInfo'
        ORDER BY 'column';
      `
    )
    expect(columnsBefore.sort()).toMatchSnapshot()
    expect(migrationResultBefore).toMatchSnapshot()

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [migrationResultAfter, timingAfter] = await time(initialMigrate.migrate('2020-04-02T165700'))
    // console.log(timingAfter / 1000)
    const columnsAfter = await mySqlClient.queryArray<string>(
      pool,
      `
        SELECT COLUMN_NAME AS 'column'
        FROM INFORMATION_SCHEMA.COLUMNS
        WHERE TABLE_SCHEMA ='my_test01' AND TABLE_NAME='VehicleInfo'
        ORDER BY 'column';
      `
    )
    expect(columnsAfter.sort()).toMatchSnapshot()
    expect(migrationResultAfter).toMatchSnapshot()
  })

  it('should migrate schema creating cache and use this to restore state when migrating again', async () => {
    const initialMigrate = await doInitialMigrate()
    const migrationResultBefore = await initialMigrate.migrate()
    await initialMigrate.cacheSchemas()
    expect(migrationResultBefore).toMatchSnapshot()

    const cachedMigrate = new Migrate({
      mysqlClient: mySqlClient,
      migrationsPaths: defaultTestMigrationPaths
    })

    await cachedMigrate.cleanup()
    const migrationResultAfter = await cachedMigrate.migrate()
    expect(migrationResultAfter).toMatchSnapshot()
  })

  it('should migrate until bad sql and not redo the succeeded statements', async () => {
    const initialMigrate = await doInitialMigrate({
      migrationsPaths: ['src/mysql/resources/bad-migrations']
    })

    await expect(initialMigrate.migrate()).rejects.toThrow(/ER_PARSE_ERROR:.*BAD SQL/)
    await expect(initialMigrate.migrate()).rejects.toThrow(/ER_PARSE_ERROR:.*BAD SQL/)
  })

  const characterSetsCollationTestCases = [
    [
      'character sets on tables',
      'bad-charset-on-table',
      "Migration sets disallowed character set 'utf8mb3', use 'utf8mb4' instead (test/2023-01-25T133454_DisallowedCharSetOnTable.sql)"
    ],
    [
      'character sets in alter table statements',
      'bad-charset-alter-table',
      "Migration sets disallowed character set 'latin7', use 'utf8mb4' instead (test/2023-01-25T133454_DisallowedCharSetInAlterTable.sql)"
    ],
    [
      'collations on tables',
      'bad-collation-on-table',
      "Migration sets disallowed collation 'utf8mb4_0900_ai_ci', use 'utf8mb4_general_ci' instead (test/2023-01-25T133454_DisallowedCollationOnTable.sql)"
    ],
    [
      'collations in alter table statements',
      'bad-collation-alter-table',
      "Migration sets disallowed collation 'utf8mb4_da_0900_ai_ci', use 'utf8mb4_general_ci' instead (test/2023-01-25T133454_DisallowedCollationInAlterTable.sql)"
    ]
  ]

  it.each(characterSetsCollationTestCases)(
    'should throw an error for disallowed %s',
    async (_, migrationsPaths, errorMessage) => {
      const initialMigrate = await doInitialMigrate({
        migrationsPaths: [`src/mysql/resources/${migrationsPaths}`]
      })

      await expect(initialMigrate.migrate()).rejects.toThrow(errorMessage)
    }
  )

  it('skips character set and collation checks for some migrations', async () => {
    const initialMigrate = await doInitialMigrate({
      migrationsPaths: ['src/mysql/resources/skip-migration-charactersets-collation-checks'],
      skipCharacterSetCollationChecks: ['test/2018-05-07T133403_AddSomeTable.sql']
    })

    await expect(initialMigrate.migrate()).resolves.not.toThrow()
  })

  it('should throw an error for missing character set on new tables', async () => {
    const initialMigrate = await doInitialMigrate({
      migrationsPaths: ['src/mysql/resources/missing-character-set-on-new-tables']
    })

    await expect(initialMigrate.migrate()).rejects.toThrow(
      'Found 4 create table statement(s) with missing character sets (test/2024-05-24T150800_MissingCharacterSetOnNewTables.sql)'
    )
  })

  it('should throw an error for missing collation on new tables', async () => {
    const initialMigrate = await doInitialMigrate({
      migrationsPaths: ['src/mysql/resources/missing-collation-on-new-tables']
    })

    await expect(initialMigrate.migrate()).rejects.toThrow(
      'Found 2 create table statement(s) with missing collations (test/2024-05-24T150800_MissingCollationOnNewTables.sql)'
    )
  })

  it('should do no migrations under dryRun', async () => {
    const pool = await mySqlClient.getConnectionPool('mysql')
    await mySqlClient.query(pool, 'CREATE DATABASE `my_test01` CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;')

    const initialMigrate = await doInitialMigrate({
      dryRun: true
    })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [, timingBefore] = await time(initialMigrate.migrate('2020-04-02T165700'))
    // console.log(timingBefore / 1000)

    const tables = await mySqlClient.queryArray<string>(
      pool,
      `
        SELECT *
        FROM INFORMATION_SCHEMA.COLUMNS
        WHERE TABLE_SCHEMA like 'connectedcars%'
        ORDER BY 'column';
      `
    )
    expect(tables).toEqual([])
  })

  const timestampTestCases = [
    [
      'timestamps on tables',
      'timestamp-on-table',
      'Migration uses disallowed TIMESTAMP type, use DATETIME type instead (test/2023-01-25T133454_DisallowedTimestampsOnTable.sql)'
    ],
    [
      'timestamps in alter table statements',
      'timestamp-alter-table',
      'Migration uses disallowed TIMESTAMP type, use DATETIME type instead (test/2023-01-25T133454_DisallowedTimestampsInAlterTable.sql)'
    ]
  ]

  it.each(timestampTestCases)('should throw an error for disallowed %s', async (_, migrationsPaths, errorMessage) => {
    const initialMigrate = await doInitialMigrate({
      migrationsPaths: [`src/mysql/resources/${migrationsPaths}`]
    })

    await expect(initialMigrate.migrate()).rejects.toThrow(errorMessage)
  })

  it('skips timestamp checks in comments', async () => {
    const initialMigrate = await doInitialMigrate({
      migrationsPaths: ['src/mysql/resources/ignore-timestamp-in-comment']
    })

    await expect(initialMigrate.migrate()).resolves.not.toThrow()
  })

  it('skips timestamp checks in rollback sections', async () => {
    const initialMigrate = await doInitialMigrate({
      migrationsPaths: ['src/mysql/resources/timestamp-rollback'],
      skipTimestampChecks: ['test/2018-06-25T123605_addSomeTable.sql']
    })

    await expect(initialMigrate.migrate()).resolves.not.toThrow()
  })

  it('skips timestamp checks for some migrations', async () => {
    const initialMigrate = await doInitialMigrate({
      migrationsPaths: ['src/mysql/resources/skip-migration-timestamps-checks'],
      skipTimestampChecks: ['test/2024-06-12T095700_addSomeTable.sql']
    })

    await expect(initialMigrate.migrate()).resolves.not.toThrow()
  })

  // eslint-disable-next-line jest/no-commented-out-tests
  /* it.skip('should migrate data repo to newest version', async () => {
    const migrate = new Migrate({
      mysqlClient: mySqlClient,
      migrationsPaths: ['data/migrations']
    })
    await migrate.cleanup()
    const [migrationResult, timingBefore] = await time(migrate.migrate())
    console.log(timingBefore / 1000)
  }, 60_000) */
})
