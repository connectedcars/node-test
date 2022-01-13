import { SpawnOptions } from 'child_process'

import { splitLines, stripPrefix } from '../../common'
import { ExitInformation, touchFiles } from '../../unix'
import { CommandJSONConversionError, runJsonLinesCommand } from '../checks-common'
import { CargoManifestParseError } from './cargo-types'
import { CargoLocateWorkspaceError, runCargoLocateWorkspace } from './run-cargo-locate-workspace'
import { getRustVersion, RustVersion } from './run-rustc-version'

// In newer versions, doing `#![forbid(warnings)]` is not allowed
// and triggers the `forbidden_lint_groups` lint.
// Issue: https://github.com/rust-lang/rust/issues/81670
// Reference: https://doc.rust-lang.org/rustc/lints/listing/warn-by-default.html#forbidden-lint-groups
const DEFAULT_CI_RUSTFLAGS = '-W warnings -W unused'

export function getEnvRustFlags(ci: boolean): string {
  let rustFlags = process.env['RUSTFLAGS'] || ''

  if (ci) {
    rustFlags += ' --cfg ci_build'

    const ciRustFlags = process.env['CI_RUSTFLAGS'] ?? DEFAULT_CI_RUSTFLAGS
    rustFlags += ` ${ciRustFlags}`
  }

  return rustFlags.trim()
}

export function getRustEnv(
  workspacePath: string,
  releaseBuild: boolean,
  allFeatures: boolean,
  ci: boolean
): { [key: string]: string } {
  return {
    ...process.env,
    RUSTFLAGS: getEnvRustFlags(ci),
    CARGO_TARGET_DIR: createRustTargetPath(workspacePath, releaseBuild, allFeatures, ci)
  }
}

// Assumes that `CARGO_MANIFEST_DIR` is not present, or that
// it is not different from the current working directory.
export function createRustTargetPath(
  workspacePath: string,
  releaseBuild: boolean,
  allFeatures: boolean,
  ci: boolean
): string {
  // Currently we don't have anything where using `--all-targets`
  // triggers any dependencies to get rebuild. So currently, it is
  // not used.
  // This also means that build times are quicker, since half the
  // builds will share the same target directory.
  return (
    `${workspacePath}/target/checks-` +
    (releaseBuild ? 'release' : 'debug') +
    // (allFeatures ? '-all' : '') +
    (ci ? '-ci' : '')
  )
}

export type CargoRunCommand<T> = (
  command: string,
  args: string[],
  options?: SpawnOptions | undefined
) => Promise<[ExitInformation, T[]]>

export async function runCargo<T>(
  args: string[] = [],
  ci = true,
  skipTouching = false,
  runCommand: CargoRunCommand<T> = runJsonLinesCommand
): Promise<T[]> {
  if (!skipTouching) {
    const version = await getRustVersion()
    if (isTouchingWorkspaceRequired(version)) {
      // Description for why this is needed, can be found
      // at the `touchRustFiles` definition
      await touchRustFiles()
    }
  }

  const workspacePath = await runCargoLocateWorkspace()

  const isReleaseBuild = args.indexOf('--release') !== -1
  const isAllFeatures = args.indexOf('--all-features') !== -1

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [exitInfo, json] = await runCommand('cargo', args, {
    env: getRustEnv(workspacePath, isReleaseBuild, isAllFeatures, ci)
  })
  return json
}

export async function tryCargoRun<T>(exec: () => Promise<T[][]>): Promise<(T | CargoManifestParseError)[]> {
  try {
    const outputs = await exec()
    const output = ([] as T[]).concat(...outputs)
    return output
  } catch (err: unknown) {
    if (err instanceof CommandJSONConversionError) {
      if (isParseManifestError(err.stderr)) {
        const msg = parseCargoManifestParseError(err.stderr)
        return [msg]
      }
    } else if (err instanceof CargoLocateWorkspaceError) {
      if (isParseManifestError(err.stderr)) {
        const msg = parseCargoManifestParseError(err.stderr)
        return [msg]
      }
    }

    throw err
  }
}

function isParseManifestError(error: string): boolean {
  // `rustfmt` outputs the same error, but prefixed with more info,
  // so using `.trimLeft().startsWith("...")` is not sufficient
  return error.indexOf('error: failed to parse manifest') !== -1
}

function parseCargoManifestParseError(error: string): CargoManifestParseError {
  error = error.trimLeft()

  return {
    reason: 'manifest-parse-error',
    // Path must be relative to the root of the repository
    path: parseCargoManifestParseErrorPath(error) ?? 'Cargo.toml',
    title: splitLines(error)[0],
    error
  }
}

function parseCargoManifestParseErrorPath(error: string): string | null {
  const RE_PATH = /^[^\n]+at[^\n]+`([^`\n]+)`/gm

  const matchPath = RE_PATH.exec(error)
  if (matchPath !== null) {
    // FIXME: Using cwd produces the wrong path if cwd is not the workspace path
    // In this case it's not possible to use `runCargoLocateWorkspace()` as that
    // requires parsing the Cargo.toml, which then produces the same error again,
    // which is currently being parsed
    const cwd = `${process.cwd()}/`
    const path = matchPath[1]

    if (path.trimLeft().startsWith(cwd)) {
      return stripPrefix(matchPath[1], cwd)
    }
  }

  return null
}

export function isTouchingWorkspaceRequired(version: RustVersion | null): boolean {
  // For more information, see the docs for `touchRustFiles`.
  // Issue: https://github.com/rust-lang/rust-clippy/issues/4612
  if (version == null) {
    // If it was unable to obtain the Rust version,
    // then assume touching is required.
    return true
  }

  // Reference: https://blog.rust-lang.org/2021/05/06/Rust-1.52.0.html
  return version.major < 1 || (version.major === 1 && version.minor < 52)
}

// Clippy shares the same build cache as Cargo,
// so if `cargo clippy` is executed after `cargo clippy`
// or if `cargo clippy` is simply executed twice,
// without the build cache having been invalidated.
// Then Clippy will either emit the output of the last
// invocation or none at all.
//
// The easiest way to invalidate the cache, is simply
// to touch all `.rs` files in the project. Executing
// `cargo clean` would also work, but then the next check
// will need to download all the dependencies again.
//
// Issue: https://github.com/rust-lang/rust-clippy/issues/4612
async function touchRustFiles(path = '.'): Promise<void> {
  await touchFiles(path, {
    excludeDir: /\.git|target/i,
    includeFile: /\.rs$/i
  })
}
