import { CommandEmulation, RunProcess } from '../..'
import { cargoTestFailedOutput } from './resources/cargo-test-text'
import { runCargoTest } from './run-cargo-test'

describe('run-cargo-clippy', () => {
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

  it('should start a eslint process and wait for exit', async () => {
    await commandEmulation.registerCommand(
      'cargo',
      data => {
        process.stdout.end(JSON.stringify(data))
        process.stdout.on('finish', () => {
          process.exit(0)
        })
      },
      null,
      cargoTestFailedOutput as any
    )
    const cargoJson = await runCargoTest()
    expect(cargoJson).toEqual(cargoTestFailedOutput)
  })
})
