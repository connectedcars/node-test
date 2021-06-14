import { CargoMessage } from './cargo-types'
import { runCargo } from './run-cargo'

export async function runCargoClippy(args: string[] = [], ci = true): Promise<CargoMessage[]> {
  if (args.length == 0) {
    args = ['-D', 'clippy::all']
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [exitInfo, json] = await runCargo(
    ['clippy', '--all-targets', '--all-features', '--locked', '--message-format=json', '--', ...args],
    ci
  )
  return json
}
