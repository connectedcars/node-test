import { runJsonCommand } from '../checks-common'

export async function runEslint(): Promise<EslintData[]> {
  const [_, json] = await runJsonCommand<EslintData[]>('eslint', ['--format', 'json', './src/**/*.{ts,tsx}'])
  return json
}
