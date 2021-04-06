import { runJsonCommand } from '../checks-common'
import { CargoMessage } from './cargo-types'

export async function runCargoClippy(args: string[] = []): Promise<CargoMessage[]> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [exitInfo, json] = await runJsonCommand<CargoMessage[]>('cargo', [
    'clippy',
    '--all-features',
    '--message-format json',
    '--',
    '-D',
    'clippy::all'
  ])
  return json
}
