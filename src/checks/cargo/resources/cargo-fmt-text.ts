import { CargoFmtFile } from '../cargo-types'

export const cargoFmtFailedOutput: CargoFmtFile[] = [
  {
    name: '/checks-test/src/foo/bar.rs',
    mismatches: [
      {
        original_begin_line: 1,
        original_end_line: 7,
        expected_begin_line: 1,
        expected_end_line: 2,
        original: '\n\npub fn bar(\n\n)\n{\n    println!  (  "bar"  )  ;',
        expected: 'pub fn bar() {\n    println!("bar");'
      }
    ]
  },
  {
    name: '/checks-test/src/foo/mod.rs',
    mismatches: [
      {
        original_begin_line: 1,
        original_end_line: 5,
        expected_begin_line: 1,
        expected_end_line: 1,
        original: '\n\nmod bar\n;\n',
        expected: 'mod bar;'
      }
    ]
  },
  {
    name: '/checks-test/src/main.rs',
    mismatches: [
      {
        original_begin_line: 9,
        original_end_line: 9,
        expected_begin_line: 9,
        expected_end_line: 9,
        original: '',
        expected: 'mod foo;'
      },
      {
        original_begin_line: 10,
        original_end_line: 10,
        expected_begin_line: 11,
        expected_end_line: 12,
        original: ' mod foo  ;',
        expected: 'fn main() {\n    let foo = foo();'
      },
      {
        original_begin_line: 12,
        original_end_line: 16,
        expected_begin_line: 14,
        expected_end_line: 14,
        original: '\nfn main()\n{\n      let foo = foo();\n',
        expected: ''
      },
      {
        original_begin_line: 19,
        original_end_line: 19,
        expected_begin_line: 16,
        expected_end_line: 16,
        original: '',
        expected: ''
      },
      {
        original_begin_line: 27,
        original_end_line: 28,
        expected_begin_line: 23,
        expected_end_line: 23,
        original: '\n',
        expected: ''
      },
      {
        original_begin_line: 35,
        original_end_line: 38,
        expected_begin_line: 29,
        expected_end_line: 32,
        original: '\n\n    if { let b = false; b } {}\n',
        expected: '    if {\n        let b = false;\n        b\n    } {}'
      },
      {
        original_begin_line: 56,
        original_end_line: 56,
        expected_begin_line: 50,
        expected_end_line: 50,
        original: '    assert!(false);',
        expected: '        assert!(false);'
      },
      {
        original_begin_line: 71,
        original_end_line: 72,
        expected_begin_line: 65,
        expected_end_line: 65,
        original: '\n',
        expected: ''
      },
      {
        original_begin_line: 74,
        original_end_line: 75,
        expected_begin_line: 66,
        expected_end_line: 66,
        original: '\n',
        expected: ''
      }
    ]
  }
]
