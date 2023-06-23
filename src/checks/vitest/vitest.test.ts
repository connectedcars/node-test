import { vitestFailedOutput, vitestPassedOutput, vitestSkippedOutput } from './resources/vitest-help-text'
import { FormattedTestResults, vitestCheck } from './vitest'

describe('checks/vitest', () => {
  it('processes passing vitest output to checks structure', () => {
    const output = vitestCheck({ data: vitestPassedOutput, sha: '1234567890' })
    const expected = {
      name: 'vitest',
      head_sha: '1234567890',
      conclusion: 'success',
      status: 'completed',
      completed_at: expect.stringMatching(/^\d{4}/),
      output: {
        title: '116 of 116 tests passed',
        summary: '116 of 116 tests passed',
        annotations: []
      }
    }
    expect(output).toStrictEqual(expected)
  })

  it('processes failing vitest output to checks structure', () => {
    const output = vitestCheck({ data: vitestFailedOutput, sha: '1234567890' })
    expect(output).toMatchSnapshot({
      completed_at: expect.stringMatching(/^\d{4}/)
    })
  })

  it('handles empty input', () => {
    const sampleOutput = ''
    const output = vitestCheck({
      data: sampleOutput as unknown as FormattedTestResults,
      sha: '1234567890'
    })
    expect(output).toStrictEqual({
      name: 'vitest',
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
    const output = vitestCheck({ data: vitestSkippedOutput, sha: '1234567890' })
    expect(output).toMatchSnapshot({
      completed_at: expect.stringMatching(/^\d{4}/)
    })
  })
})
