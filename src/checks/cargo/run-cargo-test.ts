import { runJsonCommand } from '../checks-common'
import { CargoMessage } from './cargo-types'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function runCargoTest(args: string[] = []): Promise<CargoMessage[]> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [exitInfo, json] = await runJsonCommand<CargoMessage[]>('cargo', [
    'test',
    '--locked',
    '--message-format',
    'json',
    '--',
    '-Zunstable-options',
    '--format',
    'json',
    '--report-time'
  ])
  return json
}
