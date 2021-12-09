import { CheckAnnotation } from '../checks-common'
import {
  CargoBuildFinishedMessage,
  CargoCompilerMessage,
  CargoManifestParseError,
  CargoMessage,
  DiagnosticSpan
} from './cargo-types'

export function isCargoBuildSuccessful(output: CargoMessage[]): boolean {
  const manifestParseFailed = output.find(msg => msg.reason == 'manifest-parse-error') as
    | CargoManifestParseError
    | undefined
  if (manifestParseFailed !== undefined) {
    return false
  }

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

export function isMessageFromDependency(item: CargoCompilerMessage): boolean | null {
  const span = getPrimaryOrFirstSpan(item.message.spans)
  if (span) {
    return span.file_name.indexOf('/.cargo/registry/') !== -1
  } else {
    return null
  }
}

export function createAnnotationFromManifestError(item: CargoManifestParseError): CheckAnnotation {
  return {
    path: item.path,
    start_line: 0,
    end_line: 0,
    annotation_level: 'failure',
    message: item.error,
    title: item.title,
    raw_details: JSON.stringify(item.error, null, 4)
  }
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
