import { runJsonCommand } from '../checks-common'
import { FormattedTestResults } from './jest'

export async function runJest(command = 'jest', extraArgs: string[] = []): Promise<FormattedTestResults> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [exitInfo, json] = await runJsonCommand<FormattedTestResults>(
    command,
    [...extraArgs, '--silent', '--no-color', '--json'],
    {
      env: { ...process.env, TZ: 'UTC' }
    }
  )
  return json
}

// Create React App uses a special test command
export async function runReactScriptsTest(): Promise<FormattedTestResults> {
  return runJest('react-scripts', ['test'])
}
