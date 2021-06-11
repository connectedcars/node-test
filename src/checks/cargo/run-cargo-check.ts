import { runJsonLinesCommand } from '../checks-common'
import { touchRustFiles } from './cargo'
import { CargoMessage } from './cargo-types'

export async function runCargoCheck(args: string[] = [], allFeatures = false): Promise<CargoMessage[]> {
  // Description for why this is needed, can be found
  // at the `touchRustFiles` definition
  await touchRustFiles()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [exitInfo, json] = await runJsonLinesCommand<CargoMessage>(
    'cargo',
    [
      'check',
      '--all-targets',
      allFeatures ? '--all-features' : '',
      '--locked',
      '--message-format=json',
      '--',
      ...args
    ].filter(Boolean)
  )

  return json
}
