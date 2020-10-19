import { CheckConversionError, CheckRunResult } from '../checks-common'

export interface TscInput {
  data: TscData[]
  sha: string
}

export function tscCheck({ data, sha }: TscInput): CheckRunResult {
  try {
    const result: CheckRunResult = {
      name: 'tsc',
      head_sha: sha,
      conclusion: 'success',
      status: 'completed',
      completed_at: new Date().toISOString(),
      output: {
        summary: 'No problems found',
        title: 'No problems found',
        annotations: []
      }
    }

    if (data && data.length > 0) {
      result.conclusion = 'failure'
      result.output.summary = `${data.length} error(s) found`
      result.output.title = result.output.summary

      result.output.annotations = data.map(err => {
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

    return result
  } catch (e) {
    throw new CheckConversionError('tsc', { data }, e)
  }
}
