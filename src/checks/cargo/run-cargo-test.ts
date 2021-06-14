import { CargoMessage } from './cargo-types'
import { runCargo } from './run-cargo'

export async function runCargoTest(args: string[] = [], ci = true): Promise<CargoMessage[]> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [exitInfo, json] = await runCargo(
    [
      'test',
      '--all-targets',
      '--locked',
      '--message-format=json',
      '--',
      '-Zunstable-options',
      '--format=json',
      // '--report-time',
      ...args
    ],
    ci
  )
  return json
}
