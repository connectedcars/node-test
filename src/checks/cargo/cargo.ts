import { touchFiles } from '../../unix'
import { CheckAnnotation } from '../checks-common'
import { CargoBuildFinishedMessage, CargoCompilerMessage, CargoMessage, DiagnosticSpan } from './cargo-types'

const DEFAULT_CI_RUSTFLAGS = '-F warnings -D unused'

export function updateEnvRustFlags(ci: boolean): void {
  let rustFlags = process.env['RUSTFLAGS'] || ''

  if (ci) {
    rustFlags += ' --cfg ci_build'

    const ciRustFlags = process.env['CI_RUSTFLAGS'] ?? DEFAULT_CI_RUSTFLAGS
    rustFlags += ` ${ciRustFlags}`
  }

  process.env['RUSTFLAGS'] = rustFlags.trim()
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
