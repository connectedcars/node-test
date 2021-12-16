/* eslint no-param-reassign: "error" */

import { CheckAnnotation } from '../checks-common'
import {
  CargoBuildFinishedMessage,
  CargoCompilerMessage,
  CargoFmtMessage,
  CargoManifestParseError,
  CargoMessage,
  DiagnosticSpan
} from './cargo-types'

export function isCargoBuildSuccessful(output: CargoMessage[]): boolean {
  const manifestParseFailed = output.find(msg => msg.reason === 'manifest-parse-error') as
    | CargoManifestParseError
    | undefined
  if (manifestParseFailed !== undefined) {
    return false
  }

  // If the `build-finished` message has `success: false` it implies
  // there is syntax errors in the code. In that case running clippy,
  // tests, rustfmt is needless, as they'll fail with the same syntax
  // errors.
  const buildFinished = output.find(msg => msg.reason === 'build-finished') as CargoBuildFinishedMessage | undefined

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

export interface CargoCheckStats {
  help: number
  note: number
  warning: number
  error: number
  /// Internal Compiler Error
  ice: number
}

type CollectFn<T> = (item: T, annotations: CheckAnnotation[], stats: CargoCheckStats) => void

export function collectAnnotations<T>(data: readonly T[], collect: CollectFn<T>): [CheckAnnotation[], CargoCheckStats] {
  const annotations: CheckAnnotation[] = []
  const stats: CargoCheckStats = {
    help: 0,
    note: 0,
    warning: 0,
    error: 0,
    ice: 0
  }

  for (const item of data) {
    collect(item, annotations, stats)
  }

  return [annotations, stats]
}

export function collectCargoManifestParseErrors(
  item: CargoMessage | CargoFmtMessage,
  annotations: CheckAnnotation[],
  stats: CargoCheckStats
): void {
  if (item.reason !== 'manifest-parse-error') {
    return
  }

  annotations.push(createAnnotationFromManifestError(item))
  stats.error += 1
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function filterNone<T>(item: T): boolean {
  return true
}

export function filterClippyLints(item: CargoCompilerMessage): boolean {
  return !item.message.rendered?.includes('clippy')
}

export function filterNonClippyLints(item: CargoCompilerMessage): boolean {
  // All clippy lints contains "clippy" in their message, so
  // filter all compiler messages that does not contain
  // "clippy". This is to avoid repeating all issues already
  // found by `cargo check`.
  return !filterClippyLints(item)
}

export function getPrimaryOrFirstSpan(spans: DiagnosticSpan[]): DiagnosticSpan | null {
  if (spans.length === 0) {
    return null
  }
  const primarySpan = spans.find(span => span.is_primary)
  return primarySpan ?? spans[0]
}
