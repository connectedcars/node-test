import { runJsonCommand } from '../checks-common'
import { AuditData } from './audit-types'

export async function runNpmAudit(extraArgs: string[] = []): Promise<AuditData> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [exitInfo, json] = await runJsonCommand<AuditData>('npm', ['audit', '--json', ...extraArgs], {
    env: { ...process.env, TZ: 'UTC' }
  })
  return json
}
