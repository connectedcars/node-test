import { CommandEmulation, RunProcess } from '../..'
import { CargoMessage } from './cargo-types'
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

  it('should start a cargo process and wait for exit', async () => {
    await commandEmulation.registerCommand(
      'cargo',
      data => {
        // Cargo emits message as individual json objects line-by-line,
        // so a single `process.stdout.end(JSON.stringify(data))` will not
        // suffice, as it would wrap it all in an array.
        const msgs = (data as any[]) as CargoMessage[]
        msgs.forEach(msg => {
          process.stdout.write(JSON.stringify(msg))
          process.stdout.write('\n')
        })
        process.stdout.end()

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
