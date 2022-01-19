import { filterDuplicates } from '../../common'
import { CheckAnnotation, CheckRunCompleted } from '../checks-common'
import {
  CargoCheckStats,
  cargoFoundIssues,
  cargoFoundNoIssues,
  cargoUnexpectedOutput,
  collectAnnotations,
  collectCargoManifestParseErrors,
  filterClippyLints,
  filterNone,
  getPrimaryOrFirstSpan
} from './cargo'
import { CargoCompilerMessage, CargoMessage } from './cargo-types'

// TODO: Implement more than just errors: https://github.com/actions-rs/clippy-check/blob/master/src/check.ts

export interface CargoCheckInput {
  sha: string
  data: CargoMessage[]
}

export function cargoCheckCheck({ data, sha }: CargoCheckInput, skipOtherLints = true): CheckRunCompleted {
  if (!Array.isArray(data)) {
    return cargoUnexpectedOutput('cargo-check', sha)
  }

  // eslint-disable-next-line prefer-const
  let [annotations, stats] = collectAnnotations(data, (item, annotations, stats) => {
    collectCargoManifestParseErrors(item, annotations, stats)
    collectCargoCheckLints(item, annotations, stats, skipOtherLints ? filterClippyLints : filterNone)
  })

  if (annotations.length > 0) {
    annotations = filterDuplicates(annotations)

    return cargoFoundIssues('cargo-check', sha, annotations, stats)
  } else {
    return cargoFoundNoIssues('cargo-check', sha)
  }
}

export function collectCargoCheckLints(
  item: CargoMessage,
  annotations: CheckAnnotation[],
  stats: CargoCheckStats,
  filter?: (item: CargoCompilerMessage) => boolean
): void {
  if (item.reason !== 'compiler-message') {
    return
  }

  if (filter && !filter(item)) {
    return
  }

  switch (item.message.level) {
    case 'help':
      stats.help += 1
      break
    case 'note':
      stats.note += 1
      break
    case 'warning':
      stats.warning += 1
      break
    case 'error':
      stats.error += 1
      break
    case 'error: internal compiler error':
      stats.ice += 1
      break
    default:
      break
  }

  // Disregarding checking the `item.message.level` as in the
  // Rust projects, any compiler warning, lint, suggestion, etc
  // is already regarded as something that must be resolved.
  // Thus map all messages into failures.
  const annotation = createAnnotationFromCompilerMessage(item)
  if (annotation) {
    annotations.push(annotation)
  }
}

export function createAnnotationFromCompilerMessage(item: CargoCompilerMessage): CheckAnnotation | null {
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
    return null
  }

  return {
    path: span?.file_name ?? 'Cargo.toml',
    start_line: span?.line_start ?? 0,
    end_line: span?.line_end ?? 0,
    annotation_level: 'failure',
    message: diagnostic.rendered ?? diagnostic.message,
    title: diagnostic.message,
    raw_details: JSON.stringify(diagnostic, null, 4)
  }
}
