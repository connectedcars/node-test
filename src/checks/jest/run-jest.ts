import { FormattedTestResults } from '@jest/test-result/build/types'

import { runJsonCommand } from '../checks-common'

export async function runJest(command = 'jest', extraArgs: string[] = []): Promise<FormattedTestResults> {
  const [_, json] = await runJsonCommand<FormattedTestResults>(
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
