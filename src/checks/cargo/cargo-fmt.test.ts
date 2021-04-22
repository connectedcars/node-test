import { cargoFmtCheck } from './cargo-fmt'
import { cargoFmtFailedOutput } from './resources/cargo-fmt-text'

describe('checks/cargo-fmt', () => {
  it('converts successful cargo fmt', () => {
    const result = cargoFmtCheck({ data: [], sha: '11963e3cb7ecbb9247f638cc0fb047173a62cf7a' })
    expect(result).toEqual({
      name: 'cargo fmt',
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
  it('converts failed cargo fmt', () => {
    const result = cargoFmtCheck({ data: cargoFmtFailedOutput, sha: '11963e3cb7ecbb9247f638cc0fb047173a62cf7a' })
    expect(result).toEqual({
      name: 'cargo fmt',
      head_sha: '11963e3cb7ecbb9247f638cc0fb047173a62cf7a',
      conclusion: 'failure',
      status: 'completed',
      completed_at: expect.any(String),
      output: {
        title: 'Total of 11 issues',
        summary: 'Total of 11 issues',
        annotations: [
          {
            path: '/checks-test/src/foo/bar.rs',
            annotation_level: 'failure',
            start_line: 1,
            end_line: 2,
            message:
              'Original: \n\npub fn bar(\n\n)\n{\n    println!  (  "bar"  )  ;\n\nExpected: pub fn bar() {\n    println!("bar");',
            raw_details:
              '{\n    "original_begin_line": 1,\n    "original_end_line": 7,\n    "expected_begin_line": 1,\n    "expected_end_line": 2,\n    "original": "\\n\\npub fn bar(\\n\\n)\\n{\\n    println!  (  \\"bar\\"  )  ;",\n    "expected": "pub fn bar() {\\n    println!(\\"bar\\");"\n}'
          },
          {
            path: '/checks-test/src/foo/mod.rs',
            annotation_level: 'failure',
            start_line: 1,
            end_line: 1,
            message: 'Original: \n\nmod bar\n;\n\n\nExpected: mod bar;',
            raw_details:
              '{\n    "original_begin_line": 1,\n    "original_end_line": 5,\n    "expected_begin_line": 1,\n    "expected_end_line": 1,\n    "original": "\\n\\nmod bar\\n;\\n",\n    "expected": "mod bar;"\n}'
          },
          {
            path: '/checks-test/src/main.rs',
            annotation_level: 'failure',
            start_line: 9,
            end_line: 9,
            message: 'Original: \n\nExpected: mod foo;',
            raw_details:
              '{\n    "original_begin_line": 9,\n    "original_end_line": 9,\n    "expected_begin_line": 9,\n    "expected_end_line": 9,\n    "original": "",\n    "expected": "mod foo;"\n}'
          },
          {
            path: '/checks-test/src/main.rs',
            annotation_level: 'failure',
            start_line: 10,
            end_line: 12,
            message: 'Original:  mod foo  ;\n\nExpected: fn main() {\n    let foo = foo();',
            raw_details:
              '{\n    "original_begin_line": 10,\n    "original_end_line": 10,\n    "expected_begin_line": 11,\n    "expected_end_line": 12,\n    "original": " mod foo  ;",\n    "expected": "fn main() {\\n    let foo = foo();"\n}'
          },
          {
            path: '/checks-test/src/main.rs',
            annotation_level: 'failure',
            start_line: 12,
            end_line: 14,
            message: 'Original: \nfn main()\n{\n      let foo = foo();\n\n\nExpected: ',
            raw_details:
              '{\n    "original_begin_line": 12,\n    "original_end_line": 16,\n    "expected_begin_line": 14,\n    "expected_end_line": 14,\n    "original": "\\nfn main()\\n{\\n      let foo = foo();\\n",\n    "expected": ""\n}'
          },
          {
            path: '/checks-test/src/main.rs',
            annotation_level: 'failure',
            start_line: 19,
            end_line: 16,
            message: 'Original: \n\nExpected: ',
            raw_details:
              '{\n    "original_begin_line": 19,\n    "original_end_line": 19,\n    "expected_begin_line": 16,\n    "expected_end_line": 16,\n    "original": "",\n    "expected": ""\n}'
          },
          {
            path: '/checks-test/src/main.rs',
            annotation_level: 'failure',
            start_line: 27,
            end_line: 23,
            message: 'Original: \n\n\nExpected: ',
            raw_details:
              '{\n    "original_begin_line": 27,\n    "original_end_line": 28,\n    "expected_begin_line": 23,\n    "expected_end_line": 23,\n    "original": "\\n",\n    "expected": ""\n}'
          },
          {
            path: '/checks-test/src/main.rs',
            annotation_level: 'failure',
            start_line: 35,
            end_line: 32,
            message:
              'Original: \n\n    if { let b = false; b } {}\n\n\nExpected:     if {\n        let b = false;\n        b\n    } {}',
            raw_details:
              '{\n    "original_begin_line": 35,\n    "original_end_line": 38,\n    "expected_begin_line": 29,\n    "expected_end_line": 32,\n    "original": "\\n\\n    if { let b = false; b } {}\\n",\n    "expected": "    if {\\n        let b = false;\\n        b\\n    } {}"\n}'
          },
          {
            path: '/checks-test/src/main.rs',
            annotation_level: 'failure',
            start_line: 56,
            end_line: 50,
            message: 'Original:     assert!(false);\n\nExpected:         assert!(false);',
            raw_details:
              '{\n    "original_begin_line": 56,\n    "original_end_line": 56,\n    "expected_begin_line": 50,\n    "expected_end_line": 50,\n    "original": "    assert!(false);",\n    "expected": "        assert!(false);"\n}'
          },
          {
            path: '/checks-test/src/main.rs',
            annotation_level: 'failure',
            start_line: 71,
            end_line: 65,
            message: 'Original: \n\n\nExpected: ',
            raw_details:
              '{\n    "original_begin_line": 71,\n    "original_end_line": 72,\n    "expected_begin_line": 65,\n    "expected_end_line": 65,\n    "original": "\\n",\n    "expected": ""\n}'
          },
          {
            path: '/checks-test/src/main.rs',
            annotation_level: 'failure',
            start_line: 74,
            end_line: 66,
            message: 'Original: \n\n\nExpected: ',
            raw_details:
              '{\n    "original_begin_line": 74,\n    "original_end_line": 75,\n    "expected_begin_line": 66,\n    "expected_end_line": 66,\n    "original": "\\n",\n    "expected": ""\n}'
          }
        ]
      }
    })
  })
  it('converts buggy cargo fmt', () => {
    const result = cargoFmtCheck({
      data: {} as any,
      sha: '11963e3cb7ecbb9247f638cc0fb047173a62cf7a'
    })
    expect(result).toEqual({
      conclusion: 'skipped',
      completed_at: expect.any(String),
      head_sha: '11963e3cb7ecbb9247f638cc0fb047173a62cf7a',
      name: 'cargo fmt',
      status: 'completed',
      output: {
        title: 'Unexpected cargo fmt output',
        summary: ''
      }
    })
  })
})
