import { CommandEmulation, RunProcess } from '../..'
import { cargoFmtFailedOutput } from './resources/cargo-fmt-text'
import { runCargoFmt } from './run-cargo-fmt'

describe('run-cargo-fmt', () => {
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

  it('should start a cargo process and wait for exit', async () => {
    await commandEmulation.registerCommand(
      'cargo',
      data => {
        process.stdout.end(JSON.stringify(data))
        process.stdout.on('finish', () => {
          process.exit(0)
        })
      },
      null,
      cargoFmtFailedOutput as any
    )
    const cargoJson = await runCargoFmt()
    expect(cargoJson).toEqual(cargoFmtFailedOutput)
  })
})
