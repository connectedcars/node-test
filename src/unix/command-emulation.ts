import fs from 'fs/promises'
import path from 'path'

import { Json } from '../common'
import { createTempDirectory } from './fs'

export interface CommandEmulationOptions {
  overridePath: boolean
}

export class CommandEmulation {
  private tmpdir!: string
  private oldPath!: string
  private newPath!: string
  private commands: string[] = []
  private initPromise: Promise<void>
  private options: CommandEmulationOptions

  public constructor(options?: CommandEmulationOptions) {
    this.options = { overridePath: true, ...options }
    this.initPromise = this.init()
    this.initPromise.catch(() => {
      // Do nothing as we will throw at later calls
    })
  }

  public static async new(options?: CommandEmulationOptions): Promise<CommandEmulation> {
    const instance = new CommandEmulation(options)
    await instance.initPromise
    return instance
  }

  public async registerPath(externalPath: string): Promise<void> {
    await this.initPromise // Make sure init has finished
    this.newPath = path.resolve(externalPath) + path.delimiter + this.newPath
    if (this.options.overridePath) {
      process.env.PATH = this.newPath
    }
  }

  public async registerCommand<T = Json>(
    cmd: string,
    script: string | ((data: T) => void),
    interpreter: string | null = '/bin/sh',
    data: Json = {}
  ): Promise<string> {
    await this.initPromise // Make sure init has finished

    const path = `${this.tmpdir}/${cmd}`
    this.commands.push(path)

    // Handle JS function
    if (typeof script === 'function') {
      const dataString = JSON.stringify(data).replace(/\\/gs, '\\\\').replace(/`/gs, '\\`')
      const scriptLines = [
        `const jsonData = JSON.parse(\`${dataString}\`)`,
        `const main = ${script.toString()}`,
        `main(jsonData)`
      ]
      script = scriptLines.join('\n')
      if (interpreter === null || interpreter === '/bin/sh') {
        interpreter = '/usr/bin/env node'
      }
    }

    const fullScript = `#!${interpreter}\n\n${script}\n`
    await fs.writeFile(path, Buffer.from(fullScript, 'utf8'))
    await fs.chmod(path, '755')
    return fullScript
  }

  public async cleanup(): Promise<void> {
    await this.initPromise // Make sure init has finished
    while (this.commands.length > 0) {
      const command = this.commands.shift()
      if (command) {
        await fs.unlink(command).catch(() => {
          // Ignore
        })
      }
    }
  }

  public async destroy(): Promise<void> {
    await this.initPromise // Make sure init has finished
    await this.cleanup()
    process.env.PATH = process.env.PATH === this.tmpdir ? '' : process.env.PATH?.replace(`${this.tmpdir}:`, '')
    await fs.rm(this.tmpdir, { recursive: true })
    this.initPromise = Promise.reject(new Error(`Need to run setup again`)).catch(() => {
      // Do nothing as we will throw at later calls
    })
  }

  public async getTmpdir(): Promise<string> {
    await this.initPromise // Make sure init has finished
    return this.tmpdir
  }

  public async getPath(): Promise<string> {
    await this.initPromise // Make sure init has finished
    return this.newPath
  }

  private async init(): Promise<void> {
    this.tmpdir = await createTempDirectory()
    this.oldPath = process.env.PATH || ''
    this.newPath = this.tmpdir + path.delimiter + this.oldPath

    if (this.options.overridePath) {
      process.env.PATH = this.newPath
    }
  }
}
