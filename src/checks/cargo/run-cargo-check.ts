import { CargoMessage } from './cargo-types'
import { runCargo } from './run-cargo'

export async function runCargoCheck(
  args: string[] = [],
  allFeatures = false,
  ci = true,
  releaseBuild = false
): Promise<CargoMessage[]> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return runCargo(
    [
      'check',
      releaseBuild ? '--release' : '',
      '--all-targets',
      allFeatures ? '--all-features' : '',
      '--locked',
      '--message-format=json',
      '--',
      ...args
    ].filter(Boolean),
    ci
  )
}
