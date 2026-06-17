import { runJsonCommand } from '../checks-common'
import { CargoFmtFile } from './cargo-types'
import { runCargo } from './run-cargo'

export async function runCargoFmt(args: string[] = [], ci = true): Promise<[CargoFmtFile[], string]> {
  // While cargo and clippy emits individual json objects, rustfmt does not

  return runCargo<CargoFmtFile>(
    // To get the output in JSON requires an "unstable" feature that's only available on nightly
    // This only applies to the formatting not the code that is shipped
    ['+nightly', 'fmt', '--', '--emit=json', '--color', 'never', ...args],
    ci,
    true,
    runJsonCommand
  )
  // TODO: If there is syntax errors then `cargo fmt` fails, which results in `json` being empty
  //       and in turn `cargoFmtCheck` passing. It might be useful to handle that case. However,
  //       it is less important, as `checks cargo-fmt` won't be used alone.
}
