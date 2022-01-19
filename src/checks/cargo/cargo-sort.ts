import { basename } from 'path'

import { filterDuplicates } from '../../common'
import { CheckAnnotation, CheckRunCompleted } from '../checks-common'
import {
  cargoFoundIssues,
  cargoFoundNoIssues,
  cargoUnexpectedOutput,
  collectAnnotations,
  collectCargoManifestParseErrors
} from './cargo'
import { CargoManifestParseError } from './cargo-types'
import { runCargoLocateWorkspace } from './run-cargo-locate-workspace'
import { CargoSortMessage } from './run-cargo-sort'

export interface CargoSortInput {
  sha: string
  data: (CargoSortMessage | CargoManifestParseError)[]
}

export async function cargoSortCheck({ data, sha }: CargoSortInput): Promise<CheckRunCompleted> {
  if (!Array.isArray(data)) {
    return cargoUnexpectedOutput('cargo-sort', sha)
  }

  const workspacePath = await runCargoLocateWorkspace()
  const rootName = basename(workspacePath)

  // eslint-disable-next-line prefer-const
  let [annotations, stats] = collectAnnotations(data, (item, annotations, stats) => {
    if (item.reason === 'manifest-parse-error') {
      collectCargoManifestParseErrors(item, annotations, stats)
    } else {
      // This assumes that there are no crates within the workspace with the same name
      const path = item.crate === null || item.crate === rootName ? 'Cargo.toml' : `${item.crate}/Cargo.toml`

      let message = item.error
      if (item.manifest !== null) {
        message += `\nExpected:\n${item.manifest}`
      }

      const annotation: CheckAnnotation = {
        path,
        start_line: 0,
        end_line: 0,
        annotation_level: 'failure',
        message,
        title: item.error,
        raw_details: JSON.stringify(message, null, 4)
      }

      annotations.push(annotation)
      stats.error += 1
    }
  })

  if (annotations.length > 0) {
    annotations = filterDuplicates(annotations)

    return cargoFoundIssues('cargo-sort', sha, annotations, stats)
  } else {
    return cargoFoundNoIssues('cargo-sort', sha)
  }
}
