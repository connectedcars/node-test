import {
  CheckAnnotation,
  CheckAnnotationLevel,
  CheckConversionError,
  CheckRunCompleted,
  MAX_LINE_LENGTH,
  MAX_OUTPUT_LENGTH
} from '../checks-common'

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
  duration?: number
  failureDetails?: unknown[]
  failureMessages: Array<string>
  fullName: string
  invocations?: number
  location?: {
    column: number
    line: number
  } | null
  numPassingAsserts?: number
  retryReasons?: unknown[]
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

function getRelativePath(path: string): string {
  const match = path.match(/^.*\/((?:src|bin)\/.+)$/)
  // Path needs to be set so default to a file we know exists
  return match && match.length === 2 ? match[1] : 'jest.config.js'
}

export function jestCheck({ data, sha, name = 'jest' }: JestInput): CheckRunCompleted {
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

    result.conclusion = data.success && !data.snapshot.failure ? 'success' : 'failure'

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
          const relPath = getRelativePath(result.file)

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
          const failureMessage = result.failureMessages?.join('\n')
          const message = result.status === 'pending' ? `skipped test '${result.title}'` : failureMessage

          let start_line = 1
          const lineColumnMatch = failureMessage.match(/sx?:(\d+):(\d+)\)/)
          if (lineColumnMatch) {
            start_line = parseInt(lineColumnMatch[1])
          }

          const annotation: CheckAnnotation = {
            start_line,
            end_line: start_line,
            annotation_level,
            title: [...result.ancestorTitles, result.title].join(' - '),
            message: message || 'unknown issue',
            path: relPath,
            raw_details: JSON.stringify(result, null, 2)
          }
          // Try to keep the output small so we avoid truncation
          let len = JSON.stringify(annotation, null, 2).length
          if (len > MAX_LINE_LENGTH) {
            // Try to only remove raw details
            annotation.raw_details = `Line too large (${len} B)`
            // Check whether the output is still too large
            len = JSON.stringify(annotation, null, 2).length
            if (len > MAX_LINE_LENGTH) {
              // Remove the message as well
              annotation.message = `Line too large (${len} B)`
            }
          }
          return annotation
        })
        // Limit to 50 annotations as this is the max per post for github
        .slice(0, 50)

      result.output.summary = `${data.numPassedTests} of ${data.numTotalTests} tests passed`
      if (data.snapshot.failure) {
        if (data.snapshot.unchecked > 0) {
          result.output.summary += ` (with ${data.snapshot.unchecked} snapshots obsolete)`
          for (const { filePath, keys } of data.snapshot.uncheckedKeysByFile) {
            if (!result.output.annotations) {
              result.output.annotations = []
            }
            result.output.annotations.push({
              start_line: 1,
              end_line: 1,
              annotation_level: 'failure',
              title: `${keys.length} snapshots obsolete`,
              message: ` - ${keys.join('\n - ')}`,
              path: getRelativePath(filePath),
              raw_details: JSON.stringify(data.snapshot, null, 2)
            })
          }
        }
      }
      // note: check numTotalTestSuites for count?
      result.output.title = result.output.summary
      // Try to keep the output small so we avoid truncation
      let len = JSON.stringify(result, null, 2).length
      if (len > MAX_OUTPUT_LENGTH) {
        for (const annotation of result.output.annotations || []) {
          // Try to only remove raw details
          annotation.raw_details = `Output too large (${len} B)`
        }
        // Check whether the output is still too large
        len = JSON.stringify(result, null, 2).length
        if (len > MAX_OUTPUT_LENGTH) {
          for (const annotation of result.output.annotations || []) {
            // Remove the message as well
            annotation.message = `Output too large (${len} B)`
          }
        }
      }
    }

    return result
  } catch (e) {
    throw new CheckConversionError('jest', { data, sha }, e)
  }
}
