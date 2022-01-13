import path from 'path'

import { ExitInformation } from '../..'
import { splitLines } from '../../common'
import { runCommand } from '../checks-common'

let WORKSPACE_PATH: string | null = null

export async function runCargoLocateWorkspace(): Promise<string> {
  if (WORKSPACE_PATH !== null) {
    return WORKSPACE_PATH
  }

  const { exitInfo, stdout, stderr } = await runCommand('cargo', [
    'locate-project',
    '--workspace',
    '--message-format=plain'
  ])

  if (exitInfo.code != 0) {
    throw new CargoLocateWorkspaceError(exitInfo, stdout, stderr)
  }

  WORKSPACE_PATH = path.parse(stdout.trim()).dir

  return WORKSPACE_PATH
}

export class CargoLocateWorkspaceError extends Error {
  public exitInfo: ExitInformation
  public stdout: string
  public stderr: string

  public constructor(exitInfo: ExitInformation, stdout: string, stderr: string) {
    const err = splitLines(stderr)[0]

    super(`cargo locate workspace failed: ${err}`)

    this.exitInfo = exitInfo
    this.stdout = stdout
    this.stderr = stderr
  }
}
