import { runJsonCommand } from '../checks-common'
import { AuditDataV1 } from './audit-types'

export async function runNpmAudit(extraArgs: string[] = ['--production']): Promise<AuditDataV1> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [exitInfo, json] = await runJsonCommand<AuditDataV1>('npm', ['audit', '--json', ...extraArgs], {
    env: { ...process.env, TZ: 'UTC' }
  })
  return json
}
