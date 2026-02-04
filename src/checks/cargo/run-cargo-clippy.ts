import { CargoMessage } from './cargo-types'
import { runCargo } from './run-cargo'

export async function runCargoClippy(args: string[] = [], ci = true, releaseBuild = false): Promise<CargoMessage[]> {
  if (args.length === 0) {
    args = ['-W', 'clippy::all']
  }

  return runCargo(
    [
      'clippy',
      releaseBuild ? '--release' : '',
      '--all-targets',
      '--all-features',
      '--locked',
      '--message-format=json',
      '--',
      ...args
    ].filter(Boolean),
    ci
  )
}
