import { CommandJSONConversionError } from '../checks-common'
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
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return await runCargo(
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
  } catch (e) {
    if (e instanceof CommandJSONConversionError) {
      if (e.stderr.trimLeft().startsWith('error: no library targets found in package')) {
        // Executing `cargo test --doc` for non-library crates is not supported
        return []
      }
    }

    throw e
  }
}
