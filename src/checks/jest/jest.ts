import { FormattedTestResults } from '@jest/test-result/build/types'

import { CheckAnnotation, CheckAnnotationLevel, CheckConversionError, CheckRunCompleted } from '../checks-common'

export type JestOutput = FormattedTestResults

export interface JestInput {
  sha: string
  data: FormattedTestResults
}

export const jestCheck = ({ data, sha }: JestInput): CheckRunCompleted => {
  try {
    const result: CheckRunCompleted = {
      name: 'jest',
      head_sha: sha,
      conclusion: 'neutral',
      status: 'completed',
      completed_at: new Date().toISOString(),
      output: {
        title: 'No tests found',
        summary: 'No tests found',
        annotations: []
      }
    }

    if (!data) {
      return result
    }

    result.conclusion = data.success ? 'success' : 'failure'

    if (result.output) {
      result.output.annotations = data.testResults
        .flatMap(results => {
          return results.assertionResults.map(assertionResult => {
            return {
              ...assertionResult,
              file: results.name
            }
          })
        })
        .filter(r => !['passed'].includes(r.status))
        .map<CheckAnnotation>(result => {
          const match = result.file.match(/^.*\/(src\/.+)$/)
          const relPath = match && match.length === 2 ? match[1] : ''

          let annotation_level: CheckAnnotationLevel
          switch (result.status) {
            case 'disabled':
              annotation_level = 'notice'
              break
            case 'failed':
              annotation_level = 'failure'
              break
            case 'pending':
              annotation_level = 'notice'
              break
            case 'skipped':
              annotation_level = 'notice'
              break
            case 'todo':
              annotation_level = 'notice'
              break
            default:
              annotation_level = 'notice'
          }
          const annotation: CheckAnnotation = {
            start_line: 1,
            end_line: 1,
            annotation_level: annotation_level,
            message: result.failureMessages?.join('\n') || '',
            path: relPath,
            raw_details: JSON.stringify(result, null, 2)
          }
          return annotation
        })

      result.output.summary = `${data.numPassedTests} of ${data.numTotalTests} tests passed!`
      // note: check numTotalTestSuites for count?
      result.output.title = result.output.summary
    }

    return result
  } catch (e) {
    throw new CheckConversionError('jest', { data, sha }, e)
  }
}
