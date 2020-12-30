import { runJsonCommand } from '../checks-common'

export async function runEslint(args: string[] = []): Promise<EslintData[]> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [exitInfo, json] = await runJsonCommand<EslintData[]>('eslint', [
    '--format',
    'json',
    ...(args.length > 0 ? args : ['./src/**/*.{ts,tsx}'])
  ])

  return json
}
