import { CheckAnnotation, CheckConversionError, CheckRunCompleted, GitData } from '../checks-common'

export interface MochaInput extends GitData {
  data: MochaData
}

export function mochaCheck({ data, org, repo, sha }: MochaInput): CheckRunCompleted {
  try {
    const annotations: CheckAnnotation[] = []

    // This happens when a test logs something to stdout while running
    if (!data || !data.failures) {
      return {
        name: 'mocha',
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
    }

    // Run through each failed test to create annotations
    for (const test of data.failures) {
      if (!test.err?.stack) {
        continue
      }
      // Find file path from stack
      const matches = test.err.stack.match(/Context\.(?:<anonymous>|it) \((.+)\)/s)
      if (!matches) {
        console.log('fail', test.err.stack)
        continue
      }
      const [filePath, line, column] = matches[1].split(':')
      const lineNumber = parseInt(line)

      // Generate an annotation
      annotations.push({
        path: filePath,
        start_line: lineNumber,
        end_line: lineNumber,
        annotation_level: 'failure',
        message: `${line}:${column}`.padEnd(10) + `${test.title} ${test.err.message}`,
        title: `${filePath}#L${line}`,
        raw_details: JSON.stringify(test, null, '    ')
      })
    }
    // Generate a summary of the problems
    const failing = data.stats.failures
    const passing = data.stats.passes
    const pending = data.stats.pending
    let summary = `Found **${failing}** failed ${failing === 1 ? 'test' : 'tests'}`
    const details = [`**${passing}** passing`]
    if (pending > 0) {
      details.push(`**${pending}** pending`)
    }
    summary += ` (${details.join(', ')})`
    return {
      name: 'mocha',
      head_sha: sha,
      conclusion: failing > 0 ? 'failure' : 'success',
      status: 'completed',
      completed_at: new Date().toISOString(),
      output: {
        title: 'mocha',
        summary,
        annotations
      }
    }
  } catch (e) {
    throw new CheckConversionError('mocha', { data, org, repo, sha }, e)
  }
}
