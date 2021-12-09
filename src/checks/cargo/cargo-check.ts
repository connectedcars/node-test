import { filterDuplicates } from '../../common'
import { CheckAnnotation, CheckRunCompleted } from '../checks-common'
import { createAnnotationFromManifestError, getCompilerAnnotations } from './cargo'
import { CargoMessage } from './cargo-types'

// TODO: Implement more than just errors: https://github.com/actions-rs/clippy-check/blob/master/src/check.ts

export interface CargoCheckInput {
  sha: string
  data: CargoMessage[]
}

export function cargoCheckCheck({ data, sha }: CargoCheckInput, skipOtherLints = true): CheckRunCompleted {
  if (Array.isArray(data)) {
    let annotations: CheckAnnotation[] = []
    const stats = {
      help: 0,
      note: 0,
      warning: 0,
      error: 0,
      ice: 0
    }
    for (const item of data) {
      if (item.reason === 'compiler-message') {
        if (skipOtherLints && item.message.rendered?.includes('clippy')) {
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

        // Disregarding checking the `item.message.level` as in the
        // Rust projects, any compiler warning, lint, suggestion, etc
        // is already regarded as something that must be resolved.
        // Thus map all messages into failures.
        annotations.push(...getCompilerAnnotations(item))
      } else if (item.reason === 'manifest-parse-error') {
        stats.error += 1
        annotations.push(createAnnotationFromManifestError(item))
      }
    }

    if (annotations.length > 0) {
      annotations = filterDuplicates(annotations)

      const summary = `Total of ${annotations.length} ${annotations.length === 1 ? 'issue' : 'issues'}`
      return {
        name: 'cargo-check',
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
            '| Message level           | Amount |',
            '| ----------------------- | ------ |',
            '| Internal compiler error | ' + `${stats.ice}`.padStart(6) + ' |',
            '| Error                   | ' + `${stats.error}`.padStart(6) + ' |',
            '| Warning                 | ' + `${stats.warning}`.padStart(6) + ' |',
            '| Note                    | ' + `${stats.note}`.padStart(6) + ' |',
            '| Help                    | ' + `${stats.help}`.padStart(6) + ' |'
          ].join('\n'),
          annotations
        }
      }
    }
    return {
      name: 'cargo-check',
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
    name: 'cargo-check',
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
