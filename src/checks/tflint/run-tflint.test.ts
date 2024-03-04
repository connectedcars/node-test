import { CommandEmulation, RunProcess } from '../..'
import { runTflint } from './run-tflint'

describe('run-tflint', () => {
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

  it('should start a tflint process and wait for exit', async () => {
    await commandEmulation.registerCommand(
      'tflint',
      data => {
        process.stdout.end(JSON.stringify(data))
        process.stdout.on('finish', () => {
          process.exit(0)
        })
      },
      null,
      { issues: [], errors: [] }
    )
    const tflintJson = await runTflint()
    expect(tflintJson).toEqual({ issues: [], errors: [] })
  })
})
