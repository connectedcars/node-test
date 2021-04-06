import { cargoTestCheck } from './cargo-test'
import { cargoTestFailedOutput } from './resources/cargo-test-text'

describe('checks/cargo-tests', () => {
  it('converts no failed tests', () => {
    const results = cargoTestCheck({ data: [], sha: '11963e3cb7ecbb9247f638cc0fb047173a62cf7a' })

    expect(results).toEqual({
      name: 'cargo test',
      status: 'completed',
      completed_at: expect.any(String),
      head_sha: '11963e3cb7ecbb9247f638cc0fb047173a62cf7a',
      conclusion: 'success',
      output: {
        title: 'Tests passed',
        summary: 'Tests passed'
      }
    })
  })

  it('converts invalid input', () => {
    const results = cargoTestCheck({ data: {} as any, sha: '11963e3cb7ecbb9247f638cc0fb047173a62cf7a' })
    expect(results).toEqual({
      name: 'cargo test',
      status: 'completed',
      completed_at: expect.any(String),
      head_sha: '11963e3cb7ecbb9247f638cc0fb047173a62cf7a',
      conclusion: 'neutral',
      output: {
        title: 'Unexpected test output',
        summary: ''
      }
    })
  })

  it('converts failed compilation and tests', () => {
    const results = cargoTestCheck({ data: cargoTestFailedOutput, sha: '11963e3cb7ecbb9247f638cc0fb047173a62cf7a' })

    expect(results).toEqual({
      name: 'cargo test',
      status: 'completed',
      completed_at: expect.any(String),
      head_sha: '11963e3cb7ecbb9247f638cc0fb047173a62cf7a',
      conclusion: 'failure',
      output: {
        title: 'Total of 3 errors',
        summary: 'Total of 3 errors',
        annotations: [
          {
            path: 'can/src/lib.rs',
            start_line: 535,
            end_line: 535,
            annotation_level: 'failure',
            message: 'expected one of `.`, `;`, `?`, `}`, or an operator, found `assert_eq`',
            raw_details: ''
          },
          {
            path: 'can/src/lib.rs',
            start_line: 0,
            end_line: 0,
            annotation_level: 'failure',
            message: 'aborting due to previous error; 2 warnings emitted',
            raw_details: ''
          },
          {
            path: 'can/src/can_session.rs',
            start_line: 0,
            end_line: 0,
            annotation_level: 'failure',
            message: 'can_session::tests::tp2_stays_alive_after_applayer_error',
            raw_details: ''
          }
        ]
      }
    })
  })
})
