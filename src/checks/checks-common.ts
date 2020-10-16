// https://docs.github.com/en/free-pro-team@latest/rest/reference/checks#runs

export interface GitData {
  org: string
  repo: string
  sha: string
}

export interface CheckRunResult {
  conclusion: CheckRunConclusion
  output: CheckOutput
  completed_at: string
  status: CheckRunStatus
}

export interface CheckOutput {
  title: string
  summary: string
  annotations?: Annotation[]
  text?: string
}

export interface Annotation {
  path: string
  blob_href?: string
  start_line?: number
  end_line?: number
  annotation_level: AnnotationLevel
  message: string
  raw_details: string
  title?: string
}

export type CheckRunStatus = 'queued' | 'in_progress' | 'completed'

export type CheckRunConclusion =
  | 'success'
  | 'failure'
  | 'neutral'
  | 'cancelled'
  | 'skipped'
  | 'timed_out'
  | 'action_required'

export type AnnotationLevel = 'notice' | 'failure' | 'neutral'

export function printSummary(checkResult: CheckRunResult, ci?: boolean): void {
  console.log(JSON.stringify(checkResult, null, 2))

  const { output } = checkResult

  // Skip the 'human readable' output if we have ci flag
  if (ci) {
    return
  }

  console.log(output.summary)
  const annotations = output.annotations || []
  for (const annotation of annotations) {
    const { annotation_level, message, start_line, end_line, path } = annotation
    let location = ''

    if (path) {
      const lines = start_line && end_line ? ` line ${start_line}:${end_line}` : ''
      location = `(${path}${lines})`
    }

    console.log(`\t- ${annotation_level}: ${message} ${location}`)
  }
}
