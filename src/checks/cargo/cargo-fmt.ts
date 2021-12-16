import { filterDuplicates, stripPrefix } from '../../common'
import { CheckAnnotation, CheckRunCompleted } from '../checks-common'
import { CargoCheckStats, collectAnnotations, collectCargoManifestParseErrors } from './cargo'
import { CargoFmtFile, CargoFmtMessage, CargoFmtMismatch } from './cargo-types'

export interface CargoFmtInput {
  sha: string
  data: CargoFmtMessage[]
}

export function cargoFmtCheck({ data, sha }: CargoFmtInput): CheckRunCompleted {
  if (!Array.isArray(data)) {
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, prefer-const
  let [annotations, stats] = collectAnnotations(data, (item, annotations, stats) => {
    collectCargoManifestParseErrors(item, annotations, stats)
    collectCargoFmtIssues(item, annotations, stats)
  })

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
  } else {
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
}

export function collectCargoFmtIssues(
  item: CargoFmtMessage,
  annotations: CheckAnnotation[],
  stats: CargoCheckStats,
  cwd?: string
): void {
  if (item.reason === 'manifest-parse-error') {
    return
  }

  // eslint-disable-next-line no-param-reassign
  cwd = cwd ?? `${process.cwd()}/`

  for (const mismatch of item.mismatches) {
    annotations.push(createAnnotationFromFmtMismatch(item, mismatch, cwd))
    stats.error += 1
  }
}

export function createAnnotationFromFmtMismatch(
  item: CargoFmtFile,
  mismatch: CargoFmtMismatch,
  cwd: string
): CheckAnnotation {
  return {
    path: stripPrefix(item.name, cwd),
    annotation_level: 'failure',
    start_line: mismatch.original_begin_line,
    end_line: mismatch.original_end_line,
    message: `Original: ${mismatch.original}\n\nExpected: ${mismatch.expected}`,
    raw_details: JSON.stringify(mismatch, null, '    ')
  }
}
