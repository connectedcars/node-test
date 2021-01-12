import fs from 'fs'
import path from 'path'
import util from 'util'

import { isFileNotFoundError, isNoProcessForPidError } from './errors'

const fsAccessAsync = util.promisify(fs.access)
const fsExistsAsync = util.promisify(fs.exists)
const fsReadFileAsync = util.promisify(fs.readFile)
const fsWriteFileAsync = util.promisify(fs.writeFile)
const fsUnlinkAsync = util.promisify(fs.unlink)
const fsStatAsync = util.promisify(fs.stat)

export async function readPidFile(pidFile: string): Promise<number> {
  try {
    const pidFileBuffer = await fsReadFileAsync(pidFile)
    const pidStr = pidFileBuffer.toString('utf8').replace(/\s+$/s, '')
    if (!pidStr.match(/^\d+$/)) {
      return 0
    }
    const pid = parseInt(pidStr, 10)
    return pid
  } catch (e) {
    if (isFileNotFoundError(e)) {
      return 0
    }
    throw e
  }
}

export async function isPidRunning(pid: number): Promise<boolean> {
  try {
    process.kill(pid, 0)
    return true
  } catch (e) {
    return e.code === 'EPERM'
  }
}

export async function isPidFileRunning(pidFile: string): Promise<boolean> {
  const pid = await readPidFile(pidFile)
  if (pid === 0) {
    return false
  }
  return isPidRunning(pid)
}

export async function stopPid(pid: number, sigKillTimeout = 3000): Promise<boolean> {
  try {
    process.kill(pid, 'SIGTERM')
    let deadline = Date.now() + sigKillTimeout
    while (deadline > Date.now()) {
      await new Promise(resolve => setTimeout(resolve, 100))
      if (!(await isPidRunning(pid))) {
        return true
      }
    }
    // Send SIGKILL because we overstayed the deadline
    process.kill(pid, 'SIGKILL')
    deadline = Date.now() + 1000
    while (await isPidRunning(pid)) {
      await new Promise(resolve => setTimeout(resolve, 100))
      if (!(await isPidRunning(pid))) {
        return true
      }
    }
  } catch (e) {
    if (isNoProcessForPidError(e)) {
      return false
    }
    throw e
  }
  throw new Error(`Pid ${pid} failed to exit`)
}

export async function writePidFile(pidFile: string, acquireTries = 10): Promise<void> {
  for (let i = 0; i < acquireTries; i++) {
    try {
      await fsWriteFileAsync(pidFile, Buffer.from(process.pid.toString(), 'utf8'), { flag: 'wx' })
      return
    } catch (e) {
      const pid = await readPidFile(pidFile)
      if (pid && (await isPidRunning(pid))) {
        await new Promise(resolve => setTimeout(resolve, 100))
      } else {
        await fsUnlinkAsync(pidFile).catch(() => {
          /* Ignore */
        })
      }
    }
  }
  throw new Error(`Failed to write pid file ${pidFile} after ${acquireTries} tries`)
}

export async function whereIs(cmd: string): Promise<string | null> {
  const runPaths = process.env['PATH']?.split(/[:;]/)
  for (const runPath of runPaths || []) {
    const fullPath = path.normalize(`${runPath}/${cmd}`)
    if (!(await fsExistsAsync(fullPath))) {
      continue
    }
    try {
      await fsAccessAsync(fullPath, fs.constants.X_OK)
    } catch (e) {
      continue
    }
    return fullPath
  }
  return null
}

export async function isFileReadable(filePath: string): Promise<boolean> {
  const res = await fsAccessAsync(filePath, fs.constants.R_OK)
    .then(() => true)
    .catch(() => false)
  return res
}

export async function isFileExecutable(filePath: string): Promise<boolean> {
  const res = await fsAccessAsync(filePath, fs.constants.X_OK)
    .then(() => true)
    .catch(() => false)
  return res
}

export async function fileExists(...filePaths: string[]): Promise<string | null> {
  for (const filePath of filePaths) {
    if (await isFileReadable(filePath)) {
      return filePath
    }
  }
  return null
}

export async function pathExists(...filePaths: string[]): Promise<string | null> {
  for (const filePath of filePaths) {
    const stat = await fsStatAsync(filePath).catch(() => null)
    if (stat) {
      return filePath
    }
  }
  return null
}
