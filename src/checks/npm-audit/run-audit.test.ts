import { CommandEmulation, RunProcess } from '../..'
import { auditOneVulnerability } from './resources/audit-help-text'
import { runNpmAudit } from './run-audit'

describe('run-audit', () => {
  const commandEmulation = new CommandEmulation()

  afterAll(async () => {
    await commandEmulation.cleanup()
  })

  const processCleanup: Array<RunProcess> = []
  afterEach(async () => {
    // Make sure all process are stopped
    for (const process of processCleanup) {
      await process.stop()
    }
  })

  it('should start an audit process and wait for exit', async () => {
    await commandEmulation.registerCommand(
      'npm',
      data => {
        process.stdout.end(JSON.stringify(data))
        process.stdout.on('finish', () => {
          process.exit(0)
        })
      },
      null,
      auditOneVulnerability
    )
    const auditJson = await runNpmAudit()
    expect(auditJson).toEqual(auditOneVulnerability)
  })
})
