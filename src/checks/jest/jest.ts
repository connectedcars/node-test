import { CheckAnnotation, CheckAnnotationLevel, CheckConversionError, CheckRunCompleted } from '../checks-common'

export interface FormattedTestResults {
  numFailedTests: number
  numFailedTestSuites: number
  numPassedTests: number
  numPassedTestSuites: number
  numPendingTests: number
  numPendingTestSuites: number
  numRuntimeErrorTestSuites: number
  numTodoTests: number
  numTotalTests: number
  numTotalTestSuites: number
  openHandles: string[]
  snapshot: SnapshotSummary
  startTime: number
  success: boolean
  testResults: Array<FormattedTestResult>
  wasInterrupted: boolean
}

export interface FormattedTestResult {
  message: string
  name: string
  summary: string
  status: 'failed' | 'passed'
  startTime: number
  endTime: number
  coverage?: unknown
  assertionResults: Array<FormattedAssertionResult>
}

export interface FormattedAssertionResult {
  ancestorTitles: Array<string>
  failureMessages: Array<string>
  fullName: string
  location?: {
    column: number
    line: number
  } | null
  status: 'passed' | 'failed' | 'skipped' | 'pending' | 'todo' | 'disabled'
  title: string
}

export interface SnapshotSummary {
  added: number
  didUpdate: boolean
  failure: boolean
  filesAdded: number
  filesRemoved: number
  filesRemovedList: Array<string>
  filesUnmatched: number
  filesUpdated: number
  matched: number
  total: number
  unchecked: number
  uncheckedKeysByFile: Array<UncheckedSnapshot>
  unmatched: number
  updated: number
}

export interface UncheckedSnapshot {
  filePath: string
  keys: Array<string>
}

export interface JestInput {
  sha: string
  data: FormattedTestResults
  name?: string
}

export const jestCheck = ({ data, sha, name = 'jest' }: JestInput): CheckRunCompleted => {
  try {
    const result: CheckRunCompleted = {
      name,
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
          const message =
            result.status === 'pending' ? `skipped test '${result.title}'` : result.failureMessages?.join('\n')

          const annotation: CheckAnnotation = {
            start_line: 1,
            end_line: 1,
            annotation_level: annotation_level,
            message: message || 'unknown issue',
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
