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

interface Location {
  column: number
  line: number
}

export interface FormattedAssertionResult {
  ancestorTitles: Array<string>
  duration?: number
  failureDetails?: unknown[]
  failureMessages: Array<string>
  fullName: string
  invocations?: number
  location?: Location | null
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

interface CreateCheckAnnotationOptions {
  file: string
  message: string
  title: string
  status: string
  rawDetails: string
  location?: Location | null
}

function getRelativePath(path: string): string {
  const match = path.match(/^.*\/((?:src|bin)\/.+)$/)
  // Path needs to be set so default to a file we know exists
  return match && match.length === 2 ? match[1] : 'jest.config.js'
}

function getLocation(message: string, location?: Location | null): number {
  if (location) {
    return location.line
  }

  let start_line = 1
  const lineColumnMatch = message.match(/sx?:(\d+):(\d+)\)/)

  if (lineColumnMatch) {
    start_line = parseInt(lineColumnMatch[1])
  }

  return start_line
}

function createCheckAnnotation({
  file,
  message,
  title,
  status,
  rawDetails,
  location
}: CreateCheckAnnotationOptions): CheckAnnotation {
  const relPath = getRelativePath(file)
  const start_line = getLocation(message, location)
  let annotation_level: CheckAnnotationLevel

  switch (status) {
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
    start_line,
    end_line: start_line,
    annotation_level,
    title,
    message: message || 'unknown issue',
    path: relPath,
    raw_details: rawDetails
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
      // There are no assertion results when the error did not originate
      // from a test assertion, for example from an import cycle
      result.output.annotations = data.testResults
        .filter(testResult => testResult.assertionResults.length === 0)
        .map(testResult =>
          createCheckAnnotation({
            file: testResult.name,
            title: getRelativePath(testResult.name),
            message: testResult.message,
            status: testResult.status,
            rawDetails: JSON.stringify(testResult, null, 2)
          })
        )

      result.output.annotations.push(
        ...data.testResults
          .flatMap(results => {
            return results.assertionResults.map(assertionResult => {
              return {
                ...assertionResult,
                file: results.name
              }
            })
          })
          .filter(assertionResult => !['passed'].includes(assertionResult.status))
          .map<CheckAnnotation>(assertionResult => {
            const failureMessage = assertionResult.failureMessages?.join('\n')
            const message =
              assertionResult.status === 'pending' ? `skipped test '${assertionResult.title}'` : failureMessage
            const title = [...assertionResult.ancestorTitles, assertionResult.title].join(' - ')

            return createCheckAnnotation({
              file: assertionResult.file,
              status: assertionResult.status,
              title,
              message,
              rawDetails: JSON.stringify(assertionResult, null, 2),
              location: assertionResult.location
            })
          })
          // Limit to 50 annotations as this is the max per post for github
          .slice(0, 50)
      )

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
          if (result.output.annotations.length > 0) {
            // Distribute the truncation evenly by half
            for (const annotation of result.output.annotations) {
              const amountToTruncate = Math.floor(annotation.message.length / 2)
              annotation.message = annotation.message.slice(0, amountToTruncate)
              if (annotation.message.length === 0) {
                annotation.message = 'Output too large (unable to truncate)'
              }
            }
          }
        }

        // Check whether the output is still too large. Remove the message that was truncated
        len = JSON.stringify(result, null, 2).length
        if (len > MAX_OUTPUT_LENGTH) {
          for (const annotation of result.output.annotations) {
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
