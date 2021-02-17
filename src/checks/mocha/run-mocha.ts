import { runJsonCommand } from '../checks-common'
import { MochaData } from './mocha-types'

export async function runMocha(args: string[] = []): Promise<MochaData> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [exitInfo, json] = await runJsonCommand<MochaData>(
    'mocha',
    ['--reporter=json', ...(args.length > 0 ? args : ['src/**/*.test.js'])],
    {
      env: { ...process.env, TZ: 'UTC' }
    }
  )
  return json
}
