import { filterDuplicates } from '../../common'
import { CheckAnnotation, CheckRunCompleted } from '../checks-common'
import { getCompilerAnnotations } from './cargo'
import { CargoMessage, CargoTestMessage } from './cargo-types'

export interface CargoTestInput {
  sha: string
  data: CargoMessage[]
}

function getTestAnnotations(item: CargoTestMessage): CheckAnnotation[] {
  const lines = item.stdout?.split('\n')
  if (!lines?.length) {
    return []
  }
  const match = lines[0].match(/([a-zA-Z0-9]+\/)*([a-zA-Z0-9_-]+)\.rs/)
  if (!match) {
    return []
  }

  const relPath = match[0]
  return [
    {
      path: relPath,
      start_line: 0,
      end_line: 0,
      annotation_level: 'failure',
      message: item.name,
      raw_details: JSON.stringify(item, null, '    ')
    }
  ]
}

function getAnnotations(data: CargoMessage[]): CheckAnnotation[] {
  let annotations: CheckAnnotation[] = []
  for (const item of data) {
    if (item.reason === 'compiler-message' && item.message && item.message.level === 'error') {
      annotations = annotations.concat(getCompilerAnnotations(item))
    } else if (item.type === 'test' && item.event === 'failed') {
      annotations = annotations.concat(getTestAnnotations(item))
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
