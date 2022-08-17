import { FormattedTestResults, jestCheck } from './jest'
import { jestFailedOutput, jestPassedOutput, jestSkippedOutput } from './resources/jest-help-text'

describe('checks/jest', () => {
  it('processes passing jest output to checks structure', () => {
    const output = jestCheck({ data: jestPassedOutput, sha: '1234567890' })
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
    const output = jestCheck({ data: jestFailedOutput, sha: '1234567890' })
    expect(output).toMatchSnapshot({
      completed_at: expect.stringMatching(/^\d{4}/)
    })
  })

  it('handles empty input', () => {
    const sampleOutput = ''
    const output = jestCheck({
      data: sampleOutput as unknown as FormattedTestResults,
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

  it('should handle skipped tests', () => {
    const output = jestCheck({ data: jestSkippedOutput, sha: '1234567890' })
    expect(output).toMatchSnapshot({
      completed_at: expect.stringMatching(/^\d{4}/)
    })
  })
})
