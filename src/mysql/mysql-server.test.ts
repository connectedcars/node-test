/* eslint-disable no-console */
import mysql from 'mysql'

import { createTempDirectory } from '../unix'
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
  const mysqldPath = process.env['MYSQLD']

  let tmpDir = ''
  beforeAll(async () => {
    tmpDir = await createTempDirectory()
  })

  it('Should start a new database server in a tmp folder', async () => {
    let mySqlServer: MySQLServer | null = null
    let connection: mysql.Connection | null = null
    try {
      mySqlServer = new MySQLServer({ mysqlBaseDir: tmpDir, mysqldPath })
      const connectionUrl = await mySqlServer.getConnectionUrl('mysql')
      console.log(await mySqlServer.getTimings())
      connection = mysql.createConnection(connectionUrl)
      const result = await query<SimpleResult>(connection, 'SELECT 1 + 1 AS solution')
      expect(result).toMatchObject([{ solution: 2 }])
    } finally {
      connection?.end()
      await mySqlServer?.kill()
    }
  }, 30000)

  it('Should start a new database server from pre created data and resume it after', async () => {
    let mySqlServer: MySQLServer | null = null
    let connection: mysql.Connection | null = null
    try {
      // Do initial mysql start
      mySqlServer = new MySQLServer({ mysqlBaseDir: tmpDir, mysqldPath })
      await mySqlServer.getListenPort()
      await expect(mySqlServer.getInitStatus()).resolves.toEqual('started')
      console.log(await mySqlServer.getTimings())

      // Start mysql again letting it pickup the pid
      mySqlServer = new MySQLServer({ mysqlBaseDir: tmpDir, mysqldPath })
      await expect(mySqlServer.getInitStatus()).resolves.toEqual('resumed')

      const connectionUrl = await mySqlServer.getConnectionUrl('mysql')
      connection = mysql.createConnection(connectionUrl)
      const result = await query<SimpleResult>(connection, 'SELECT 1 + 1 AS solution')
      expect(result).toMatchObject([{ solution: 2 }])
    } finally {
      connection?.end()
      await mySqlServer?.kill()
    }
  }, 30000)

  it('should throw an error when mysqld is not installed', async () => {
    const oldPath = process.env.PATH
    try {
      process.env.PATH = ''
      const mySqlServer = new MySQLServer({ mysqlBaseDir: tmpDir })
      await expect(mySqlServer.waitForStarted()).rejects.toThrow(`Could not find 'mysqld'`)
    } finally {
      process.env.PATH = oldPath
    }
  })

  it('should handle starting more mysql servers from the same basedir', async () => {
    let mySqlServer: MySQLServer | null = null
    const oldPath = process.env.PATH
    try {
      mySqlServer = new MySQLServer({ mysqlBaseDir: tmpDir, mysqldPath })
      const mySqlServer2 = new MySQLServer({ mysqlBaseDir: tmpDir, mysqldPath })
      const mySqlServer3 = new MySQLServer({ mysqlBaseDir: tmpDir, mysqldPath })
      const mySqlServer4 = new MySQLServer({ mysqlBaseDir: tmpDir, mysqldPath })
      await expect(
        Promise.all([
          mySqlServer.waitForStarted(),
          mySqlServer2.waitForStarted(),
          mySqlServer3.waitForStarted(),
          mySqlServer4.waitForStarted()
        ])
      ).resolves.not.toThrow()
      console.log(await mySqlServer.getTimings())
      console.log(await mySqlServer2.getTimings())
      console.log(await mySqlServer3.getTimings())
      console.log(await mySqlServer4.getTimings())
    } finally {
      await mySqlServer?.kill()
      process.env.PATH = oldPath
    }
  }, 30000)
})
