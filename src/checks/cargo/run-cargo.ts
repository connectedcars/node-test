import { SpawnOptions } from 'child_process'

import { ExitInformation } from '../../unix'
import { runJsonLinesCommand } from '../checks-common'
import { getEnvRustFlags, touchRustFiles } from './cargo'

export type CargoRunCommand<T> = (
  command: string,
  args: string[],
  options?: SpawnOptions | undefined
) => Promise<[ExitInformation, T[]]>

export async function runCargo<T>(
  args: string[] = [],
  ci = true,
  runCommand: CargoRunCommand<T> = runJsonLinesCommand
): Promise<T[]> {
  // Description for why this is needed, can be found
  // at the `touchRustFiles` definition
  await touchRustFiles()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [exitInfo, json] = await runCommand('cargo', args, {
    env: {
      ...process.env,
      RUSTFLAGS: getEnvRustFlags(ci)
    }
  })
  return json
}
