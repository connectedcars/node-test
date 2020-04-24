#!/usr/bin/env node

import fs from 'fs'
import util from 'util'
import yargs from 'yargs'

import { MySQLServer } from '../src/mysql/mysql-server'

const openAsync = util.promisify(fs.open)

async function readAsync(fd: number): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const out = Buffer.alloc(1024)
    fs.read(fd, out, 0, out.length, null, (err, bytesRead) => {
      if (err) {
        return reject(err)
      }
      return resolve(out.slice(0, bytesRead))
    })
  })
}

async function main(argv: string[]): Promise<number> {
  const { _: args, ...flags } = yargs
    .options({
      mysqlBaseDir: {
        type: 'string',
        default: 'mysql-context',
        describe: `Sets mysqld base dir location `
      }
    })
    .help()
    .parse(argv.slice(2))

  const mySqlServer = new MySQLServer({ mysqlBaseDir: flags.mysqlBaseDir })
  console.log(
    `MySQLd started with ${await mySqlServer.getInitStatus()} listening on port ${await mySqlServer.getListenPort()}`
  )

  let exitReason: string | null = null
  const exitPromises: Array<Promise<string>> = [
    new Promise(resolve => process.on('SIGTERM', () => resolve('SIGTERM'))),
    new Promise(resolve => process.on('SIGINT', () => resolve('SIGINT')))
  ]
  Promise.race(exitPromises)
    .then(reason => {
      exitReason = reason
    })
    .catch(() => {
      // Ignore
    })

  const stdoutFd = await openAsync(`${flags.mysqlBaseDir}/stdout.log`, 'r')
  const stderrFd = await openAsync(`${flags.mysqlBaseDir}/stderr.log`, 'r')
  let running = true
  let closing = false
  while (running) {
    const stdoutBytes = await readAsync(stdoutFd)
    process.stdout.write(stdoutBytes)
    const stderrBytes = await readAsync(stderrFd)
    process.stdout.write(stderrBytes)
    if (stdoutBytes.length === 0 && stderrBytes.length === 0) {
      // TODO: watching the filesytem could also be an option
      // https://nodejs.org/docs/latest/api/fs.html#fs_fs_watch_filename_options_listener
      await new Promise(resolve => setTimeout(resolve, 100))
    }

    if (closing === false && exitReason !== null) {
      closing = true
      mySqlServer
        .kill()
        .then(() => {
          running = false
        })
        .catch(() => {
          // Ignore
        })
    }
  }

  console.error(`Stopping because ${exitReason}`)

  return 0
}

main(process.argv)
  .then(exitCode => {
    process.exit(exitCode)
  })
  .catch(e => {
    console.error(e)
  })