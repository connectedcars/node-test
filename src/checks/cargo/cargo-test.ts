import { filterDuplicates } from '../../common'
import { CheckAnnotation, CheckRunCompleted } from '../checks-common'
import { CargoCheckStats, collectAnnotations, collectCargoManifestParseErrors } from './cargo'
import { CargoMessage, CargoTestMessage } from './cargo-types'

export interface CargoTestInput {
  sha: string
  data: CargoMessage[]
}

export function cargoTestCheck({ data, sha }: CargoTestInput): CheckRunCompleted {
  if (!Array.isArray(data)) {
    return {
      conclusion: 'skipped',
      name: 'cargo-test',
      head_sha: sha,
      status: 'completed',
      completed_at: new Date().toISOString(),
      output: {
        title: 'Unexpected test output',
        summary: ''
      }
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, prefer-const
  let [annotations, stats] = collectAnnotations(data, (item, annotations, stats) => {
    collectCargoManifestParseErrors(item, annotations, stats)
    collectCargoTestIssues(item, annotations, stats)
  })

  if (annotations.length > 0) {
    annotations = filterDuplicates(annotations)

    const summary = `Total of ${annotations.length} ${annotations.length === 1 ? 'issue' : 'issues'}`
    return {
      name: 'cargo-test',
      head_sha: sha,
      conclusion: 'failure',
      status: 'completed',
      completed_at: new Date().toISOString(),
      output: {
        title: summary,
        summary,
        annotations
      }
    }
  } else {
    return {
      conclusion: 'success',
      name: 'cargo-test',
      head_sha: sha,
      status: 'completed',
      completed_at: new Date().toISOString(),
      output: {
        title: 'Tests passed',
        summary: 'Tests passed'
      }
    }
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

  const annotation = createAnnotationFromTestMessage(item)
  if (annotation) {
    annotations.push(annotation)
    stats.error += 1
  }
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
