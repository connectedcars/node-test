import { SpawnOptions } from 'child_process'

import { ExitInformation } from '../../unix'
import { runJsonLinesCommand } from '../checks-common'
import { getRustEnv, isTouchingWorkspaceRequired, touchRustFiles } from './cargo'
import { runCargoLocateWorkspace } from './run-cargo-locate-workspace'
import { getRustVersion } from './run-rustc-version'

export type CargoRunCommand<T> = (
  command: string,
  args: string[],
  options?: SpawnOptions | undefined
) => Promise<[ExitInformation, T[]]>

export async function runCargo<T>(
  args: string[] = [],
  ci = true,
  skipTouching = false,
  runCommand: CargoRunCommand<T> = runJsonLinesCommand
): Promise<T[]> {
  if (!skipTouching) {
    const version = await getRustVersion()
    if (isTouchingWorkspaceRequired(version)) {
      // Description for why this is needed, can be found
      // at the `touchRustFiles` definition
      await touchRustFiles()
    }
  }

  const workspacePath = await runCargoLocateWorkspace()

  const isReleaseBuild = args.indexOf('--release') !== -1
  const isAllFeatures = args.indexOf('--all-features') !== -1

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [exitInfo, json] = await runCommand('cargo', args, {
    env: getRustEnv(workspacePath, isReleaseBuild, isAllFeatures, ci)
  })
  return json
}
