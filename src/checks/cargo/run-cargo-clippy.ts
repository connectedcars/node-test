import { runJsonLinesCommand } from '../checks-common'
import { touchRustFiles } from './cargo'
import { CargoMessage } from './cargo-types'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function runCargoClippy(args: string[] = []): Promise<CargoMessage[]> {
  // Description for why this is needed, can be found
  // at the `touchRustFiles` definition
  await touchRustFiles()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [exitInfo, json] = await runJsonLinesCommand<CargoMessage>('cargo', [
    'clippy',
    '--all-features',
    '--message-format json',
    '--',
    '-D',
    'clippy::all'
  ])
  return json
}
