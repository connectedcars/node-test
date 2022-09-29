import { mochaCheck } from './mocha'
import { mochaFailedOutput, mochaLongOutput, mochaSuccessfulOutput } from './resources/mocha-help-text'

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

  it('truncates very long mocha output while maintaining checks structure', () => {
    const data = mochaLongOutput

    const output = mochaCheck({
      data,
      sha: 'c61a4ae014360e064eb2a9f76c8a6a55d05e5b88'
    })
    expect(output).toMatchObject({
      name: 'mocha',
      head_sha: 'c61a4ae014360e064eb2a9f76c8a6a55d05e5b88',
      conclusion: 'failure',
      status: 'completed',
      completed_at: expect.stringMatching(/^\d{4}/),
      output: {
        title: 'mocha',
        summary: 'Found **1** failed test (**634** passing)',
        annotations: [
          {
            path: 'src/generators/messageGenerators/workshop/shared/InviteUserToCar.test.js',
            start_line: 305,
            end_line: 305,
            annotation_level: 'failure',
            message: expect.stringContaining(
              '305:5     Invokes car invitation message for primary user with alternative template'
            ),
            title: 'src/generators/messageGenerators/workshop/shared/InviteUserToCar.test.js#L305',
            raw_details: expect.stringMatching(
              /Invokes car invitation message for primary user with alternative template/
            )
          }
        ]
      }
    })
  })
})
