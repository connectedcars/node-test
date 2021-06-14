import { ExitInformation } from '../../unix'
import { runJsonLinesCommand } from '../checks-common'
import { getEnvRustFlags, touchRustFiles } from './cargo'
import { CargoMessage } from './cargo-types'

export async function runCargo(args: string[], ci = true): Promise<[ExitInformation, CargoMessage[]]> {
  // Description for why this is needed, can be found
  // at the `touchRustFiles` definition
  await touchRustFiles()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return runJsonLinesCommand<CargoMessage>('cargo', args, {
    env: {
      ...process.env,
      RUSTFLAGS: getEnvRustFlags(ci)
    }
  })
}
