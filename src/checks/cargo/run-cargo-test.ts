import { CargoMessage } from './cargo-types'
import { runCargo } from './run-cargo'

export async function runCargoTest(args: string[] = [], ci = true): Promise<CargoMessage[]> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return runCargo(
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
}

// Issue: https://github.com/rust-lang/cargo/issues/6669
export async function runCargoDocTest(args: string[] = [], ci = true): Promise<CargoMessage[]> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return runCargo(
    [
      'test',
      '--doc',
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
}
