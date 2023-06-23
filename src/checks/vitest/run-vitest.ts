import { runJsonCommand } from '../checks-common'
import { FormattedTestResults } from './vitest'

export async function runVitest(command = 'vitest', extraArgs: string[] = []): Promise<FormattedTestResults> {
  const [, json] = await runJsonCommand<FormattedTestResults>(
    command,
    [...extraArgs, '--run', '--silent', '--no-color', '--reporter=json'],
    {
      env: { ...process.env, TZ: 'UTC' }
    }
  )
  return json
}
