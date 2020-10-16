import { AssertionResult, FormattedTestResults } from '@jest/test-result/build/types'

import { Annotation, AnnotationLevel, CheckRunResult, GitData } from '../checks-common'

export type JestOutput = FormattedTestResults

export interface JestInput extends GitData {
  data: FormattedTestResults
}

type AssertionSummary = AssertionResult & { file: string }

export const jestCheck = ({ data, org, repo, sha }: JestInput): CheckRunResult => {
  const result: CheckRunResult = {
    conclusion: 'neutral',
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
    .map<Annotation>(result => {
      const match = result.file.match(/^.*\/(src\/.+)$/)
      const relPath = match && match.length === 2 ? match[1] : ''

      let annotation_level: AnnotationLevel
      switch (result.status) {
        case 'disabled':
          annotation_level = 'neutral'
          break
        case 'failed':
          annotation_level = 'failure'
          break
        case 'pending':
          annotation_level = 'notice'
          break
        case 'skipped':
          annotation_level = 'neutral'
          break
        case 'todo':
          annotation_level = 'notice'
          break
        default:
          annotation_level = 'neutral'
      }
      return {
        start_line: 1,
        end_line: 1,
        annotation_level: annotation_level,
        message: result.failureMessages?.join('\n') || '',
        path: relPath,
        blob_href: `https://github.com/${org}/${repo}/blob/${sha}/${relPath}`,
        raw_details: JSON.stringify(result, null, 2)
      }
    })

  result.output.summary = `${data.numPassedTests} of ${data.numTotalTests} tests passed!`
  // note: check numTotalTestSuites for count?
  result.output.title = result.output.summary

  return result
}
