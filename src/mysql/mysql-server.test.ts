import mysql from 'mysql'

import { MySQLServer } from './mysql-server'

interface SimpleResult {
  solution: number
}

async function query<T>(connection: mysql.Connection, sql: string): Promise<T[]> {
  return new Promise((resolve, reject) => {
    connection.query(sql, (error, results) => {
      if (error) {
        return reject(error)
      }
      resolve(results)
    })
  })
}

describe('MySQLServer', () => {
  let mySqlServer: MySQLServer | null = null

  afterEach(async () => {
    await mySqlServer?.stop()
  })

  it('Should start the database server', async () => {
    mySqlServer = new MySQLServer()
    // TODO: Add support for getting a cloned database, https://dev.mysql.com/doc/refman/5.7/en/create-table-like.html
    // fx. mySqlServer.getConnectionUrl('mysql') -> 'mysql://.../mysql-test-copy'
    let connection: mysql.Connection | null = null
    try {
      const connectionUrl = `mysql://root:@127.0.0.1:${await mySqlServer.getListenPort()}/mysql?charset=utf8mb4&multipleStatements=true`
      connection = mysql.createConnection(connectionUrl)
      const result = await query<SimpleResult>(connection, 'SELECT 1 + 1 AS solution')
      expect(result).toMatchObject([{ solution: 2 }])
    } finally {
      connection?.end()
    }
  }, 10000)
})