import { mochaCheck } from './mocha'
import { mochaFailedOutput, mochaSuccessfulOutput } from './resources/mocha-help-text'

describe('checks/mocha', () => {
  it('processes passing mocha output to checks structure', () => {
    const data = JSON.parse(mochaSuccessfulOutput)

    const output = mochaCheck({
      data,
      sha: 'c61a4ae014360e064eb2a9f76c8a6a55d05e5b88'
    })
    const expected = {
      name: 'mocha',
      head_sha: 'c61a4ae014360e064eb2a9f76c8a6a55d05e5b88',
      conclusion: 'success',
      status: 'completed',
      completed_at: expect.stringMatching(/^\d{4}/),
      output: {
        title: 'mocha',
        summary: 'Found **0** failed tests (**2787** passing)',
        annotations: []
      }
    }
    expect(output).toStrictEqual(expected)
  })

  it('processes failing mocha output to checks structure', () => {
    const data = mochaFailedOutput

    const output = mochaCheck({
      data,
      sha: 'c61a4ae014360e064eb2a9f76c8a6a55d05e5b88'
    })
    expect(output).toMatchSnapshot({
      completed_at: expect.stringMatching(/^\d{4}/)
    })
  })
})
