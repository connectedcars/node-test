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
        title: 'Found no issues',
        summary: 'Found no issues',
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
        title: 'Total of 2 issues',
        summary: 'Total of 2 issues',
        text: expect.any(String),
        annotations: [
          {
            path: 'can/src/lib.rs',
            start_line: 391,
            end_line: 391,
            annotation_level: 'failure',
            message:
              'this comparison involving the minimum or maximum element for this type contains a case that is always true or always false',
            raw_details:
              '{\n' +
              '    "rendered": "error: this comparison involving the minimum or maximum element for this type contains a case that is always true or always false\\n   --> can/src/can_session.rs:391:12\\n    |\\n391 |         if 100 > i32::MAX {}\\n    |            ^^^^^^^^^^^^^^\\n    |\\n    = note: `-D clippy::absurd-extreme-comparisons` implied by `-D clippy::all`\\n    = help: because `i32::MAX` is the maximum value for this type, this comparison is always false\\n    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#absurd_extreme_comparisons\\n\\n",\n' +
              '    "children": [\n' +
              '        {\n' +
              '            "children": [],\n' +
              '            "code": null,\n' +
              '            "level": "note",\n' +
              '            "message": "`-D clippy::absurd-extreme-comparisons` implied by `-D clippy::all`",\n' +
              '            "rendered": null,\n' +
              '            "spans": []\n' +
              '        },\n' +
              '        {\n' +
              '            "children": [],\n' +
              '            "code": null,\n' +
              '            "level": "help",\n' +
              '            "message": "because `i32::MAX` is the maximum value for this type, this comparison is always false",\n' +
              '            "rendered": null,\n' +
              '            "spans": []\n' +
              '        },\n' +
              '        {\n' +
              '            "children": [],\n' +
              '            "code": null,\n' +
              '            "level": "help",\n' +
              '            "message": "for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#absurd_extreme_comparisons",\n' +
              '            "rendered": null,\n' +
              '            "spans": []\n' +
              '        }\n' +
              '    ],\n' +
              '    "code": {\n' +
              '        "code": "clippy::absurd_extreme_comparisons",\n' +
              '        "explanation": null\n' +
              '    },\n' +
              '    "level": "error",\n' +
              '    "message": "this comparison involving the minimum or maximum element for this type contains a case that is always true or always false",\n' +
              '    "spans": [\n' +
              '        {\n' +
              '            "byte_end": 13338,\n' +
              '            "byte_start": 13324,\n' +
              '            "column_end": 26,\n' +
              '            "column_start": 12,\n' +
              '            "expansion": null,\n' +
              '            "file_name": "can/src/can_session.rs",\n' +
              '            "is_primary": true,\n' +
              '            "label": null,\n' +
              '            "line_end": 391,\n' +
              '            "line_start": 391,\n' +
              '            "suggested_replacement": null,\n' +
              '            "suggestion_applicability": null,\n' +
              '            "text": [\n' +
              '                {\n' +
              '                    "highlight_end": 26,\n' +
              '                    "highlight_start": 12,\n' +
              '                    "text": "        if 100 > i32::MAX {}"\n' +
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
            message: 'aborting due to previous error',
            raw_details:
              '{\n' +
              '    "rendered": "error: aborting due to previous error\\n\\n",\n' +
              '    "children": [],\n' +
              '    "code": null,\n' +
              '    "level": "error",\n' +
              '    "message": "aborting due to previous error",\n' +
              '    "spans": []\n' +
              '}'
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
