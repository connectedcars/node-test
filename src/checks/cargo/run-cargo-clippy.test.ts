import { CommandEmulation, RunProcess } from '../..'
import { CargoMessage } from './cargo-types'
import { cargoClippyFailedOutput } from './resources/cargo-clippy-text'
import { runCargoClippy } from './run-cargo-clippy'

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

  it('should start a `cargo clippy` process and wait for exit', async () => {
    await commandEmulation.registerCommand(
      'cargo',
      data => {
        // Cargo emits message as individual json objects line-by-line,
        // so a single `process.stdout.end(JSON.stringify(data))` will not
        // suffice, as it would wrap it all in an array.
        const msgs = data as any[] as CargoMessage[]
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
      cargoClippyFailedOutput as any
    )
    await commandEmulation.registerCommand(
      'rustc',
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      data => {
        process.stdout.end('rustc 1.54.0 (a178d0322 2021-07-26)\n')

        process.stdout.on('finish', () => {
          process.exit(0)
        })
      },
      null
    )
    const cargoJson = await runCargoClippy()
    expect(cargoJson).toEqual(cargoClippyFailedOutput)
  })
})
