import { CommandEmulation, RunProcess } from '../..'
import { vitestNotFound, vitestSuccessfulOutput } from './resources/vitest-help-text'
import { runVitest } from './run-vitest'

describe('checks/run-vitest', () => {
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

  it('should start a vitest process and wait for exit', async () => {
    await commandEmulation.registerCommand(
      'vitest',
      data => {
        process.stdout.end(JSON.stringify(data))
        process.stdout.on('finish', () => {
          process.exit(0)
        })
      },
      null,
      vitestSuccessfulOutput
    )
    const vitestJson = await runVitest()
    expect(vitestJson).toEqual(vitestSuccessfulOutput)
  })

  it('should handle vitest test failing to launch', async () => {
    await commandEmulation.registerCommand(
      'vitest',
      data => {
        process.stdout.end(JSON.stringify(data))
        process.stdout.on('finish', () => {
          process.exit(0)
        })
      },
      null,
      vitestNotFound
    )
    const vitestJson = await runVitest()
    expect(vitestJson).toEqual(vitestNotFound)
  })
})
