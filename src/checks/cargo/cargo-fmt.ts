import { filterDuplicates } from '../../common'
import { CheckAnnotation, CheckRunCompleted } from '../checks-common'
import { CargoFmtFile } from './cargo-types'

export interface CargoFmtInput {
  sha: string
  data: CargoFmtFile[]
}

export function cargoFmtCheck({ data, sha }: CargoFmtInput): CheckRunCompleted {
  if (Array.isArray(data)) {
    let annotations: CheckAnnotation[] = []
    for (const file of data) {
      for (const mismatch of file.mismatches) {
        const annotation: CheckAnnotation = {
          path: file.name,
          annotation_level: 'failure',
          start_line: mismatch.original_begin_line,
          end_line: mismatch.expected_end_line,
          message: `Original: ${mismatch.original}\n\nExpected: ${mismatch.expected}`,
          raw_details: JSON.stringify(mismatch, null, '    ')
        }
        annotations.push(annotation)
      }
    }
    if (annotations.length > 0) {
      annotations = filterDuplicates(annotations)

      const summary = `Total of ${annotations.length} ${annotations.length === 1 ? 'issue' : 'issues'}`
      return {
        name: 'cargo-fmt',
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
      name: 'cargo-fmt',
      head_sha: sha,
      conclusion: 'success',
      status: 'completed',
      completed_at: new Date().toISOString(),
      output: {
        title: 'Found no issues',
        summary: 'Found no issues',
        annotations: []
      }
    }
  }
  return {
    name: 'cargo-fmt',
    head_sha: sha,
    conclusion: 'skipped',
    status: 'completed',
    completed_at: new Date().toISOString(),
    output: {
      title: 'Unexpected cargo fmt output',
      summary: ''
    }
  }
}
