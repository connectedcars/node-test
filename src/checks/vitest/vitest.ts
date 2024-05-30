import { CheckAnnotation, CheckAnnotationLevel, CheckRunCompleted } from '../checks-common'

// Types copied from vitest:
// https://github.com/vitest-dev/vitest/blob/445a7b6d4ab906c05c211e7b1a8102779fa35187/packages/vitest/src/node/reporters/json.ts#L13-L63

type Milliseconds = number

interface Callsite {
  line: number
  column: number
}

export interface FormattedAssertionResult {
  ancestorTitles: Array<string>
  fullName: string
  status: 'passed' | 'failed' | 'skipped' | 'pending' | 'todo' | 'disabled'
  title: string
  duration?: Milliseconds | null
  failureMessages: Array<string>
  location?: Callsite | null
}

export interface FormattedTestResult {
  message: string
  name: string
  status: 'failed' | 'passed'
  startTime: number
  endTime: number
  assertionResults: Array<FormattedAssertionResult>
  // summary: string
  // coverage: unknown
}

export interface FormattedTestResults {
  numFailedTests: number
  numFailedTestSuites: number
  numPassedTests: number
  numPassedTestSuites: number
  numPendingTests: number
  numPendingTestSuites: number
  numTodoTests: number
  numTotalTests: number
  numTotalTestSuites: number
  startTime: number
  success: boolean
  testResults: Array<FormattedTestResult>
  // coverageMap?: CoverageMap | null | undefined
  // numRuntimeErrorTestSuites: number
  // snapshot: SnapshotSummary
  // wasInterrupted: boolean
}

export interface VitestInput {
  data: FormattedTestResults
  sha: string
  name?: string
}

export function vitestCheck({ data, sha, name = 'vitest' }: VitestInput): CheckRunCompleted {
  const result: CheckRunCompleted = {
    name,
    head_sha: sha,
    status: 'completed',
    conclusion: 'neutral',
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

  if (!result.output) {
    return result
  }

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
      return annotation
    })
    // Limit to 50 annotations as this is the max per post for github
    .slice(0, 50)

  result.output.summary = `${data.numPassedTests} of ${data.numTotalTests} tests passed`
  // note: snapshots are not currently output in vitest reporter=json
  // note: check numTotalTestSuites for count?
  result.output.title = result.output.summary

  return result
}

function getRelativePath(path: string): string {
  const match = path.match(/^.*\/((?:src|bin)\/.+)$/)
  // Path needs to be set so default to a file we know exists
  return match && match.length === 2 ? match[1] : 'package.json'
}
