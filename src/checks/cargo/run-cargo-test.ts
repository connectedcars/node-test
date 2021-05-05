import { runJsonLinesCommand } from '../checks-common'
import { CargoMessage } from './cargo-types'

export async function runCargoTest(args: string[] = []): Promise<CargoMessage[]> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [exitInfo, json] = await runJsonLinesCommand<CargoMessage>('cargo', [
    'test',
    '--all-targets',
    '--locked',
    '--message-format=json',
    '--',
    '-Zunstable-options',
    '--format=json',
    // '--report-time',
    ...args
  ])
  return json
}
