import { runJsonCommand } from '../checks-common'
import { CargoMessage } from './cargo-types'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function runCargoFmt(args: string[] = []): Promise<boolean> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [exitInfo, json] = await runJsonCommand<CargoMessage[]>('cargo', ['fmt', '-q', '--', '--check'])
  return exitInfo.code === 0
}
