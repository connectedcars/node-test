import { basename } from 'path'

import { filterDuplicates } from '../../common'
import { CheckAnnotation, CheckRunCompleted } from '../checks-common'
import { collectAnnotations, collectCargoManifestParseErrors } from './cargo'
import { CargoManifestParseError } from './cargo-types'
import { runCargoLocateWorkspace } from './run-cargo-locate-workspace'
import { CargoSortMessage } from './run-cargo-sort'

export interface CargoSortInput {
  sha: string
  data: (CargoSortMessage | CargoManifestParseError)[]
}

export async function cargoSortCheck({ data, sha }: CargoSortInput): Promise<CheckRunCompleted> {
  if (!Array.isArray(data)) {
    return {
      name: 'cargo-sort',
      head_sha: sha,
      conclusion: 'skipped',
      status: 'completed',
      completed_at: new Date().toISOString(),
      output: {
        title: 'Unexpected sort output',
        summary: ''
      }
    }
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

    const summary = `Total of ${annotations.length} ${annotations.length === 1 ? 'issue' : 'issues'}`
    return {
      name: 'cargo-sort',
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
      name: 'cargo-sort',
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
