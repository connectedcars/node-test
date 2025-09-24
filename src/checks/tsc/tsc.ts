import { CheckConversionError, CheckOutput, CheckRunCompleted, CheckRunConclusion } from '../checks-common'
import { TscData } from './tsc-types'

export interface TscInput {
  data: TscData[]
  sha: string
}

export function tscCheck({ data, sha }: TscInput): CheckRunCompleted {
  try {
    let conclusion: CheckRunConclusion = 'success'
    const output: CheckOutput = {
      summary: 'No problems found',
      title: 'No problems found',
      annotations: []
    }

    if (data && data.length > 0) {
      conclusion = 'failure'
      output.summary = `${data.length} error(s) found`
      output.title = output.summary
      output.annotations = data.map(err => {
        const relPath = err.file
        return {
          start_line: err.line,
          end_line: err.line,
          annotation_level: 'failure',
          message: err.message,
          path: relPath,
          raw_details: JSON.stringify(err, null, 2)
        }
      })
    }

    return {
      name: 'tsc',
      head_sha: sha,
      conclusion,
      status: 'completed',
      completed_at: new Date().toISOString(),
      output
    }
  } catch (e) {
    throw new CheckConversionError('tsc', { data }, e as Error)
  }
}
