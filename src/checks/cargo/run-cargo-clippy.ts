import { runJsonLinesCommand } from '../checks-common'
import { touchRustFiles } from './cargo'
import { CargoMessage } from './cargo-types'

export async function runCargoClippy(args: string[] = []): Promise<CargoMessage[]> {
  if (args.length == 0) {
    args = ['-D', 'clippy::all']
  }

  // Description for why this is needed, can be found
  // at the `touchRustFiles` definition
  await touchRustFiles()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [exitInfo, json] = await runJsonLinesCommand<CargoMessage>('cargo', [
    'clippy',
    '--all-targets',
    '--all-features',
    '--locked',
    '--message-format=json',
    '--',
    ...args
  ])
  return json
}
