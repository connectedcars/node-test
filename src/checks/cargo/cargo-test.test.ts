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
      conclusion: 'skipped',
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
        title: 'Total of 3 issues',
        summary: 'Total of 3 issues',
        annotations: [
          {
            path: 'can/src/lib.rs',
            start_line: 535,
            end_line: 535,
            annotation_level: 'failure',
            message: 'expected one of `.`, `;`, `?`, `}`, or an operator, found `assert_eq`',
            raw_details:
              '{\n' +
              '    "rendered": "error: expected one of `.`, `;`, `?`, `}`, or an operator, found `assert_eq`\\n   --> can/src/can_session.rs:536:9\\n    |\\n535 |         assert!(false) \\n    |                       - expected one of `.`, `;`, `?`, `}`, or an operator\\n536 |         assert_eq!(session.typ, SessionType::TP2(0x89));\\n    |         ^^^^^^^^^ unexpected token\\n\\n",\n' +
              '    "children": [],\n' +
              '    "code": null,\n' +
              '    "level": "error",\n' +
              '    "message": "expected one of `.`, `;`, `?`, `}`, or an operator, found `assert_eq`",\n' +
              '    "spans": [\n' +
              '        {\n' +
              '            "byte_end": 17846,\n' +
              '            "byte_start": 17846,\n' +
              '            "column_end": 23,\n' +
              '            "column_start": 23,\n' +
              '            "expansion": null,\n' +
              '            "file_name": "can/src/can_session.rs",\n' +
              '            "is_primary": false,\n' +
              '            "label": "expected one of `.`, `;`, `?`, `}`, or an operator",\n' +
              '            "line_end": 535,\n' +
              '            "line_start": 535,\n' +
              '            "suggested_replacement": null,\n' +
              '            "suggestion_applicability": null,\n' +
              '            "text": [\n' +
              '                {\n' +
              '                    "highlight_end": 23,\n' +
              '                    "highlight_start": 23,\n' +
              '                    "text": "        assert!(false) "\n' +
              '                }\n' +
              '            ]\n' +
              '        },\n' +
              '        {\n' +
              '            "byte_end": 17865,\n' +
              '            "byte_start": 17856,\n' +
              '            "column_end": 18,\n' +
              '            "column_start": 9,\n' +
              '            "expansion": null,\n' +
              '            "file_name": "can/src/can_session.rs",\n' +
              '            "is_primary": true,\n' +
              '            "label": "unexpected token",\n' +
              '            "line_end": 536,\n' +
              '            "line_start": 536,\n' +
              '            "suggested_replacement": null,\n' +
              '            "suggestion_applicability": null,\n' +
              '            "text": [\n' +
              '                {\n' +
              '                    "highlight_end": 18,\n' +
              '                    "highlight_start": 9,\n' +
              '                    "text": "        assert_eq!(session.typ, SessionType::TP2(0x89));"\n' +
              '                }\n' +
              '            ]\n' +
              '        }\n' +
              '    ]\n' +
              '}'
          },
          {
            path: 'can/src/lib.rs',
            start_line: 0,
            end_line: 0,
            annotation_level: 'failure',
            message: 'aborting due to previous error; 2 warnings emitted',
            raw_details:
              '{\n' +
              '    "rendered": "error: aborting due to previous error; 2 warnings emitted\\n\\n",\n' +
              '    "children": [],\n' +
              '    "code": null,\n' +
              '    "level": "error",\n' +
              '    "message": "aborting due to previous error; 2 warnings emitted",\n' +
              '    "spans": []\n' +
              '}'
          },
          {
            path: 'can/src/can_session.rs',
            start_line: 0,
            end_line: 0,
            annotation_level: 'failure',
            message: 'can_session::tests::tp2_stays_alive_after_applayer_error',
            raw_details:
              '{\n' +
              '    "type": "test",\n' +
              '    "name": "can_session::tests::tp2_stays_alive_after_applayer_error",\n' +
              '    "event": "failed",\n' +
              '    "exec_time": "0.000s",\n' +
              '    "stdout": "thread \'can_session::tests::tp2_stays_alive_after_applayer_error\' panicked at \'assertion failed: false\', can/src/can_session.rs:535:9\\nnote: run with `RUST_BACKTRACE=1` environment variable to display a backtrace\\n"\n' +
              '}'
          }
        ]
      }
    })
  })
})
