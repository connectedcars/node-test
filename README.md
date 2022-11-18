# node-test

Connected Cars JavaScript/TypeScript testing utilities

https://wiki.connectedcars.io/en/backend/working-on-projects

## Install

``` bash
npm install --save-dev @connectedcars/test
```

## Use

### MySQL integration test

Start a mysqld in a tmp folder and migrate from files in ./migrations:

``` typescript
// Start a new mysqld in a tmp folder
const mySqlServer = new MySQLServer()

// Migrate the started server with migrations from the package @connectedcars/data
const mySqlClient = new MySQLClient({ port: await mySqlServer.getListenPort() })
const migrate = new Migrate({
  mysqlClient: mySqlClient,
  // First try local cache else use the one in @connectedcars/data
  cachePaths:['./cache', './node_modules/@connectedcars/data/cache'],
  migrationsDir: './node_modules/@connectedcars/data/migrations',
})
let migrationResult = await migrate.migrate() // Run all migrations

// Connect to the database and run some queries
const pool = await mySqlClient.getConnectionPool('myDataBase')
const databases: string[] = await this.mySqlClient.queryArray<string>(basePool,
  `
      SELECT SCHEMA_NAME as \`name\`
      FROM information_schema.SCHEMATA;
  `
)
const tableColumns = await this.mySqlClient.query<{ name: string; column: string; extra: string }>(basePool,
  `
      SELECT TABLE_NAME as \`name\`, COLUMN_NAME as \`column\`, EXTRA as extra
      FROM INFORMATION_SCHEMA.COLUMNS
      WHERE TABLE_SCHEMA = DATABASE()
      ORDER BY \`name\`;
  `
)

// Creates a copy of myDataBase with a new name and return a pool with this is a the default database
let myPoolCopy = this.mySqlClient.createDatabaseCopy('myDataBase')
```

To greatly speed up initial start and migrations add an npm script that builds startup cache:

package.json:

``` json5
 "scripts": {
    "build-cache": "cache-migrations",
 }
```

``` bash
npm run build-cache
```

### EnvStub
Stubs all environment variable keys passed into the constructor. This allows you to set the variables in a test case (for example `process.env.LOG_LEVEL = 'ERROR'`) without those changes persisting between test cases.

```typescript
describe('database/config', () => {
  let envStub: EnvStub
  beforeEach(() => {
    envStub = new EnvStub(['CORE_DB', 'LOG_LEVEL'])
  })
  afterEach(() => {
    envStub.restore()
  })
  test('some test', () => {
    // CORE_DB and LOG_LEVEL are always undefined until explicitly defined in a test case
  })
})
```
