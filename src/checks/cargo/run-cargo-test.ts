import { CommandJSONConversionError, runJsonLinesCommand } from '../checks-common'
import { CargoMessage } from './cargo-types'
import { runCargo } from './run-cargo'

export async function runCargoTest(
  args: string[] = [],
  ci = true,
  useNextest?: boolean
): Promise<[CargoMessage[], string]> {
  const nextest = useNextest ?? process.env['CC_USE_NEXTEST'] === '1'

  if (nextest) {
    // cargo nextest run replaces the libtest harness, so --message-format=libtest-json
    // controls the test output format, and --cargo-message-format=json controls the
    // build/compiler messages (same as --message-format=json in cargo test).
    // Doc tests are not supported by nextest; use runCargoDocTest for those.
    return runCargo<CargoMessage>(
      [
        'nextest',
        'run',
        '--all-targets',
        '--no-fail-fast',
        '--locked',
        '--cargo-message-format=json',
        '--message-format=libtest-json',
        ...args
      ],
      ci,
      false,
      (command, nexttestArgs, options) =>
        runJsonLinesCommand<CargoMessage>(command, nexttestArgs, {
          ...options,
          env: { ...(options?.env ?? {}), NEXTEST_EXPERIMENTAL_LIBTEST_JSON: '1' }
        })
    )
  }

  return runCargo(
    [
      '+nightly',
      'test',
      '--all-targets',
      '--no-fail-fast',
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
export async function runCargoDocTest(args: string[] = [], ci = true): Promise<[CargoMessage[], string]> {
  try {
    return await runCargo(
      [
        // Getting the output in JSON requires an "unstable" feature that's only available on nightly
        // This only applies to the testing not the code that is shipped
        '+nightly',
        'test',
        '--doc',
        '--no-fail-fast',
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
        return [[], '']
      }
    }

    throw e
  }
}
