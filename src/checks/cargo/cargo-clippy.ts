import { filterDuplicates } from '../../common'
import { CheckRunCompleted } from '../checks-common'
import {
  cargoFoundIssues,
  cargoFoundNoIssues,
  cargoUnexpectedOutput,
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
    return cargoUnexpectedOutput('cargo-clippy', sha)
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

    return cargoFoundIssues('cargo-clippy', sha, annotations, stats)
  } else {
    return cargoFoundNoIssues('cargo-clippy', sha)
  }
}
