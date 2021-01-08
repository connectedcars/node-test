import { MySQLClient } from './mysql-client'
import { MySQLServer } from './mysql-server'

describe('MySQLClient', () => {
  let mySqlClient: MySQLClient
  let tmpDatabase: string
  beforeAll(async () => {
    const mySqlServer = new MySQLServer({ mysqlBaseDir: 'mysql-context' })
    console.log(await mySqlServer.getTimings())
    mySqlClient = new MySQLClient({ port: await mySqlServer.getListenPort() })
    tmpDatabase = await mySqlClient.createTmpDatabase(
      `
        CREATE TABLE VehicleInfo (
          id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
          vin VARCHAR(17) NOT NULL,
          vendor VARCHAR(255) NOT NULL, -- VAG
          make VARCHAR(255) NOT NULL, -- Audi
          name VARCHAR(255) NOT NULL, -- Audi Q2 Sport
          year YEAR(4) NOT NULL, -- 2018
          createdAt DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
          updatedAt DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
          vinHashValue1 varchar(255) GENERATED ALWAYS AS (md5(concat(vin))) STORED,
          vinHashValue2 varchar(255) GENERATED ALWAYS AS (md5(concat(vin))) VIRTUAL,
          vinHashValue3 varchar(255) AS (md5(concat(vin))),

          PRIMARY KEY (id),
          UNIQUE KEY vin (vin)
        )
        ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4
        COMMENT 'Basic vehicle information';

        INSERT INTO VehicleInfo (vin, vendor, make, name, year) VALUES ('ABCDEFGHIJ1234567', 'VAG', 'Audi', 'Audi Q2 Sport', 2018);

        CREATE TABLE VehicleInfo2 (
          id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
          vin VARCHAR(17) NOT NULL,
          vendor VARCHAR(255) NOT NULL, -- VAG
          make VARCHAR(255) NOT NULL, -- Audi
          name VARCHAR(255) NOT NULL, -- Audi Q2 Sport
          model VARCHAR(255) NULL,
          year YEAR(4) NOT NULL, -- 2018
          createdAt DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
          updatedAt DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),

          PRIMARY KEY (id),
          UNIQUE KEY vin (vin)
        )
        ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4
        COMMENT 'Basic vehicle information';

        CREATE TABLE VehicleInfo3 (
          id INT(11) UNSIGNED NOT NULL,
          vin VARCHAR(17) NOT NULL,
          vendor VARCHAR(255) NOT NULL, -- VAG
          make VARCHAR(255) NOT NULL, -- Audi
          name VARCHAR(255) NOT NULL, -- Audi Q2 Sport
          model VARCHAR(255) NULL,
          year YEAR(4) NOT NULL, -- 2018
          createdAt DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
          updatedAt DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),

          PRIMARY KEY (id),
          UNIQUE KEY vin (vin)
        )
        ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
        COMMENT 'Basic vehicle information';
      `
    )
  }, 20000)

  afterEach(async () => {
    await mySqlClient?.cleanup()
  })

  it('should create a copy of mysql database and return the name', async () => {
    const database = await mySqlClient.createDatabaseCopy(tmpDatabase)
    const pool = await mySqlClient.getConnectionPool(database)
    const vehicle = await mySqlClient.query<{ user: string }>(pool, `SELECT * from VehicleInfo;`)
    expect(vehicle.length).toBeGreaterThan(0)
  })

  it('should list all tables and columns in tmp database', async () => {
    const pool = await mySqlClient.getConnectionPool(tmpDatabase)
    const tables = await mySqlClient.listTables(pool)
    expect(tables).toMatchSnapshot()
  })

  it('should list all tables and non generated columns in tmp database', async () => {
    const pool = await mySqlClient.getConnectionPool(tmpDatabase)
    const tables = await mySqlClient.listTables(pool, [], true)
    expect(tables).toMatchSnapshot()
  })

  it('should list a subset of tables and columns in tmp database', async () => {
    const pool = await mySqlClient.getConnectionPool(tmpDatabase)
    const tables = await mySqlClient.listTables(pool, ['VehicleInfo'])
    expect(tables).toMatchSnapshot()
    expect(tables.length).toEqual(1)
  })

  it('should compare two equal tables and return true', async () => {
    const pool = await mySqlClient.getConnectionPool(tmpDatabase)
    await expect(
      mySqlClient.compareTable(pool, tmpDatabase, 'VehicleInfo', tmpDatabase, 'VehicleInfo')
    ).resolves.toEqual(true)
  })

  it('should compare two different tables and return', async () => {
    const pool = await mySqlClient.getConnectionPool(tmpDatabase)
    await expect(
      mySqlClient.compareTable(pool, tmpDatabase, 'VehicleInfo', tmpDatabase, 'VehicleInfo2')
    ).resolves.toEqual(false)
  })

  it('should compare two database', async () => {
    const database = await mySqlClient.createDatabaseCopy(tmpDatabase)
    const pool = await mySqlClient.getConnectionPool(database)
    await expect(mySqlClient.compareDatabases(pool, tmpDatabase, database)).resolves.toEqual(true)
    await expect(mySqlClient.compareDatabases(pool, 'mysql', database)).resolves.toEqual(false)
  })

  it('should reuse the checkout', async () => {
    const database1 = await mySqlClient.checkoutDatabase(tmpDatabase)
    await mySqlClient.cleanup()
    const database2 = await mySqlClient.checkoutDatabase(tmpDatabase)
    expect(database1).toEqual(database2)
  })

  it('should make a new checkout because its locked', async () => {
    const database1 = await mySqlClient.checkoutDatabase(tmpDatabase)
    const database2 = await mySqlClient.checkoutDatabase(tmpDatabase)
    expect(database1).not.toEqual(database2)
  })

  it('should fixup the old checkout because we added a row (ddl_changed)', async () => {
    const database1 = await mySqlClient.checkoutDatabase(tmpDatabase)
    const myPool = await mySqlClient.getConnectionPool(database1)
    await mySqlClient.query(
      myPool,
      `
       ALTER TABLE VehicleInfo RENAME COLUMN name TO nickname;
      `
    )
    await mySqlClient.cleanup()
    const database2 = await mySqlClient.checkoutDatabase(tmpDatabase)
    expect(database1).toEqual(database2)
  })

  it('should fixup the old checkout because we added a row (auto_increment_changed)', async () => {
    const database1 = await mySqlClient.checkoutDatabase(tmpDatabase)
    const myPool = await mySqlClient.getConnectionPool(database1)
    await mySqlClient.query(
      myPool,
      `INSERT INTO VehicleInfo (vin, vendor, make, name, year) VALUES ('ABCDEFGHIJ1234568', 'VAG', 'Audi', 'Audi Q2 Sport', 2018);`
    )
    await mySqlClient.cleanup()
    const database2 = await mySqlClient.checkoutDatabase(tmpDatabase)
    expect(database1).toEqual(database2)
  })

  it('should fixup the old checkout because we added a row (data_changed)', async () => {
    const database1 = await mySqlClient.checkoutDatabase(tmpDatabase)
    const myPool = await mySqlClient.getConnectionPool(database1)
    await mySqlClient.query(
      myPool,
      `
        UPDATE VehicleInfo SET year='2020' WHERE id=1
      `
    )
    await mySqlClient.cleanup()
    const database2 = await mySqlClient.checkoutDatabase(tmpDatabase)
    expect(database1).toEqual(database2)
  })

  it('should fixup the old checkout because we added a row (empty_changed)', async () => {
    const database1 = await mySqlClient.checkoutDatabase(tmpDatabase)
    const myPool = await mySqlClient.getConnectionPool(database1)
    console.log(mySqlClient.getTimings())
    await mySqlClient.query(
      myPool,
      `
      INSERT INTO VehicleInfo3 (id, vin, vendor, make, name, year) VALUES (1,'ABCDEFGHIJ1234568', 'VAG', 'Audi', 'Audi Q2 Sport', 2018);
      `
    )
    await mySqlClient.cleanup()
    const database2 = await mySqlClient.checkoutDatabase(tmpDatabase)
    expect(database1).toEqual(database2)
  })

  it('should fixup the old checkout because we added a row (removed)', async () => {
    const database1 = await mySqlClient.checkoutDatabase(tmpDatabase)
    const myPool = await mySqlClient.getConnectionPool(database1)
    await mySqlClient.query(
      myPool,
      `
        DROP TABLE VehicleInfo3;
      `
    )
    await mySqlClient.cleanup()
    const database2 = await mySqlClient.checkoutDatabase(tmpDatabase)
    expect(database1).toEqual(database2)
  })

  it('should fixup the old checkout because we added a row (added)', async () => {
    const database1 = await mySqlClient.checkoutDatabase(tmpDatabase)
    const myPool = await mySqlClient.getConnectionPool(database1)
    console.log(mySqlClient.getTimings())
    await mySqlClient.query(
      myPool,
      `
      CREATE TABLE AddedTable (
        id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
        PRIMARY KEY (id)
      )
      ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
      COMMENT 'Added table';
      `
    )
    await mySqlClient.cleanup()
    const database2 = await mySqlClient.checkoutDatabase(tmpDatabase)
    expect(database1).toEqual(database2)
    console.log(mySqlClient.getTimings())
  })

  it('should only checkout a subset of tables and reuse that checkout', async () => {
    const database1 = await mySqlClient.checkoutDatabase(tmpDatabase, ['VehicleInfo'])
    const myPool = await mySqlClient.getConnectionPool(database1)
    const tables = await mySqlClient.listTables(myPool)
    expect(tables).toContain('VehicleInfo')
  })
})
