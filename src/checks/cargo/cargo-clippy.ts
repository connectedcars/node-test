import { filterDuplicates } from '../../common'
import { CheckRunCompleted } from '../checks-common'
import {
  collectAnnotations,
  collectCargoManifestParseErrors,
  filterNonClippyLints,
  isMessageFromDependency
} from './cargo'
import { collectCargoCheckLints } from './cargo-check'
import { CargoMessage } from './cargo-types'

// TODO: Implement more than just errors: https://github.com/actions-rs/clippy-check/blob/master/src/check.ts

export interface CargoClippyInput {
  sha: string
  data: CargoMessage[]
}

export function cargoClippyCheck({ data, sha }: CargoClippyInput, skipOtherLints = true): CheckRunCompleted {
  if (!Array.isArray(data)) {
    return {
      name: 'cargo-clippy',
      head_sha: sha,
      conclusion: 'skipped',
      status: 'completed',
      completed_at: new Date().toISOString(),
      output: {
        title: 'Unexpected clippy output',
        summary: ''
      }
    }
  }

  // eslint-disable-next-line prefer-const
  let [annotations, stats] = collectAnnotations(data, (item, annotations, stats) => {
    collectCargoManifestParseErrors(item, annotations, stats)
    collectCargoCheckLints(item, annotations, stats, item => {
      if (skipOtherLints && !filterNonClippyLints(item)) {
        return false
      } else if (isMessageFromDependency(item)) {
        return false
      } else {
        return true
      }
    })
  })

  if (annotations.length > 0) {
    annotations = filterDuplicates(annotations)

    const summary = `Total of ${annotations.length} ${annotations.length === 1 ? 'issue' : 'issues'}`
    return {
      name: 'cargo-clippy',
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
  } else {
    return {
      name: 'cargo-clippy',
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
}
