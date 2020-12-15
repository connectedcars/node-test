import { runJsonCommand } from '../checks-common'
import { AuditData } from './audit-types'

export async function runNpmAudit(extraArgs: string[] = []): Promise<AuditData> {
  const [_, json] = await runJsonCommand<AuditData>('npm', ['audit', '--json', ...extraArgs], {
    env: { ...process.env, TZ: 'UTC' }
  })
  return json
}
