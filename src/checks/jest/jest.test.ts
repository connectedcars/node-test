import { FormattedTestResults } from '@jest/test-result/build/types'

import { jestCheck } from './jest'
import { jestFailedOutput, jestPassedOutput } from './resources/jest-help-text'

describe('checks/jest', () => {
  it('processes passing jest output to checks structure', () => {
    const data = JSON.parse(jestPassedOutput)

    const output = jestCheck({ data, sha: '1234567890' })
    const expected = {
      name: 'jest',
      head_sha: '1234567890',
      conclusion: 'success',
      status: 'completed',
      completed_at: expect.stringMatching(/^\d{4}/),
      output: {
        title: '33 of 33 tests passed!',
        summary: '33 of 33 tests passed!',
        annotations: []
      }
    }
    expect(output).toStrictEqual(expected)
  })

  it('processes failing jest output to checks structure', () => {
    const data = JSON.parse(jestFailedOutput)
    const output = jestCheck({ data, sha: '1234567890' })
    expect(output).toMatchSnapshot({
      completed_at: expect.stringMatching(/^\d{4}/)
    })
  })

  it('handles empty input', () => {
    const sampleOutput = ''
    const output = jestCheck({
      data: (sampleOutput as unknown) as FormattedTestResults,
      sha: '1234567890'
    })
    expect(output).toStrictEqual({
      name: 'jest',
      head_sha: '1234567890',
      conclusion: 'neutral',
      status: 'completed',
      completed_at: expect.stringMatching(/^\d{4}/),
      output: {
        title: 'No tests found',
        summary: 'No tests found',
        annotations: []
      }
    })
  })
})
