import { eslintCheck } from './eslint'
import {
  eslintErrorAnnotationsOutput,
  eslintErrorOutput,
  eslintSkippedOutput,
  eslintSuccessfulOutput
} from './resources/eslint-help-text'

describe('checks/eslint', () => {
  it('converts successful eslint', () => {
    const data = JSON.parse(eslintSuccessfulOutput)
    const result = eslintCheck({
      data,
      org: 'connectedcars',
      repo: 'cloudbuilder-wrapper',
      sha: 'c61a4ae014360e064eb2a9f76c8a6a55d05e5b88'
    })
    expect(result).toMatchSnapshot({
      completed_at: expect.stringMatching(/^\d{4}/)
    })
  })

  it('converts successful failed eslint', () => {
    const data = JSON.parse(eslintErrorOutput)
    const result = eslintCheck({
      data,
      org: 'connectedcars',
      repo: 'cloudbuilder-wrapper',
      sha: 'c61a4ae014360e064eb2a9f76c8a6a55d05e5b88'
    })
    expect(result).toMatchSnapshot({
      completed_at: expect.stringMatching(/^\d{4}/)
    })
  })

  it('converts successful failed eslint with annotations', () => {
    const data = JSON.parse(eslintErrorAnnotationsOutput)
    const result = eslintCheck({
      data,
      org: 'connectedcars',
      repo: 'cloudbuilder-wrapper',
      sha: 'c61a4ae014360e064eb2a9f76c8a6a55d05e5b88'
    })
    expect(result).toMatchSnapshot({
      completed_at: expect.stringMatching(/^\d{4}/)
    })
  })

  it('converts successful skipped eslint', () => {
    const data = JSON.parse(eslintSkippedOutput)
    const result = eslintCheck({
      data,
      org: 'connectedcars',
      repo: 'cloudbuilder-wrapper',
      sha: 'c61a4ae014360e064eb2a9f76c8a6a55d05e5b88'
    })
    expect(result).toMatchSnapshot({
      completed_at: expect.stringMatching(/^\d{4}/)
    })
  })
})
