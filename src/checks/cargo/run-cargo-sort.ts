import { splitLines } from '../../common'
import { CommandOutput, runCommand } from '../checks-common'

const ORDER = 'workspace,package,lib,bin,features,dependencies,dev-dependencies,profile'

// These are intentionally case sensitive
const RE_CHECKING_CRATE = /^Checking\s+([\w-]+)...$/
const RE_ERROR = /^error:\s+(.*)$/
const RE_FOR_CRATE = /for\s+([\w-]+)/

export interface CargoSortMessage {
  reason?: undefined
  error: string
  crate: string | null
  manifest: string | null
}

interface CargoSortCheckError {
  error: string
  crate: string | null
}

type CargoSortPrintCrates = { [key: string]: string }

export async function runCargoSort(args: string[] = []): Promise<CargoSortMessage[]> {
  const errors = await runCargoSortCheck(args)
  if (errors.length == 0) {
    return []
  }

  // Needs two passes, as `--check` emits which manifests have issues,
  // while `--print` emits all manifests in the expected format
  const crates = await runCargoSortPrint(args)

  const output = []
  for (const err of errors) {
    output.push({
      error: err.error,
      crate: err.crate,
      manifest: err.crate ? (crates[err.crate] ?? null) : null
    })
  }

  return output
}

export async function runCargoSortCheck(args: string[] = []): Promise<CargoSortCheckError[]> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { exitInfo, stdout, stderr } = await runCargoSortCommand('--check', args)

  const errors = []

  for (const line of splitLines(stderr)) {
    const error = parseError(line)
    if (error == null) {
      continue
    }

    errors.push({
      error,
      crate: parseForCrate(line)
    })
  }

  return errors
}

export async function runCargoSortPrint(args: string[] = []): Promise<CargoSortPrintCrates> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { exitInfo, stdout, stderr } = await runCargoSortCommand('--print', args)
  return parseOutput(stdout)
}

export async function runCargoSortCommand(command: string, args: string[] = []): Promise<CommandOutput> {
  return runCommand('cargo', ['sort', command, '--grouped', '--workspace', '--order', ORDER, ...args].filter(Boolean), {
    env: {
      ...process.env,
      NO_COLOR: 'true'
    }
  })
}

function parseOutput(output: string): CargoSortPrintCrates {
  const crates: CargoSortPrintCrates = {}
  let last = null

  for (const line of splitLines(output)) {
    const crate = parseChecking(line)
    if (crate !== null) {
      if (last !== null) {
        crates[last.crate] = last.toml
      }

      last = {
        crate,
        toml: ''
      }
    } else if (last !== null) {
      // `last` will always be non-null in this case, the check is to make eslint happy

      if (last.toml.length > 0) {
        last.toml += '\n'
      }

      last.toml += line
    }
  }

  if (last !== null) {
    crates[last.crate] = last.toml
  }

  return crates
}

function parseChecking(line: string): string | null {
  const match = RE_CHECKING_CRATE.exec(line)
  if (match == null) {
    return null
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_input, crate_name] = match
  return crate_name
}

function parseError(line: string): string | null {
  const match = RE_ERROR.exec(line)
  if (match == null) {
    return null
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_input, err] = match
  return err
}

function parseForCrate(line: string): string | null {
  const match = RE_FOR_CRATE.exec(line)
  if (match == null) {
    return null
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_input, crate_name] = match
  return crate_name
}
