import { cargoClippyCheck } from './cargo-clippy'
import { cargoClippyFailedOutput } from './resources/cargo-clippy-text'

describe('checks/clippy', () => {
  it('converts successful clippy', () => {
    const result = cargoClippyCheck({ data: [], sha: '11963e3cb7ecbb9247f638cc0fb047173a62cf7a' })
    expect(result).toEqual({
      name: 'cargo clippy',
      head_sha: '11963e3cb7ecbb9247f638cc0fb047173a62cf7a',
      completed_at: expect.any(String),
      conclusion: 'success',
      status: 'completed',
      output: {
        title: 'Found no errors',
        summary: 'Found no errors',
        annotations: []
      }
    })
  })
  it('converts failed clippy', () => {
    const result = cargoClippyCheck({ data: cargoClippyFailedOutput, sha: '11963e3cb7ecbb9247f638cc0fb047173a62cf7a' })

    expect(result).toEqual({
      name: 'cargo clippy',
      head_sha: '11963e3cb7ecbb9247f638cc0fb047173a62cf7a',
      completed_at: expect.any(String),
      conclusion: 'failure',
      status: 'completed',
      output: {
        title: 'Total of 2 errors',
        summary: 'Total of 2 errors',
        text: expect.any(String),
        annotations: [
          {
            path: 'can/src/lib.rs',
            start_line: 391,
            end_line: 391,
            annotation_level: 'failure',
            message:
              'this comparison involving the minimum or maximum element for this type contains a case that is always true or always false',
            raw_details: ''
          },
          {
            path: 'can/src/lib.rs',
            start_line: 0,
            end_line: 0,
            annotation_level: 'failure',
            message: 'aborting due to previous error',
            raw_details: ''
          }
        ]
      }
    })
  })
  it('converts buggy clippy', () => {
    const result = cargoClippyCheck({
      data: {} as any,
      sha: '11963e3cb7ecbb9247f638cc0fb047173a62cf7a'
    })
    expect(result).toEqual({
      conclusion: 'neutral',
      completed_at: expect.any(String),
      head_sha: '11963e3cb7ecbb9247f638cc0fb047173a62cf7a',
      name: 'cargo clippy',
      status: 'completed',
      output: {
        title: 'Unexpected clippy output',
        summary: ''
      }
    })
  })
})
