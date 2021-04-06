import { CheckAnnotation, CheckRunCompleted } from '../checks-common'
import { getCompilerAnnotations } from './cargo'
import { CargoMessage } from './cargo-types'

// TODO: Implment more than just errors: https://github.com/actions-rs/clippy-check/blob/master/src/check.ts

export interface CargoClippyInput {
  sha: string
  data: CargoMessage[]
}

export function cargoClippyCheck({ data, sha }: CargoClippyInput): CheckRunCompleted {
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
        if (item.message && item.message.level === 'error') {
          annotations.push(...getCompilerAnnotations(item))
        }
      }
    }

    if (annotations.length > 0) {
      const summary = `Total of ${annotations.length} errors`
      return {
        name: 'cargo clippy',
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
      name: 'cargo clippy',
      head_sha: sha,
      conclusion: 'success',
      status: 'completed',
      completed_at: new Date().toISOString(),
      output: {
        title: 'Found no errors',
        summary: 'Found no errors',
        annotations: []
      }
    }
  }
  return {
    name: 'cargo clippy',
    head_sha: sha,
    conclusion: 'neutral',
    status: 'completed',
    completed_at: new Date().toISOString(),
    output: {
      title: 'Unexpected clippy output',
      summary: ''
    }
  }
}
