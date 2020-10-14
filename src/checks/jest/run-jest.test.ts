import { CommandEmulation, RunProcess } from '../..'
import { jestNotFound, jestSuccessfulOutput } from './resources/jest-help-text'
import { runJest, runReactScriptsTest } from './run-jest'

describe('run-jest', () => {
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

  it('should start a jest process and wait for exit', async () => {
    await commandEmulation.registerCommand(
      'jest',
      data => {
        process.stdout.write(JSON.stringify(data))
        process.exit(0)
      },
      null,
      jestSuccessfulOutput
    )
    const jestJson = await runJest()
    expect(jestJson).toEqual(jestSuccessfulOutput)
  })

  it('should start a react-scripts test process and wait for exit', async () => {
    await commandEmulation.registerCommand(
      'react-scripts',
      data => {
        process.stdout.write(JSON.stringify(data))
        process.exit(0)
      },
      null,
      jestSuccessfulOutput
    )
    const jestJson = await runReactScriptsTest()
    expect(jestJson).toEqual(jestSuccessfulOutput)
  })

  it('should handle react-scripts test failing to launch', async () => {
    await commandEmulation.registerCommand(
      'react-scripts',
      data => {
        process.stdout.write(JSON.stringify(data))
        process.exit(1)
      },
      null,
      jestNotFound
    )
    const jestJson = await runReactScriptsTest()
    expect(jestJson).toEqual(jestNotFound)
  })
})
