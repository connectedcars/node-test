import { splitLines } from '../../common'
import { RunProcess } from '../../unix/run-process'
import { TscData } from './tsc-types'

function matchToObj(match: RegExpExecArray): TscData {
  return {
    file: match[1],
    line: parseInt(match[2], 10),
    col: parseInt(match[3], 10),
    errorCode: match[4],
    message: match[5] ? match[5] : ''
  }
}

export function parseTsc(output: string): TscData[] {
  const messages = splitLines(output)

  const tscErrorRegex = /^((?:[\w-]+\/)*[\w.-]+)\((\d+),(\d+)\): error (TS\d+): (.*)/

  const errors: TscData[] = []

  for (const msg of messages) {
    const matched = tscErrorRegex.exec(msg)
    if (matched !== null) {
      errors.push(matchToObj(matched))
    } else if (errors.length > 0) {
      // this is a continuation of the previous error
      errors[errors.length - 1].message += '\n' + msg
    }
  }

  return errors
}

export async function runTsc(extraArgs: string[] = []): Promise<TscData[]> {
  const cmd = new RunProcess('tsc', [...extraArgs, '--pretty', 'false', '--noErrorTruncation', '--noEmit'])
  const data: Buffer[] = []
  cmd.stdout?.on('data', (chunk: Buffer) => {
    data.push(chunk)
  })
  await cmd.waitForStarted()
  const { code } = await cmd.waitForExit()
  if (code != 0) {
    throw new Error(`tsc failed: ${data.toString()}`)
  }
  const compileResult = Buffer.concat(data).toString('utf8')
  return parseTsc(compileResult)
}
