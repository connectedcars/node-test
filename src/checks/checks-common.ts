/* eslint-disable no-console */
// https://docs.github.com/en/rest/reference/checks#runs

import { Json, splitLines } from '../common'
import { ExitInformation, RunProcess } from '../unix/run-process'

export type CheckAnnotationLevel = 'notice' | 'warning' | 'failure'

// https://docs.github.com/en/rest/reference/checks#annotations-items
export interface CheckAnnotation {
  // Path must be relative to the root of the repository
  path: string
  start_line: number
  end_line: number
  start_column?: number
  end_column?: number
  annotation_level: CheckAnnotationLevel
  message: string
  title?: string
  raw_details: string
}

export interface CheckAction {
  label: string
  description: string
  identifier: string
}

export interface CheckImage {
  alt: string
  image_url: string
  caption?: string
  actions?: CheckAction[]
}

export interface CheckOutput {
  title: string
  summary: string
  text?: string
  annotations?: CheckAnnotation[]
  images?: CheckImage[]
}

export type CheckRunStatus = 'queued' | 'in_progress' | 'completed'

export type CheckRunConclusion =
  | 'success'
  | 'failure'
  | 'neutral'
  | 'cancelled'
  | 'skipped'
  | 'timed_out'
  | 'action_required'

export interface CheckRunStarted {
  name: string
  head_sha: string
  details_url?: string
  external_id?: string
  status: 'queued' | 'in_progress'
  started_at?: string
  output?: CheckOutput
}

export interface CheckRunCompleted {
  name: string
  head_sha: string
  details_url?: string
  external_id?: string
  status: 'completed'
  started_at?: string
  conclusion: CheckRunConclusion
  completed_at: string
  output?: CheckOutput
}

export type CheckRun = CheckRunStarted | CheckRunCompleted

export interface CommandOutput {
  exitInfo: ExitInformation
  stdout: string
  stderr: string
}

export async function runCommand(
  command: string,
  args: string[],
  options?: ConstructorParameters<typeof RunProcess>[2]
): Promise<CommandOutput> {
  const cmd = new RunProcess(command, args, options)
  const stdoutChunks: Buffer[] = []
  cmd.stdout?.on('data', chunk => {
    stdoutChunks.push(chunk)
  })
  const stderrChunks: Buffer[] = []
  cmd.stderr?.on('data', chunk => {
    stderrChunks.push(chunk)
  })
  await cmd.waitForStarted()
  const exitInfo = await cmd.waitForExit()
  const stdout = Buffer.concat(stdoutChunks).toString('utf8')
  const stderr = Buffer.concat(stderrChunks).toString('utf8')
  return { exitInfo, stdout, stderr }
}

export async function runJsonCommand<T = Json>(
  command: string,
  args: string[],
  options?: ConstructorParameters<typeof RunProcess>[2]
): Promise<[ExitInformation, T]> {
  const { exitInfo, stdout, stderr } = await runCommand(command, args, options)
  try {
    return [exitInfo, JSON.parse(stdout)]
  } catch (e) {
    throw new CommandJSONConversionError(command, args, stdout, stderr, e)
  }
}

export async function runJsonLinesCommand<T = Json>(
  command: string,
  args: string[],
  options?: ConstructorParameters<typeof RunProcess>[2]
): Promise<[ExitInformation, T[]]> {
  const { exitInfo, stdout, stderr } = await runCommand(command, args, options)
  try {
    // Trimming whitespace from the ends, as otherwise an empty line
    // would result in `Unexpected end of JSON input`
    const blobs = splitLines(stdout.trim()).map(line => JSON.parse(line))
    return [exitInfo, blobs]
  } catch (e) {
    throw new CommandJSONConversionError(command, args, stdout, stderr, e)
  }
}

export function printSummary(checkResult: CheckRun, ci?: boolean): void {
  console.log(JSON.stringify(checkResult, null, 2))

  const { output } = checkResult

  // Skip the 'human readable' output if we have ci flag
  if (ci) {
    return
  }

  if (output) {
    console.log(output.summary)
    const annotations = output.annotations || []
    for (const annotation of annotations) {
      const { annotation_level, message, start_line, end_line, path } = annotation
      const location = `(${path} line ${start_line}:${end_line})`
      console.log(`  - ${annotation_level}: ${message} ${location}`)
    }
  }
}

export class CheckConversionError extends Error {
  public input: unknown
  public e: Error
  public constructor(checkName: string, input: unknown, e: Error) {
    super(`${checkName} check failed to convert input to github format: ${e.message}`)
    this.input = input
    this.e = e
  }
}

export class CommandJSONConversionError extends Error {
  public command: string
  public args: string[]
  public stdout: string
  public stderr: string
  public e: Error
  public constructor(command: string, args: string[], stdout: string, stderr: string, e: Error) {
    super(`'${command} ${args.join(' ')} output could not be converted to JSON: ${e.message}`)
    this.command = command
    this.args = args
    this.stdout = stdout
    this.stderr = stderr
    this.e = e
  }
}
