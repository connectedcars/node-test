import { runJsonCommand } from '../checks-common'

export async function runMocha(extraArgs: string[] = []): Promise<MochaData> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [exitInfo, json] = await runJsonCommand<MochaData>(
    'mocha',
    [...extraArgs, 'src/**/*.test.js', '--reporter=json'],
    {
      env: { ...process.env, TZ: 'UTC' }
    }
  )
  return json
}
