import { CommandEmulation, RunProcess } from '../..'
import { CargoMessage } from './cargo-types'
import { cargoCheckFailedOutput } from './resources/cargo-check-text'
import { runCargoCheck } from './run-cargo-check'

describe('run-cargo-check', () => {
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

  it('should start a `cargo check` process and wait for exit', async () => {
    await commandEmulation.registerCommand(
      'cargo',
      data => {
        // Cargo emits message as individual json objects line-by-line,
        // so a single `process.stdout.end(JSON.stringify(data))` will not
        // suffice, as it would wrap it all in an array.
        const msgs = (data as any[]) as CargoMessage[]
        for (const msg of msgs) {
          process.stdout.write(JSON.stringify(msg))
          process.stdout.write('\n')
        }
        process.stdout.end()

        process.stdout.on('finish', () => {
          process.exit(0)
        })
      },
      null,
      cargoCheckFailedOutput as any
    )
    const cargoJson = await runCargoCheck()
    expect(cargoJson).toEqual(cargoCheckFailedOutput)
  })
})
