/* tsc-disable @typescript-tsc/camelcase */
import { tscErrorOutput, tscMultiErrorOutput, tscSuccesfulOutput } from './resources/tsc-help-text'
import { parseTsc } from './run-tsc'
import { tscCheck } from './tsc'

describe('checks/tsc', () => {
  it('converts successful tsc', () => {
    const data = parseTsc(tscSuccesfulOutput)
    const result = tscCheck({
      data
    })
    expect(result).toStrictEqual({
      conclusion: 'success',
      status: 'completed',
      completed_at: expect.stringMatching(/^\d{4}/),
      output: {
        title: 'No problems found',
        summary: 'No problems found',
        annotations: []
      }
    })
  })

  it('converts successful failed tsc', () => {
    const data = parseTsc(tscErrorOutput)
    const result = tscCheck({
      data
    })
    expect(result).toMatchSnapshot({
      status: 'completed',
      completed_at: expect.stringMatching(/^\d{4}/)
    })
  })

  it('converts successful failed tsc with multi errors', () => {
    const data = parseTsc(tscMultiErrorOutput)
    const result = tscCheck({
      data
    })
    expect(result).toMatchSnapshot({
      completed_at: expect.stringMatching(/^\d{4}/)
    })
  })
})
