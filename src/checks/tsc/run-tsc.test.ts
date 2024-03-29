import { CommandEmulation, RunProcess } from '../..'
import { tscCommandErrorOutput, tscErrorOutput } from './resources/tsc-help-text'
import { parseTsc, runTsc } from './run-tsc'

describe('run-tsc', () => {
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

  it('should start a tsc process and wait for exit', async () => {
    await commandEmulation.registerCommand(
      'tsc',
      data => {
        process.stdout.end(data?.toString() || '')
        process.stdout.on('finish', () => {
          process.exit(0)
        })
      },
      null,
      tscErrorOutput
    )
    const tscOutput = await runTsc()
    expect(tscOutput).toEqual(parseTsc(tscErrorOutput))
  })

  it('should fail when tsc process exits with non-zero code', async () => {
    await commandEmulation.registerCommand(
      'tsc',
      data => {
        process.stdout.end(data?.toString() || '')
        process.stdout.on('finish', () => {
          process.exit(130)
        })
      },
      null,
      tscCommandErrorOutput
    )
    await expect(runTsc()).rejects.toThrow(new Error(`tsc failed: ${tscCommandErrorOutput}`))
  })
})
