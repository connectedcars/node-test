import { CheckAnnotation, CheckConversionError, CheckRunCompleted } from '../checks-common'

interface TestIssue {
  rule: {
    name: string
    severity: string
    link: string
  }
  message: string
  range: {
    filename: string
    start: {
      line: number
      column: number
    }
    end: {
      line: number
      column: number
    }
  }
  callers: unknown[]
}
export interface TflintData {
  issues: TestIssue[]
  errors: unknown[]
}
export interface TflintInput {
  sha: string
  data: TflintData
  name?: string
}

export function tflintCheck({ data, sha, name = 'tflint' }: TflintInput): CheckRunCompleted {
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

    result.conclusion = data.issues.length === 0 && data.errors.length === 0 ? 'success' : 'failure'

    if (result.output) {
      result.output.annotations = data.issues
        .map<CheckAnnotation>(result => {
          const annotation: CheckAnnotation = {
            start_line: result.range.start.line || 1,
            end_line: result.range.end.line || 1,
            annotation_level: 'failure',
            title: result.message,
            message: `${result.message}\n\n[${result.rule.severity}] ${result.rule.name}\n${result.rule.link}`,
            path: result.range.filename || 'terraform',
            raw_details: JSON.stringify(result, null, 2)
          }
          return annotation
        })
        // Limit to 50 annotations as this is the max per post for github
        .slice(0, 50)

      result.output.summary = `${data.issues.length} issue(s) found`
      if (data.errors.length > 0) {
        result.output.summary += ` (with ${data.errors.length} error(s))`
        result.output.annotations.push({
          start_line: 1,
          end_line: 1,
          annotation_level: 'failure',
          title: `${data.errors.length} error(s)`,
          message: `${JSON.stringify(data.errors, null, 2)}`,
          path: 'terraform',
          raw_details: JSON.stringify(data.errors, null, 2)
        })
      }
      result.output.title = result.output.summary
    }

    return result
  } catch (e) {
    throw new CheckConversionError('tflint', { data, sha }, e as Error)
  }
}
