import { filterDuplicates } from '../../common'
import { CheckAnnotation, CheckRunCompleted } from '../checks-common'
import { createAnnotationFromManifestError } from './cargo'
import { CargoMessage, CargoTestMessage } from './cargo-types'

export interface CargoTestInput {
  sha: string
  data: CargoMessage[]
}

function getTestAnnotations(item: CargoTestMessage): CheckAnnotation[] {
  // JSON output from `cargo test` is currently
  // unstable, and the path to the test case or
  // test suite is not emitted.
  // While `cargo test` does emit "compiler-artifact"
  // messages, these cannot be used to reliably infer
  // the test case or test suite's path.
  const relPath = item.name
  return [
    {
      path: relPath,
      start_line: 0,
      end_line: 0,
      annotation_level: 'failure',
      message: item.stdout ?? item.name,
      title: item.name,
      raw_details: JSON.stringify(item, null, 4)
    }
  ]
}

function getAnnotations(data: CargoMessage[]): CheckAnnotation[] {
  const annotations: CheckAnnotation[] = []
  for (const item of data) {
    if (item.reason === 'manifest-parse-error') {
      annotations.push(createAnnotationFromManifestError(item))
    } else if (item.type === 'test' && item.event === 'failed') {
      annotations.push(...getTestAnnotations(item))
    }
  }
  return annotations
}

export function cargoTestCheck({ data, sha }: CargoTestInput): CheckRunCompleted {
  if (Array.isArray(data)) {
    let annotations = getAnnotations(data)
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
    }
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
