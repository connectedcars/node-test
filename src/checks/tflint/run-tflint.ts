import { runJsonCommand } from '../checks-common'
import { TflintData } from './tflint'

export async function runTflint(command = 'tflint', extraArgs: string[] = []): Promise<TflintData> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [exitInfo, json] = await runJsonCommand<TflintData>(command, [...extraArgs, '--no-color', '--format=json'])
  return json
}
