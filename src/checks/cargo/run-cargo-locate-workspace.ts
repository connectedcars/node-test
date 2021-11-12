import path from 'path'

import { runCommand } from '../checks-common'

let WORKSPACE_PATH: string | null = null

export async function runCargoLocateWorkspace(): Promise<string> {
  if (WORKSPACE_PATH !== null) {
    return WORKSPACE_PATH
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { exitInfo, stdout, stderr } = await runCommand('cargo', [
    'locate-project',
    '--workspace',
    '--message-format=plain'
  ])

  WORKSPACE_PATH = path.parse(stdout.trim()).dir

  return WORKSPACE_PATH
}
