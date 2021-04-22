import { cargoCheckCheck } from './cargo-check'
import { cargoCheckFailedOutput } from './resources/cargo-check-text'

describe('checks/cargo-check', () => {
  it('converts successful cargo check', () => {
    const result = cargoCheckCheck({ data: [], sha: '11963e3cb7ecbb9247f638cc0fb047173a62cf7a' })
    expect(result).toEqual({
      name: 'cargo check',
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
  it('converts failed cargo check', () => {
    const result = cargoCheckCheck({ data: cargoCheckFailedOutput, sha: '11963e3cb7ecbb9247f638cc0fb047173a62cf7a' })
    expect(result).toEqual({
      name: 'cargo check',
      head_sha: '11963e3cb7ecbb9247f638cc0fb047173a62cf7a',
      conclusion: 'failure',
      status: 'completed',
      completed_at: expect.any(String),
      output: {
        title: 'Total of 14 issues',
        summary: 'Total of 14 issues',
        text:
          '## Results\n\n' +
          '| Message level           | Amount |\n' +
          '| ----------------------- | ------ |\n' +
          '| Internal compiler error |      0 |\n' +
          '| Error                   |      0 |\n' +
          '| Warning                 |     14 |\n' +
          '| Note                    |      0 |\n' +
          '| Help                    |      0 |',
        annotations: [
          {
            path: 'Cargo.toml',
            start_line: 3,
            end_line: 3,
            annotation_level: 'failure',
            message: 'unused import: `std::io::BufReader`',
            raw_details:
              '{\n    "rendered": "warning: unused import: `std::io::BufReader`\\n --> src/main.rs:3:5\\n  |\\n3 | use std::io::BufReader;\\n  |     ^^^^^^^^^^^^^^^^^^\\n  |\\n  = note: `#[warn(unused_imports)]` on by default\\n\\n",\n    "children": [\n        {\n            "children": [],\n            "code": null,\n            "level": "note",\n            "message": "`#[warn(unused_imports)]` on by default",\n            "rendered": null,\n            "spans": []\n        },\n        {\n            "children": [],\n            "code": null,\n            "level": "help",\n            "message": "remove the whole `use` item",\n            "rendered": null,\n            "spans": [\n                {\n                    "byte_end": 52,\n                    "byte_start": 29,\n                    "column_end": 24,\n                    "column_start": 1,\n                    "expansion": null,\n                    "file_name": "src/main.rs",\n                    "is_primary": true,\n                    "label": null,\n                    "line_end": 3,\n                    "line_start": 3,\n                    "suggested_replacement": "",\n                    "suggestion_applicability": "MachineApplicable",\n                    "text": [\n                        {\n                            "highlight_end": 24,\n                            "highlight_start": 1,\n                            "text": "use std::io::BufReader;"\n                        }\n                    ]\n                }\n            ]\n        }\n    ],\n    "code": {\n        "code": "unused_imports",\n        "explanation": null\n    },\n    "level": "warning",\n    "message": "unused import: `std::io::BufReader`",\n    "spans": [\n        {\n            "byte_end": 51,\n            "byte_start": 33,\n            "column_end": 23,\n            "column_start": 5,\n            "expansion": null,\n            "file_name": "src/main.rs",\n            "is_primary": true,\n            "label": null,\n            "line_end": 3,\n            "line_start": 3,\n            "suggested_replacement": null,\n            "suggestion_applicability": null,\n            "text": [\n                {\n                    "highlight_end": 23,\n                    "highlight_start": 5,\n                    "text": "use std::io::BufReader;"\n                }\n            ]\n        }\n    ]\n}'
          },
          {
            path: 'Cargo.toml',
            start_line: 3,
            end_line: 3,
            annotation_level: 'failure',
            message: 'unused import: `std::io::BufReader`',
            raw_details:
              '{\n    "rendered": "warning: unused import: `std::io::BufReader`\\n --> src/main.rs:3:5\\n  |\\n3 | use std::io::BufReader;\\n  |     ^^^^^^^^^^^^^^^^^^\\n  |\\n  = note: `#[warn(unused_imports)]` on by default\\n\\n",\n    "children": [\n        {\n            "children": [],\n            "code": null,\n            "level": "note",\n            "message": "`#[warn(unused_imports)]` on by default",\n            "rendered": null,\n            "spans": []\n        },\n        {\n            "children": [],\n            "code": null,\n            "level": "help",\n            "message": "remove the whole `use` item",\n            "rendered": null,\n            "spans": [\n                {\n                    "byte_end": 52,\n                    "byte_start": 29,\n                    "column_end": 24,\n                    "column_start": 1,\n                    "expansion": null,\n                    "file_name": "src/main.rs",\n                    "is_primary": true,\n                    "label": null,\n                    "line_end": 3,\n                    "line_start": 3,\n                    "suggested_replacement": "",\n                    "suggestion_applicability": "MachineApplicable",\n                    "text": [\n                        {\n                            "highlight_end": 24,\n                            "highlight_start": 1,\n                            "text": "use std::io::BufReader;"\n                        }\n                    ]\n                }\n            ]\n        }\n    ],\n    "code": {\n        "code": "unused_imports",\n        "explanation": null\n    },\n    "level": "warning",\n    "message": "unused import: `std::io::BufReader`",\n    "spans": [\n        {\n            "byte_end": 51,\n            "byte_start": 33,\n            "column_end": 23,\n            "column_start": 5,\n            "expansion": null,\n            "file_name": "src/main.rs",\n            "is_primary": true,\n            "label": null,\n            "line_end": 3,\n            "line_start": 3,\n            "suggested_replacement": null,\n            "suggestion_applicability": null,\n            "text": [\n                {\n                    "highlight_end": 23,\n                    "highlight_start": 5,\n                    "text": "use std::io::BufReader;"\n                }\n            ]\n        }\n    ]\n}'
          },
          {
            path: 'Cargo.toml',
            start_line: 15,
            end_line: 15,
            annotation_level: 'failure',
            message: 'unused variable: `foo`',
            raw_details:
              '{\n    "rendered": "warning: unused variable: `foo`\\n  --> src/main.rs:15:11\\n   |\\n15 |       let foo = foo();\\n   |           ^^^ help: if this is intentional, prefix it with an underscore: `_foo`\\n   |\\n   = note: `#[warn(unused_variables)]` on by default\\n\\n",\n    "children": [\n        {\n            "children": [],\n            "code": null,\n            "level": "note",\n            "message": "`#[warn(unused_variables)]` on by default",\n            "rendered": null,\n            "spans": []\n        },\n        {\n            "children": [],\n            "code": null,\n            "level": "help",\n            "message": "if this is intentional, prefix it with an underscore",\n            "rendered": null,\n            "spans": [\n                {\n                    "byte_end": 160,\n                    "byte_start": 157,\n                    "column_end": 14,\n                    "column_start": 11,\n                    "expansion": null,\n                    "file_name": "src/main.rs",\n                    "is_primary": true,\n                    "label": null,\n                    "line_end": 15,\n                    "line_start": 15,\n                    "suggested_replacement": "_foo",\n                    "suggestion_applicability": "MachineApplicable",\n                    "text": [\n                        {\n                            "highlight_end": 14,\n                            "highlight_start": 11,\n                            "text": "      let foo = foo();"\n                        }\n                    ]\n                }\n            ]\n        }\n    ],\n    "code": {\n        "code": "unused_variables",\n        "explanation": null\n    },\n    "level": "warning",\n    "message": "unused variable: `foo`",\n    "spans": [\n        {\n            "byte_end": 160,\n            "byte_start": 157,\n            "column_end": 14,\n            "column_start": 11,\n            "expansion": null,\n            "file_name": "src/main.rs",\n            "is_primary": true,\n            "label": null,\n            "line_end": 15,\n            "line_start": 15,\n            "suggested_replacement": null,\n            "suggestion_applicability": null,\n            "text": [\n                {\n                    "highlight_end": 14,\n                    "highlight_start": 11,\n                    "text": "      let foo = foo();"\n                }\n            ]\n        }\n    ]\n}'
          },
          {
            path: 'Cargo.toml',
            start_line: 15,
            end_line: 15,
            annotation_level: 'failure',
            message: 'unused variable: `foo`',
            raw_details:
              '{\n    "rendered": "warning: unused variable: `foo`\\n  --> src/main.rs:15:11\\n   |\\n15 |       let foo = foo();\\n   |           ^^^ help: if this is intentional, prefix it with an underscore: `_foo`\\n   |\\n   = note: `#[warn(unused_variables)]` on by default\\n\\n",\n    "children": [\n        {\n            "children": [],\n            "code": null,\n            "level": "note",\n            "message": "`#[warn(unused_variables)]` on by default",\n            "rendered": null,\n            "spans": []\n        },\n        {\n            "children": [],\n            "code": null,\n            "level": "help",\n            "message": "if this is intentional, prefix it with an underscore",\n            "rendered": null,\n            "spans": [\n                {\n                    "byte_end": 160,\n                    "byte_start": 157,\n                    "column_end": 14,\n                    "column_start": 11,\n                    "expansion": null,\n                    "file_name": "src/main.rs",\n                    "is_primary": true,\n                    "label": null,\n                    "line_end": 15,\n                    "line_start": 15,\n                    "suggested_replacement": "_foo",\n                    "suggestion_applicability": "MachineApplicable",\n                    "text": [\n                        {\n                            "highlight_end": 14,\n                            "highlight_start": 11,\n                            "text": "      let foo = foo();"\n                        }\n                    ]\n                }\n            ]\n        }\n    ],\n    "code": {\n        "code": "unused_variables",\n        "explanation": null\n    },\n    "level": "warning",\n    "message": "unused variable: `foo`",\n    "spans": [\n        {\n            "byte_end": 160,\n            "byte_start": 157,\n            "column_end": 14,\n            "column_start": 11,\n            "expansion": null,\n            "file_name": "src/main.rs",\n            "is_primary": true,\n            "label": null,\n            "line_end": 15,\n            "line_start": 15,\n            "suggested_replacement": null,\n            "suggestion_applicability": null,\n            "text": [\n                {\n                    "highlight_end": 14,\n                    "highlight_start": 11,\n                    "text": "      let foo = foo();"\n                }\n            ]\n        }\n    ]\n}'
          },
          {
            path: 'Cargo.toml',
            start_line: 20,
            end_line: 20,
            annotation_level: 'failure',
            message: 'unused variable: `f`',
            raw_details:
              '{\n    "rendered": "warning: unused variable: `f`\\n  --> src/main.rs:20:9\\n   |\\n20 |     let f = File::open(\\"foo.txt\\");\\n   |         ^ help: if this is intentional, prefix it with an underscore: `_f`\\n\\n",\n    "children": [\n        {\n            "children": [],\n            "code": null,\n            "level": "help",\n            "message": "if this is intentional, prefix it with an underscore",\n            "rendered": null,\n            "spans": [\n                {\n                    "byte_end": 213,\n                    "byte_start": 212,\n                    "column_end": 10,\n                    "column_start": 9,\n                    "expansion": null,\n                    "file_name": "src/main.rs",\n                    "is_primary": true,\n                    "label": null,\n                    "line_end": 20,\n                    "line_start": 20,\n                    "suggested_replacement": "_f",\n                    "suggestion_applicability": "MachineApplicable",\n                    "text": [\n                        {\n                            "highlight_end": 10,\n                            "highlight_start": 9,\n                            "text": "    let f = File::open(\\"foo.txt\\");"\n                        }\n                    ]\n                }\n            ]\n        }\n    ],\n    "code": {\n        "code": "unused_variables",\n        "explanation": null\n    },\n    "level": "warning",\n    "message": "unused variable: `f`",\n    "spans": [\n        {\n            "byte_end": 213,\n            "byte_start": 212,\n            "column_end": 10,\n            "column_start": 9,\n            "expansion": null,\n            "file_name": "src/main.rs",\n            "is_primary": true,\n            "label": null,\n            "line_end": 20,\n            "line_start": 20,\n            "suggested_replacement": null,\n            "suggestion_applicability": null,\n            "text": [\n                {\n                    "highlight_end": 10,\n                    "highlight_start": 9,\n                    "text": "    let f = File::open(\\"foo.txt\\");"\n                }\n            ]\n        }\n    ]\n}'
          },
          {
            path: 'Cargo.toml',
            start_line: 20,
            end_line: 20,
            annotation_level: 'failure',
            message: 'unused variable: `f`',
            raw_details:
              '{\n    "rendered": "warning: unused variable: `f`\\n  --> src/main.rs:20:9\\n   |\\n20 |     let f = File::open(\\"foo.txt\\");\\n   |         ^ help: if this is intentional, prefix it with an underscore: `_f`\\n\\n",\n    "children": [\n        {\n            "children": [],\n            "code": null,\n            "level": "help",\n            "message": "if this is intentional, prefix it with an underscore",\n            "rendered": null,\n            "spans": [\n                {\n                    "byte_end": 213,\n                    "byte_start": 212,\n                    "column_end": 10,\n                    "column_start": 9,\n                    "expansion": null,\n                    "file_name": "src/main.rs",\n                    "is_primary": true,\n                    "label": null,\n                    "line_end": 20,\n                    "line_start": 20,\n                    "suggested_replacement": "_f",\n                    "suggestion_applicability": "MachineApplicable",\n                    "text": [\n                        {\n                            "highlight_end": 10,\n                            "highlight_start": 9,\n                            "text": "    let f = File::open(\\"foo.txt\\");"\n                        }\n                    ]\n                }\n            ]\n        }\n    ],\n    "code": {\n        "code": "unused_variables",\n        "explanation": null\n    },\n    "level": "warning",\n    "message": "unused variable: `f`",\n    "spans": [\n        {\n            "byte_end": 213,\n            "byte_start": 212,\n            "column_end": 10,\n            "column_start": 9,\n            "expansion": null,\n            "file_name": "src/main.rs",\n            "is_primary": true,\n            "label": null,\n            "line_end": 20,\n            "line_start": 20,\n            "suggested_replacement": null,\n            "suggestion_applicability": null,\n            "text": [\n                {\n                    "highlight_end": 10,\n                    "highlight_start": 9,\n                    "text": "    let f = File::open(\\"foo.txt\\");"\n                }\n            ]\n        }\n    ]\n}'
          },
          {
            path: 'Cargo.toml',
            start_line: 29,
            end_line: 29,
            annotation_level: 'failure',
            message: 'value assigned to `foo` is never read',
            raw_details:
              '{\n    "rendered": "warning: value assigned to `foo` is never read\\n  --> src/main.rs:29:9\\n   |\\n29 |     let mut foo = 0;\\n   |         ^^^^^^^\\n   |\\n   = note: `#[warn(unused_assignments)]` on by default\\n   = help: maybe it is overwritten before being read?\\n\\n",\n    "children": [\n        {\n            "children": [],\n            "code": null,\n            "level": "note",\n            "message": "`#[warn(unused_assignments)]` on by default",\n            "rendered": null,\n            "spans": []\n        },\n        {\n            "children": [],\n            "code": null,\n            "level": "help",\n            "message": "maybe it is overwritten before being read?",\n            "rendered": null,\n            "spans": []\n        }\n    ],\n    "code": {\n        "code": "unused_assignments",\n        "explanation": null\n    },\n    "level": "warning",\n    "message": "value assigned to `foo` is never read",\n    "spans": [\n        {\n            "byte_end": 355,\n            "byte_start": 348,\n            "column_end": 16,\n            "column_start": 9,\n            "expansion": null,\n            "file_name": "src/main.rs",\n            "is_primary": true,\n            "label": null,\n            "line_end": 29,\n            "line_start": 29,\n            "suggested_replacement": null,\n            "suggestion_applicability": null,\n            "text": [\n                {\n                    "highlight_end": 16,\n                    "highlight_start": 9,\n                    "text": "    let mut foo = 0;"\n                }\n            ]\n        }\n    ]\n}'
          },
          {
            path: 'Cargo.toml',
            start_line: 29,
            end_line: 29,
            annotation_level: 'failure',
            message: 'value assigned to `foo` is never read',
            raw_details:
              '{\n    "rendered": "warning: value assigned to `foo` is never read\\n  --> src/main.rs:29:9\\n   |\\n29 |     let mut foo = 0;\\n   |         ^^^^^^^\\n   |\\n   = note: `#[warn(unused_assignments)]` on by default\\n   = help: maybe it is overwritten before being read?\\n\\n",\n    "children": [\n        {\n            "children": [],\n            "code": null,\n            "level": "note",\n            "message": "`#[warn(unused_assignments)]` on by default",\n            "rendered": null,\n            "spans": []\n        },\n        {\n            "children": [],\n            "code": null,\n            "level": "help",\n            "message": "maybe it is overwritten before being read?",\n            "rendered": null,\n            "spans": []\n        }\n    ],\n    "code": {\n        "code": "unused_assignments",\n        "explanation": null\n    },\n    "level": "warning",\n    "message": "value assigned to `foo` is never read",\n    "spans": [\n        {\n            "byte_end": 355,\n            "byte_start": 348,\n            "column_end": 16,\n            "column_start": 9,\n            "expansion": null,\n            "file_name": "src/main.rs",\n            "is_primary": true,\n            "label": null,\n            "line_end": 29,\n            "line_start": 29,\n            "suggested_replacement": null,\n            "suggestion_applicability": null,\n            "text": [\n                {\n                    "highlight_end": 16,\n                    "highlight_start": 9,\n                    "text": "    let mut foo = 0;"\n                }\n            ]\n        }\n    ]\n}'
          },
          {
            path: 'Cargo.toml',
            start_line: 33,
            end_line: 33,
            annotation_level: 'failure',
            message: 'value assigned to `bar` is never read',
            raw_details:
              '{\n    "rendered": "warning: value assigned to `bar` is never read\\n  --> src/main.rs:33:5\\n   |\\n33 |     bar = foo;\\n   |     ^^^\\n   |\\n   = help: maybe it is overwritten before being read?\\n\\n",\n    "children": [\n        {\n            "children": [],\n            "code": null,\n            "level": "help",\n            "message": "maybe it is overwritten before being read?",\n            "rendered": null,\n            "spans": []\n        }\n    ],\n    "code": {\n        "code": "unused_assignments",\n        "explanation": null\n    },\n    "level": "warning",\n    "message": "value assigned to `bar` is never read",\n    "spans": [\n        {\n            "byte_end": 405,\n            "byte_start": 402,\n            "column_end": 8,\n            "column_start": 5,\n            "expansion": null,\n            "file_name": "src/main.rs",\n            "is_primary": true,\n            "label": null,\n            "line_end": 33,\n            "line_start": 33,\n            "suggested_replacement": null,\n            "suggestion_applicability": null,\n            "text": [\n                {\n                    "highlight_end": 8,\n                    "highlight_start": 5,\n                    "text": "    bar = foo;"\n                }\n            ]\n        }\n    ]\n}'
          },
          {
            path: 'Cargo.toml',
            start_line: 33,
            end_line: 33,
            annotation_level: 'failure',
            message: 'value assigned to `bar` is never read',
            raw_details:
              '{\n    "rendered": "warning: value assigned to `bar` is never read\\n  --> src/main.rs:33:5\\n   |\\n33 |     bar = foo;\\n   |     ^^^\\n   |\\n   = help: maybe it is overwritten before being read?\\n\\n",\n    "children": [\n        {\n            "children": [],\n            "code": null,\n            "level": "help",\n            "message": "maybe it is overwritten before being read?",\n            "rendered": null,\n            "spans": []\n        }\n    ],\n    "code": {\n        "code": "unused_assignments",\n        "explanation": null\n    },\n    "level": "warning",\n    "message": "value assigned to `bar` is never read",\n    "spans": [\n        {\n            "byte_end": 405,\n            "byte_start": 402,\n            "column_end": 8,\n            "column_start": 5,\n            "expansion": null,\n            "file_name": "src/main.rs",\n            "is_primary": true,\n            "label": null,\n            "line_end": 33,\n            "line_start": 33,\n            "suggested_replacement": null,\n            "suggestion_applicability": null,\n            "text": [\n                {\n                    "highlight_end": 8,\n                    "highlight_start": 5,\n                    "text": "    bar = foo;"\n                }\n            ]\n        }\n    ]\n}'
          },
          {
            path: 'Cargo.toml',
            start_line: 25,
            end_line: 25,
            annotation_level: 'failure',
            message: 'unused `std::result::Result` that must be used',
            raw_details:
              '{\n    "rendered": "warning: unused `std::result::Result` that must be used\\n  --> src/main.rs:25:5\\n   |\\n25 |     f.read(&mut buf);\\n   |     ^^^^^^^^^^^^^^^^^\\n   |\\n   = note: `#[warn(unused_must_use)]` on by default\\n   = note: this `Result` may be an `Err` variant, which should be handled\\n\\n",\n    "children": [\n        {\n            "children": [],\n            "code": null,\n            "level": "note",\n            "message": "`#[warn(unused_must_use)]` on by default",\n            "rendered": null,\n            "spans": []\n        },\n        {\n            "children": [],\n            "code": null,\n            "level": "note",\n            "message": "this `Result` may be an `Err` variant, which should be handled",\n            "rendered": null,\n            "spans": []\n        }\n    ],\n    "code": {\n        "code": "unused_must_use",\n        "explanation": null\n    },\n    "level": "warning",\n    "message": "unused `std::result::Result` that must be used",\n    "spans": [\n        {\n            "byte_end": 336,\n            "byte_start": 319,\n            "column_end": 22,\n            "column_start": 5,\n            "expansion": null,\n            "file_name": "src/main.rs",\n            "is_primary": true,\n            "label": null,\n            "line_end": 25,\n            "line_start": 25,\n            "suggested_replacement": null,\n            "suggestion_applicability": null,\n            "text": [\n                {\n                    "highlight_end": 22,\n                    "highlight_start": 5,\n                    "text": "    f.read(&mut buf);"\n                }\n            ]\n        }\n    ]\n}'
          },
          {
            path: 'Cargo.toml',
            start_line: 25,
            end_line: 25,
            annotation_level: 'failure',
            message: 'unused `std::result::Result` that must be used',
            raw_details:
              '{\n    "rendered": "warning: unused `std::result::Result` that must be used\\n  --> src/main.rs:25:5\\n   |\\n25 |     f.read(&mut buf);\\n   |     ^^^^^^^^^^^^^^^^^\\n   |\\n   = note: `#[warn(unused_must_use)]` on by default\\n   = note: this `Result` may be an `Err` variant, which should be handled\\n\\n",\n    "children": [\n        {\n            "children": [],\n            "code": null,\n            "level": "note",\n            "message": "`#[warn(unused_must_use)]` on by default",\n            "rendered": null,\n            "spans": []\n        },\n        {\n            "children": [],\n            "code": null,\n            "level": "note",\n            "message": "this `Result` may be an `Err` variant, which should be handled",\n            "rendered": null,\n            "spans": []\n        }\n    ],\n    "code": {\n        "code": "unused_must_use",\n        "explanation": null\n    },\n    "level": "warning",\n    "message": "unused `std::result::Result` that must be used",\n    "spans": [\n        {\n            "byte_end": 336,\n            "byte_start": 319,\n            "column_end": 22,\n            "column_start": 5,\n            "expansion": null,\n            "file_name": "src/main.rs",\n            "is_primary": true,\n            "label": null,\n            "line_end": 25,\n            "line_start": 25,\n            "suggested_replacement": null,\n            "suggestion_applicability": null,\n            "text": [\n                {\n                    "highlight_end": 22,\n                    "highlight_start": 5,\n                    "text": "    f.read(&mut buf);"\n                }\n            ]\n        }\n    ]\n}'
          },
          {
            path: 'Cargo.toml',
            start_line: 0,
            end_line: 0,
            annotation_level: 'failure',
            message: '6 warnings emitted',
            raw_details:
              '{\n    "rendered": "warning: 6 warnings emitted\\n\\n",\n    "children": [],\n    "code": null,\n    "level": "warning",\n    "message": "6 warnings emitted",\n    "spans": []\n}'
          },
          {
            path: 'Cargo.toml',
            start_line: 0,
            end_line: 0,
            annotation_level: 'failure',
            message: '6 warnings emitted',
            raw_details:
              '{\n    "rendered": "warning: 6 warnings emitted\\n\\n",\n    "children": [],\n    "code": null,\n    "level": "warning",\n    "message": "6 warnings emitted",\n    "spans": []\n}'
          }
        ]
      }
    })
  })
  it('converts buggy cargo check', () => {
    const result = cargoCheckCheck({
      data: {} as any,
      sha: '11963e3cb7ecbb9247f638cc0fb047173a62cf7a'
    })
    expect(result).toEqual({
      conclusion: 'skipped',
      completed_at: expect.any(String),
      head_sha: '11963e3cb7ecbb9247f638cc0fb047173a62cf7a',
      name: 'cargo check',
      status: 'completed',
      output: {
        title: 'Unexpected check output',
        summary: ''
      }
    })
  })
})
