import { CheckAnnotation, CheckRunCompleted } from '../checks-common'
import { getCompilerAnnotations } from './cargo'
import { CargoMessage } from './cargo-types'

// TODO: Implement more than just errors: https://github.com/actions-rs/clippy-check/blob/master/src/check.ts

export interface CargoCheckInput {
  sha: string
  data: CargoMessage[]
}

export function cargoCheckCheck({ data, sha }: CargoCheckInput): CheckRunCompleted {
  if (Array.isArray(data)) {
    const annotations: CheckAnnotation[] = []
    const stats = {
      help: 0,
      note: 0,
      warning: 0,
      error: 0,
      ice: 0
    }
    for (const item of data) {
      if (item.reason === 'compiler-message') {
        if (item.message.rendered?.includes('clippy')) {
          continue
        }

        switch (item.message.level) {
          case 'help':
            stats.help += 1
            break
          case 'note':
            stats.note += 1
            break
          case 'warning':
            stats.warning += 1
            break
          case 'error':
            stats.error += 1
            break
          case 'error: internal compiler error':
            stats.ice += 1
            break
          default:
            break
        }
        annotations.push(...getCompilerAnnotations(item))
      }
    }

    if (annotations.length > 0) {
      const summary = `Total of ${annotations.length} ${annotations.length === 1 ? 'issue' : 'issues'}`
      return {
        name: 'cargo check',
        head_sha: sha,
        conclusion: 'failure',
        status: 'completed',
        completed_at: new Date().toISOString(),
        output: {
          title: summary,
          summary,
          text: [
            '## Results',
            '',
            '| Message level           | Amount                |',
            '| ----------------------- | --------------------- |',
            `| Internal compiler error | ${stats.ice}     |`,
            `| Error                   | ${stats.error}   |`,
            `| Warning                 | ${stats.warning} |`,
            `| Note                    | ${stats.note}    |`,
            `| Help                    | ${stats.help}    |`
          ].join('\n'),
          annotations
        }
      }
    }
    return {
      name: 'cargo check',
      head_sha: sha,
      conclusion: 'success',
      status: 'completed',
      completed_at: new Date().toISOString(),
      output: {
        title: 'Found no issues',
        summary: 'Found no issues',
        annotations: []
      }
    }
  }
  return {
    name: 'cargo check',
    head_sha: sha,
    conclusion: 'skipped',
    status: 'completed',
    completed_at: new Date().toISOString(),
    output: {
      title: 'Unexpected check output',
      summary: ''
    }
  }
}
