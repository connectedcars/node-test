import { runJsonLinesCommand } from '../checks-common'
import { CargoMessage } from './cargo-types'

export async function runCargoCheck(args: string[] = []): Promise<CargoMessage[]> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [exitInfo, json] = await runJsonLinesCommand<CargoMessage>('cargo', [
    'check',
    '--all-targets',
    '--all-features',
    '--locked',
    '--message-format=json',
    '--',
    ...args
  ])
  return json
}
