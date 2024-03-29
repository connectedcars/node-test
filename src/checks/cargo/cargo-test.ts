import { filterDuplicates } from '../../common'
import { CheckAnnotation, CheckRunCompleted } from '../checks-common'
import {
  CargoCheckStats,
  cargoFoundIssues,
  cargoFoundNoIssues,
  cargoUnexpectedOutput,
  collectAnnotations,
  collectCargoManifestParseErrors
} from './cargo'
import { CargoMessage, CargoTestMessage } from './cargo-types'

export interface CargoTestInput {
  sha: string
  data: CargoMessage[]
}

export function cargoTestCheck({ data, sha }: CargoTestInput): CheckRunCompleted {
  if (!Array.isArray(data)) {
    return cargoUnexpectedOutput('cargo-test', sha)
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, prefer-const
  let [annotations, stats] = collectAnnotations(data, (item, annotations, stats) => {
    collectCargoManifestParseErrors(item, annotations, stats)
    collectCargoTestIssues(item, annotations, stats)
  })

  if (annotations.length > 0) {
    annotations = filterDuplicates(annotations)

    return cargoFoundIssues('cargo-test', sha, annotations, stats)
  } else {
    return cargoFoundNoIssues('cargo-test', sha)
  }
}

export function collectCargoTestIssues(
  item: CargoMessage,
  annotations: CheckAnnotation[],
  stats: CargoCheckStats
): void {
  if (item.type !== 'test' || item.event !== 'failed') {
    return
  }

  annotations.push(createAnnotationFromTestMessage(item))
  stats.error += 1
}

function createAnnotationFromTestMessage(item: CargoTestMessage): CheckAnnotation {
  // JSON output from `cargo test` is currently
  // unstable, and the path to the test case or
  // test suite is not emitted.
  // While `cargo test` does emit "compiler-artifact"
  // messages, these cannot be used to reliably infer
  // the test case or test suite's path.
  const relPath = item.name
  return {
    path: relPath,
    start_line: 0,
    end_line: 0,
    annotation_level: 'failure',
    message: item.stdout ?? item.name,
    title: item.name,
    raw_details: JSON.stringify(item, null, 4)
  }
}
