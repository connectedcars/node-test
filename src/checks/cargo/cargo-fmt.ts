import { filterDuplicates, stripPrefix } from '../../common'
import { CheckAnnotation, CheckRunCompleted } from '../checks-common'
import { createAnnotationFromManifestError } from './cargo'
import { CargoFmtMessage } from './cargo-types'

export interface CargoFmtInput {
  sha: string
  data: CargoFmtMessage[]
}

export function cargoFmtCheck({ data, sha }: CargoFmtInput): CheckRunCompleted {
  if (Array.isArray(data)) {
    let annotations: CheckAnnotation[] = []
    const cwd = `${process.cwd()}/`
    for (const msg of data) {
      if (msg.reason == 'manifest-parse-error') {
        annotations.push(createAnnotationFromManifestError(msg))
      } else {
        for (const mismatch of msg.mismatches) {
          const annotation: CheckAnnotation = {
            path: stripPrefix(msg.name, cwd),
            annotation_level: 'failure',
            start_line: mismatch.original_begin_line,
            end_line: mismatch.original_end_line,
            message: `Original: ${mismatch.original}\n\nExpected: ${mismatch.expected}`,
            raw_details: JSON.stringify(mismatch, null, '    ')
          }
          annotations.push(annotation)
        }
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
