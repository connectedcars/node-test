import { tflintIssues } from './resources/tflint-issues'
import { tflintCheck } from './tflint'

describe('checks/tflint', () => {
  it('processes passing tflint output to checks structure', () => {
    const output = tflintCheck({ data: { issues: [], errors: [] }, sha: '1234567890' })
    const expected = {
      name: 'tflint',
      head_sha: '1234567890',
      conclusion: 'success',
      status: 'completed',
      completed_at: expect.stringMatching(/^\d{4}/),
      output: {
        title: '0 issue(s) found',
        summary: '0 issue(s) found',
        annotations: []
      }
    }
    expect(output).toStrictEqual(expected)
  })

  it('processes failing tflint output to checks structure', () => {
    const output = tflintCheck({ data: tflintIssues, sha: '1234567890' })
    expect(output).toMatchSnapshot({
      completed_at: expect.stringMatching(/^\d{4}/)
    })
  })
})
