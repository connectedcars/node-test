import { touchFiles } from '../../unix'
import { CheckAnnotation } from '../checks-common'
import { CargoBuildFinishedMessage, CargoCompilerMessage, CargoMessage, DiagnosticSpan } from './cargo-types'
import { RustVersion } from './run-rustc-version'

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

export function getCompilerAnnotations(item: CargoCompilerMessage): CheckAnnotation[] {
  // The `children` i.e. the child diagnostic messages can safely
  // be ignored, as they only provide additional information to
  // the main diagnostic. Such as "machine information" which can
  // be used to automatically resolve the issue.
  const diagnostic = item.message
  const span = getPrimaryOrFirstSpan(diagnostic.spans)

  // If the diagnostic has no spans, then it implies that
  // the issue exists outside of this crate. Such as a
  // warning in a dependency. If the dependency is one of
  // our own crates, then this issue will already have been
  // caught.
  if (span == null) {
    return []
  }

  const annotations: CheckAnnotation[] = []

  annotations.push({
    path: span?.file_name ?? 'Cargo.toml',
    start_line: span?.line_start ?? 0,
    end_line: span?.line_end ?? 0,
    annotation_level: 'failure',
    message: diagnostic.rendered ?? diagnostic.message,
    title: diagnostic.message,
    raw_details: JSON.stringify(diagnostic, null, 4)
  })

  return annotations
}

function getPrimaryOrFirstSpan(spans: DiagnosticSpan[]): DiagnosticSpan | null {
  if (spans.length == 0) {
    return null
  }
  const primarySpan = spans.find(span => span.is_primary)
  return primarySpan ?? spans[0]
}

export function cargoHasBuildFinished(output: CargoMessage[]): boolean {
  // If the `build-finished` message has `success: false` it implies
  // there is syntax errors in the code. In that case running clippy,
  // tests, rustfmt is needless, as they'll fail with the same syntax
  // errors.
  const buildFinished = output.find(msg => msg.reason == 'build-finished') as CargoBuildFinishedMessage | undefined

  // If the `build-finished` message is not found in `output`, then
  // assume it passed, and run the other checks regardless. Worst case
  // the other checks fail.
  const buildSuccess = buildFinished?.success ?? true

  return buildSuccess
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
  return version.major < 1 || (version.major == 1 && version.minor < 52)
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
export async function touchRustFiles(path = '.'): Promise<void> {
  await touchFiles(path, {
    excludeDir: /\.git|target/i,
    includeFile: /\.rs$/i
  })
}
