import { runJsonCommand } from '../checks-common'
import { CargoFmtFile } from './cargo-types'

export async function runCargoFmt(args: string[] = []): Promise<CargoFmtFile[]> {
  // While cargo and clippy emits individual json objects, rustfmt does not
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [exitInfo, json] = await runJsonCommand<CargoFmtFile[]>('cargo', [
    '+nightly',
    'fmt',
    '--',
    '--emit=json',
    '--color',
    'never',
    ...args
  ])
  // TODO: If there is syntax errors then `cargo fmt` fails, which results in `json` being empty
  //       and in turn `cargoFmtCheck` passing. It might be useful to handle that case. However,
  //       it is less important, as `checks cargo-fmt` won't be used alone.
  return json
}
