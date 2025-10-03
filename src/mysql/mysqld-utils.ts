import fs from 'fs'
import os from 'os'
import path from 'path'
import util from 'util'

import { splitLines } from '../common'
import { pathExists, RunProcess } from '../unix'
import { isFileNotFoundError } from '../unix/errors'

const fsExistsAsync = util.promisify(fs.exists)
const renameAsync = util.promisify(fs.rename)
const readFileAsync = util.promisify(fs.readFile)
const unlinkAsync = util.promisify(fs.unlink)

export interface MySQLServerConfig {
  [key: string]: { [key: string]: string }
}

export async function getMySQLVersionString(mysqltool: string): Promise<string> {
  const cmd = new RunProcess(mysqltool, ['--version'])
  const outputData: Buffer[] = []
  cmd.stdout?.on('data', (chunk: Buffer) => {
    outputData.push(chunk)
  })
  cmd.stderr?.on('data', (chunk: Buffer) => {
    outputData.push(chunk)
  })
  const { code } = await cmd.waitForExit()
  const stdout = Buffer.concat(outputData).toString('utf8')
  if (code !== 0) {
    throw new Error(`${mysqltool} --version returned non 0 exit code:\n${stdout}`)
  }
  return stdout.replace(/\r?\n$/, '')
}

export async function getMySQLServerDefaults(mysqldPath: string, mysqlBaseDir?: string): Promise<MySQLServerConfig> {
  const cmd = new RunProcess(mysqldPath, [
    ...(mysqlBaseDir ? [`--defaults-file=${mysqlBaseDir}/my.cnf`] : []),
    '--help',
    '--verbose'
  ])
  const outputData: Buffer[] = []
  cmd.stdout?.on('data', (chunk: Buffer) => {
    outputData.push(chunk)
  })
  cmd.stderr?.on('data', (chunk: Buffer) => {
    outputData.push(chunk)
  })
  const { code } = await cmd.waitForExit()
  const output = Buffer.concat(outputData).toString('utf8')

  if (code !== 0 && !output.match(/Plugins have parameters that are not reflected/)) {
    throw new Error(`Failed to dump configuration(${mysqldPath} --help --verbose): \n${output}\n`)
  }

  const variables: { [key: string]: string } = {}
  const variablesSection = output.toString().match(/Variables.+?Value.+?-{50,}\s+-{10}.+?\n(.+?)\n\n/s)
  if (variablesSection != null) {
    for (const variableLine of splitLines(variablesSection[1])) {
      const variableMatch = variableLine.match(/^([^\s]+)\s+(.+?)$/)
      if (variableMatch) {
        variables[variableMatch[1]] = variableMatch[2]
      }
    }
  }
  return { mysqld: variables }
}

export async function getMySQLServerBaseConfig(mysqldPath: string): Promise<MySQLServerConfig> {
  const myCnf: MySQLServerConfig = {
    mysqld: {},
    'mysqld-8.0': {}
  }

  const mysqdDefaultConfig = await getMySQLServerDefaults(mysqldPath)
  const mysqlInstallPath = path.resolve(path.dirname(mysqldPath), '..')
  const characterSetsDir = await pathExists(
    `${mysqlInstallPath}/share/mysql/charsets`,
    mysqdDefaultConfig['mysqld']['character-sets-dir']
  )
  const languageDir = await pathExists(`${mysqlInstallPath}/share/mysql`, mysqdDefaultConfig['mysqld']['language'])
  const lcMessagesDir = await pathExists(
    `${mysqlInstallPath}/share/mysql`,
    mysqdDefaultConfig['mysqld']['lc-messages-dir']
  )

  if (characterSetsDir) {
    myCnf['mysqld']['character-sets-dir'] = characterSetsDir
  }
  if (lcMessagesDir) {
    myCnf['mysqld']['lc-messages-dir'] = lcMessagesDir
  }

  if (process.getuid?.() === 0) {
    // Drop privileges if running as root
    myCnf.mysqld.user = 'mysql'
  }

  return myCnf
}

export function generateMySQLServerConfig(
  mysqlBaseDir: string,
  myCnfCustom: MySQLServerConfig = {},
  tmpdir = os.tmpdir()
): string {
  const myCnf: MySQLServerConfig = {
    // Defaults
    mysqld: {
      'bind-address': '127.0.0.1',
      'pid-file': `${mysqlBaseDir}/mysqld.pid`,
      socket: `${mysqlBaseDir}/mysqld.sock`,
      datadir: `${mysqlBaseDir}/data`,
      secure_file_priv: `${mysqlBaseDir}/files`,
      tmpdir,
      max_allowed_packet: '256M',
      // Disable some safety to get some more speed
      innodb_flush_method: 'nosync',
      innodb_flush_log_at_trx_commit: '2',
      innodb_io_capacity: '1000',
      // Set a default charset that is supported by both
      'character-set-server': 'utf8mb4',
      'collation-server': 'utf8mb4_general_ci',
      mysqlx: '0',
      open_files_limit: '5000',
      // The maximum effective value is the lesser of the effective value of open_files_limit - 810, and the value actually set for max_connections.
      // https://dev.mysql.com/doc/refman/8.4/en/server-system-variables.html#sysvar_max_connections
      max_connections: String(5000 - 810),
      table_open_cache: '2000'
    }
  }

  // Merge configs
  for (const section of Object.keys(myCnfCustom)) {
    for (const key of Object.keys(myCnfCustom[section])) {
      myCnf[section] = myCnf[section] || {}
      myCnf[section][key] = myCnfCustom[section][key]
    }
  }

  const myCnfLines: string[] = []
  for (const section of Object.keys(myCnf)) {
    myCnfLines.push(`[${section}]`)
    for (const key of Object.keys(myCnf[section])) {
      myCnfLines.push(`${key}=${myCnf[section][key]}`)
    }
  }

  return myCnfLines.join(`\n`) + '\n'
}

export async function initializeMySQLData(mysqldPath: string, mysqlBaseDir: string): Promise<void> {
  // Initialize mysql data
  const mysqlInitArgs = [
    `--defaults-file=${mysqlBaseDir}/my.cnf`,
    '--initialize-insecure'
  ]
  let initializeLog = `${mysqldPath} ${mysqlInitArgs.join(' ')}\n`
  const cmd = new RunProcess(mysqldPath, mysqlInitArgs, {
    env: {
      ...process.env,
      EVENT_NOKQUEUE: '1'
    }
  })
  cmd.stdout?.on('data', (chunk: Buffer) => {
    initializeLog += chunk.toString('utf8')
  })
  cmd.stderr?.on('data', (chunk: Buffer) => {
    initializeLog += chunk.toString('utf8')
  })
  const { code } = await cmd.waitForExit()
  if (code !== 0) {
    throw new Error(`Failed to initialize ${mysqldPath}: ${initializeLog}`)
  }
}

export async function extractMySQLDataCache(mysqlBaseDir: string, initializeDataTarGz: string): Promise<void> {
  const cmd = new RunProcess('tar', ['-xzf', initializeDataTarGz], {
    cwd: path.resolve(mysqlBaseDir)
  })
  cmd.stdin?.end()
  const data: Buffer[] = []
  cmd.stdout?.on('data', (chunk: Buffer) => data.push(chunk))
  cmd.stderr?.on('data', (chunk: Buffer) => data.push(chunk))
  await cmd.waitForStarted()
  const exitInfo = await cmd.waitForExit()
  if (exitInfo.code !== 0) {
    const output = Buffer.concat(data).toString('utf8')
    throw new Error(`Failed to extract cached data folder ${initializeDataTarGz} to ${mysqlBaseDir}\n${output}`)
  }
}

export async function createMySQLDataCache(mysqlBaseDir: string, initializeDataTarGz: string): Promise<void> {
  const randomStr = Math.random().toString(16).substring(2, 6)
  const tmpInitializeDataTarGzTmp = `${path.resolve(initializeDataTarGz)}$.tmp${randomStr}`
  const cmd = new RunProcess('tar', ['-czf', tmpInitializeDataTarGzTmp, 'data'], {
    cwd: path.resolve(mysqlBaseDir)
  })
  cmd.stdin?.end()
  const data: Buffer[] = []
  cmd.stdout?.on('data', (chunk: Buffer) => data.push(chunk))
  cmd.stderr?.on('data', (chunk: Buffer) => data.push(chunk))
  await cmd.waitForStarted()
  const { code } = await cmd.waitForExit()
  if (code !== 0) {
    const output = Buffer.concat(data).toString('utf8')
    throw new Error(`Failed to create ${tmpInitializeDataTarGzTmp} of cached data in ${mysqlBaseDir}\n${output}`)
  }
  await renameAsync(tmpInitializeDataTarGzTmp, initializeDataTarGz)
}

export async function dumpDatabase(port: number, databases: string[], dumpFile: string): Promise<void> {
  const randomStr = Math.random().toString(16).substring(2, 6)
  const dumpFileTmp = `${dumpFile}$.tmp${randomStr}`

  const version = await getMySQLVersionString('mysqldump')
  const cmd = new RunProcess('mysqldump', [
    // Workaround for this: https://stackoverflow.com/questions/51614140/how-to-disable-column-statistics-in-mysql-8-permanently
    ...(version.match(/8\.\d+\.\d+/) ? ['--column-statistics=0'] : []),
    '--host=127.0.0.1',
    `--port=${port}`,
    '--user=root',
    '--databases',
    ...databases
  ])
  cmd.stdin?.end()
  const data: Buffer[] = []
  cmd.stderr?.on('data', (chunk: Buffer) => data.push(chunk))
  const dumpFileStream = fs.createWriteStream(dumpFileTmp)
  cmd.stdout?.pipe(dumpFileStream)
  await cmd.waitForStarted()
  const { code } = await cmd.waitForExit()
  if (code !== 0) {
    const output = Buffer.concat(data).toString('utf8')
    throw new Error(`Failed to dump ${databases.join(', ')} to ${dumpFileTmp}\n${output}`)
  }
  await renameAsync(dumpFileTmp, dumpFile)
}

export async function startMySQLd(
  mysqldPath: string,
  mysqlBaseDir: string,
  mysqldServerArgs: string[] = []
): Promise<number> {
  const stdoutPath = `${mysqlBaseDir}/stdout.log`
  const stderrPath = `${mysqlBaseDir}/stderr.log`

  // Make sure we remove old output so we don't end up parsing that
  unlinkAsync(stdoutPath).catch(() => {
    // Ignore
  })
  unlinkAsync(stderrPath).catch(() => {
    // Ignore
  })

  const cmd = new RunProcess(
    path.resolve(`${__dirname}/../../bin/run-wrapper.js`),
    [
      `--stdout-file=${stdoutPath}`,
      `--stderr-file=${stderrPath}`,
      `--detached`,
      '--',
      mysqldPath,
      `--defaults-file=${mysqlBaseDir}/my.cnf`,
      ...mysqldServerArgs
    ],
    {
      env: {
        TZ: 'UTC',
        ...process.env
        // TODO Try to disable on mac
        // EVENT_NOKQUEUE: '1'
      }
    }
  )

  const match = await cmd.waitForOutput(/.*with pid (\d+).*/s)
  await cmd.waitForExit()
  const pid = parseInt(match[1])

  // Start polling the stderr file to see if mysql failed to start
  const deadline = Date.now() + 10000
  let mysqlStarted = false
  let stderr = ''
  while (deadline > Date.now()) {
    await new Promise(resolve => setTimeout(resolve, 100))
    // TODO: Only read the change since last amount
    try {
      stderr = (await readFileAsync(stderrPath)).toString('utf8')
      // 2019-02-04T21:30:25.515625Z 1 [ERROR] [MY-012574] [InnoDB] Unable to lock ./ibdata1 error: 35
      if (stderr.match(/\[ERROR\]\s+\[MY-012574\]/)) {
        throw new Error("Another mySQL instance is running so it can't lock")
      }
      if (stderr.match(/ready for connections/)) {
        mysqlStarted = true
        break
      }
    } catch (e) {
      if (!isFileNotFoundError(e)) {
        throw e
      }
    }
  }

  if (!mysqlStarted) {
    throw new Error(`Failed to start mysql:\n${stderr}`)
  }

  return pid
}

export async function readPortFile(path: string): Promise<number> {
  if (!(await fsExistsAsync(path))) {
    return 0
  }
  const portStr = (await readFileAsync(path)).toString('utf8')
  return parseInt(portStr)
}
