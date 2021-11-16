import { runCommand } from '../checks-common'

const RE_RUST_VERSION = /^\s*rustc\s*(\d+)\.(\d+)\.(\d+)(?:$|\s)/

let RUST_VERSION: RustVersion | null = null

export interface RustVersion {
  major: number
  minor: number
  patch: number
}

export async function getRustVersion(): Promise<RustVersion | null> {
  // Reasonably to assume that the Rust toolchain isn't
  // changed while `checks` is running.
  if (RUST_VERSION != null) {
    return RUST_VERSION
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { exitInfo, stdout, stderr } = await runCommand('rustc', ['--version'])

  const version = parseRustVersion(stdout)
  if (version == null) {
    return null
  }

  RUST_VERSION = version

  return RUST_VERSION
}

export function parseRustVersion(version: string): RustVersion | null {
  const match = RE_RUST_VERSION.exec(version)
  if (match == null) {
    return null
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_input, majorStr, minorStr, patchStr] = match
  const major = parseInt(majorStr)
  const minor = parseInt(minorStr)
  const patch = parseInt(patchStr)

  if (major != undefined && minor != undefined && patch != undefined) {
    return { major, minor, patch }
  }

  return null
}
