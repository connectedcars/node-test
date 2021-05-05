import { CargoMessage } from '../cargo-types'

export const cargoCheckFailedOutput: CargoMessage[] = [
  {
    reason: 'compiler-message',
    package_id: 'checks-test 0.1.0 (path+file:///checks-test)',
    target: {
      kind: ['bin'],
      crate_types: ['bin'],
      name: 'checks-test',
      src_path: '/checks-test/src/main.rs',
      edition: '2018',
      doctest: false,
      test: true
    },
    message: {
      rendered:
        'warning: unused import: `std::io::BufReader`\n --> src/main.rs:3:5\n  |\n3 | use std::io::BufReader;\n  |     ^^^^^^^^^^^^^^^^^^\n  |\n  = note: `#[warn(unused_imports)]` on by default\n\n',
      children: [
        {
          code: null,
          level: 'note',
          message: '`#[warn(unused_imports)]` on by default',
          rendered: null,
          spans: []
        },
        {
          code: null,
          level: 'help',
          message: 'remove the whole `use` item',
          rendered: null,
          spans: [
            {
              byte_end: 52,
              byte_start: 29,
              column_end: 24,
              column_start: 1,
              expansion: null,
              file_name: 'src/main.rs',
              is_primary: true,
              label: null,
              line_end: 3,
              line_start: 3,
              suggested_replacement: '',
              suggestion_applicability: 'MachineApplicable',
              text: [
                {
                  highlight_end: 24,
                  highlight_start: 1,
                  text: 'use std::io::BufReader;'
                }
              ]
            }
          ]
        }
      ],
      code: {
        code: 'unused_imports',
        explanation: null
      },
      level: 'warning',
      message: 'unused import: `std::io::BufReader`',
      spans: [
        {
          byte_end: 51,
          byte_start: 33,
          column_end: 23,
          column_start: 5,
          expansion: null,
          file_name: 'src/main.rs',
          is_primary: true,
          label: null,
          line_end: 3,
          line_start: 3,
          suggested_replacement: null,
          suggestion_applicability: null,
          text: [
            {
              highlight_end: 23,
              highlight_start: 5,
              text: 'use std::io::BufReader;'
            }
          ]
        }
      ]
    }
  },
  {
    reason: 'compiler-message',
    package_id: 'checks-test 0.1.0 (path+file:///checks-test)',
    target: {
      kind: ['bin'],
      crate_types: ['bin'],
      name: 'checks-test',
      src_path: '/checks-test/src/main.rs',
      edition: '2018',
      doctest: false,
      test: true
    },
    message: {
      rendered:
        'warning: unused import: `std::io::BufReader`\n --> src/main.rs:3:5\n  |\n3 | use std::io::BufReader;\n  |     ^^^^^^^^^^^^^^^^^^\n  |\n  = note: `#[warn(unused_imports)]` on by default\n\n',
      children: [
        {
          code: null,
          level: 'note',
          message: '`#[warn(unused_imports)]` on by default',
          rendered: null,
          spans: []
        },
        {
          code: null,
          level: 'help',
          message: 'remove the whole `use` item',
          rendered: null,
          spans: [
            {
              byte_end: 52,
              byte_start: 29,
              column_end: 24,
              column_start: 1,
              expansion: null,
              file_name: 'src/main.rs',
              is_primary: true,
              label: null,
              line_end: 3,
              line_start: 3,
              suggested_replacement: '',
              suggestion_applicability: 'MachineApplicable',
              text: [
                {
                  highlight_end: 24,
                  highlight_start: 1,
                  text: 'use std::io::BufReader;'
                }
              ]
            }
          ]
        }
      ],
      code: {
        code: 'unused_imports',
        explanation: null
      },
      level: 'warning',
      message: 'unused import: `std::io::BufReader`',
      spans: [
        {
          byte_end: 51,
          byte_start: 33,
          column_end: 23,
          column_start: 5,
          expansion: null,
          file_name: 'src/main.rs',
          is_primary: true,
          label: null,
          line_end: 3,
          line_start: 3,
          suggested_replacement: null,
          suggestion_applicability: null,
          text: [
            {
              highlight_end: 23,
              highlight_start: 5,
              text: 'use std::io::BufReader;'
            }
          ]
        }
      ]
    }
  },
  {
    reason: 'compiler-message',
    package_id: 'checks-test 0.1.0 (path+file:///checks-test)',
    target: {
      kind: ['bin'],
      crate_types: ['bin'],
      name: 'checks-test',
      src_path: '/checks-test/src/main.rs',
      edition: '2018',
      doctest: false,
      test: true
    },
    message: {
      rendered:
        'warning: unused variable: `foo`\n  --> src/main.rs:15:11\n   |\n15 |       let foo = foo();\n   |           ^^^ help: if this is intentional, prefix it with an underscore: `_foo`\n   |\n   = note: `#[warn(unused_variables)]` on by default\n\n',
      children: [
        {
          code: null,
          level: 'note',
          message: '`#[warn(unused_variables)]` on by default',
          rendered: null,
          spans: []
        },
        {
          code: null,
          level: 'help',
          message: 'if this is intentional, prefix it with an underscore',
          rendered: null,
          spans: [
            {
              byte_end: 160,
              byte_start: 157,
              column_end: 14,
              column_start: 11,
              expansion: null,
              file_name: 'src/main.rs',
              is_primary: true,
              label: null,
              line_end: 15,
              line_start: 15,
              suggested_replacement: '_foo',
              suggestion_applicability: 'MachineApplicable',
              text: [
                {
                  highlight_end: 14,
                  highlight_start: 11,
                  text: '      let foo = foo();'
                }
              ]
            }
          ]
        }
      ],
      code: {
        code: 'unused_variables',
        explanation: null
      },
      level: 'warning',
      message: 'unused variable: `foo`',
      spans: [
        {
          byte_end: 160,
          byte_start: 157,
          column_end: 14,
          column_start: 11,
          expansion: null,
          file_name: 'src/main.rs',
          is_primary: true,
          label: null,
          line_end: 15,
          line_start: 15,
          suggested_replacement: null,
          suggestion_applicability: null,
          text: [
            {
              highlight_end: 14,
              highlight_start: 11,
              text: '      let foo = foo();'
            }
          ]
        }
      ]
    }
  },
  {
    reason: 'compiler-message',
    package_id: 'checks-test 0.1.0 (path+file:///checks-test)',
    target: {
      kind: ['bin'],
      crate_types: ['bin'],
      name: 'checks-test',
      src_path: '/checks-test/src/main.rs',
      edition: '2018',
      doctest: false,
      test: true
    },
    message: {
      rendered:
        'warning: unused variable: `foo`\n  --> src/main.rs:15:11\n   |\n15 |       let foo = foo();\n   |           ^^^ help: if this is intentional, prefix it with an underscore: `_foo`\n   |\n   = note: `#[warn(unused_variables)]` on by default\n\n',
      children: [
        {
          code: null,
          level: 'note',
          message: '`#[warn(unused_variables)]` on by default',
          rendered: null,
          spans: []
        },
        {
          code: null,
          level: 'help',
          message: 'if this is intentional, prefix it with an underscore',
          rendered: null,
          spans: [
            {
              byte_end: 160,
              byte_start: 157,
              column_end: 14,
              column_start: 11,
              expansion: null,
              file_name: 'src/main.rs',
              is_primary: true,
              label: null,
              line_end: 15,
              line_start: 15,
              suggested_replacement: '_foo',
              suggestion_applicability: 'MachineApplicable',
              text: [
                {
                  highlight_end: 14,
                  highlight_start: 11,
                  text: '      let foo = foo();'
                }
              ]
            }
          ]
        }
      ],
      code: {
        code: 'unused_variables',
        explanation: null
      },
      level: 'warning',
      message: 'unused variable: `foo`',
      spans: [
        {
          byte_end: 160,
          byte_start: 157,
          column_end: 14,
          column_start: 11,
          expansion: null,
          file_name: 'src/main.rs',
          is_primary: true,
          label: null,
          line_end: 15,
          line_start: 15,
          suggested_replacement: null,
          suggestion_applicability: null,
          text: [
            {
              highlight_end: 14,
              highlight_start: 11,
              text: '      let foo = foo();'
            }
          ]
        }
      ]
    }
  },
  {
    reason: 'compiler-message',
    package_id: 'checks-test 0.1.0 (path+file:///checks-test)',
    target: {
      kind: ['bin'],
      crate_types: ['bin'],
      name: 'checks-test',
      src_path: '/checks-test/src/main.rs',
      edition: '2018',
      doctest: false,
      test: true
    },
    message: {
      rendered:
        'warning: unused variable: `f`\n  --> src/main.rs:20:9\n   |\n20 |     let f = File::open("foo.txt");\n   |         ^ help: if this is intentional, prefix it with an underscore: `_f`\n\n',
      children: [
        {
          code: null,
          level: 'help',
          message: 'if this is intentional, prefix it with an underscore',
          rendered: null,
          spans: [
            {
              byte_end: 213,
              byte_start: 212,
              column_end: 10,
              column_start: 9,
              expansion: null,
              file_name: 'src/main.rs',
              is_primary: true,
              label: null,
              line_end: 20,
              line_start: 20,
              suggested_replacement: '_f',
              suggestion_applicability: 'MachineApplicable',
              text: [
                {
                  highlight_end: 10,
                  highlight_start: 9,
                  text: '    let f = File::open("foo.txt");'
                }
              ]
            }
          ]
        }
      ],
      code: {
        code: 'unused_variables',
        explanation: null
      },
      level: 'warning',
      message: 'unused variable: `f`',
      spans: [
        {
          byte_end: 213,
          byte_start: 212,
          column_end: 10,
          column_start: 9,
          expansion: null,
          file_name: 'src/main.rs',
          is_primary: true,
          label: null,
          line_end: 20,
          line_start: 20,
          suggested_replacement: null,
          suggestion_applicability: null,
          text: [
            {
              highlight_end: 10,
              highlight_start: 9,
              text: '    let f = File::open("foo.txt");'
            }
          ]
        }
      ]
    }
  },
  {
    reason: 'compiler-message',
    package_id: 'checks-test 0.1.0 (path+file:///checks-test)',
    target: {
      kind: ['bin'],
      crate_types: ['bin'],
      name: 'checks-test',
      src_path: '/checks-test/src/main.rs',
      edition: '2018',
      doctest: false,
      test: true
    },
    message: {
      rendered:
        'warning: unused variable: `f`\n  --> src/main.rs:20:9\n   |\n20 |     let f = File::open("foo.txt");\n   |         ^ help: if this is intentional, prefix it with an underscore: `_f`\n\n',
      children: [
        {
          code: null,
          level: 'help',
          message: 'if this is intentional, prefix it with an underscore',
          rendered: null,
          spans: [
            {
              byte_end: 213,
              byte_start: 212,
              column_end: 10,
              column_start: 9,
              expansion: null,
              file_name: 'src/main.rs',
              is_primary: true,
              label: null,
              line_end: 20,
              line_start: 20,
              suggested_replacement: '_f',
              suggestion_applicability: 'MachineApplicable',
              text: [
                {
                  highlight_end: 10,
                  highlight_start: 9,
                  text: '    let f = File::open("foo.txt");'
                }
              ]
            }
          ]
        }
      ],
      code: {
        code: 'unused_variables',
        explanation: null
      },
      level: 'warning',
      message: 'unused variable: `f`',
      spans: [
        {
          byte_end: 213,
          byte_start: 212,
          column_end: 10,
          column_start: 9,
          expansion: null,
          file_name: 'src/main.rs',
          is_primary: true,
          label: null,
          line_end: 20,
          line_start: 20,
          suggested_replacement: null,
          suggestion_applicability: null,
          text: [
            {
              highlight_end: 10,
              highlight_start: 9,
              text: '    let f = File::open("foo.txt");'
            }
          ]
        }
      ]
    }
  },
  {
    reason: 'compiler-message',
    package_id: 'checks-test 0.1.0 (path+file:///checks-test)',
    target: {
      kind: ['bin'],
      crate_types: ['bin'],
      name: 'checks-test',
      src_path: '/checks-test/src/main.rs',
      edition: '2018',
      doctest: false,
      test: true
    },
    message: {
      rendered:
        'warning: value assigned to `foo` is never read\n  --> src/main.rs:29:9\n   |\n29 |     let mut foo = 0;\n   |         ^^^^^^^\n   |\n   = note: `#[warn(unused_assignments)]` on by default\n   = help: maybe it is overwritten before being read?\n\n',
      children: [
        {
          code: null,
          level: 'note',
          message: '`#[warn(unused_assignments)]` on by default',
          rendered: null,
          spans: []
        },
        {
          code: null,
          level: 'help',
          message: 'maybe it is overwritten before being read?',
          rendered: null,
          spans: []
        }
      ],
      code: {
        code: 'unused_assignments',
        explanation: null
      },
      level: 'warning',
      message: 'value assigned to `foo` is never read',
      spans: [
        {
          byte_end: 355,
          byte_start: 348,
          column_end: 16,
          column_start: 9,
          expansion: null,
          file_name: 'src/main.rs',
          is_primary: true,
          label: null,
          line_end: 29,
          line_start: 29,
          suggested_replacement: null,
          suggestion_applicability: null,
          text: [
            {
              highlight_end: 16,
              highlight_start: 9,
              text: '    let mut foo = 0;'
            }
          ]
        }
      ]
    }
  },
  {
    reason: 'compiler-message',
    package_id: 'checks-test 0.1.0 (path+file:///checks-test)',
    target: {
      kind: ['bin'],
      crate_types: ['bin'],
      name: 'checks-test',
      src_path: '/checks-test/src/main.rs',
      edition: '2018',
      doctest: false,
      test: true
    },
    message: {
      rendered:
        'warning: value assigned to `foo` is never read\n  --> src/main.rs:29:9\n   |\n29 |     let mut foo = 0;\n   |         ^^^^^^^\n   |\n   = note: `#[warn(unused_assignments)]` on by default\n   = help: maybe it is overwritten before being read?\n\n',
      children: [
        {
          code: null,
          level: 'note',
          message: '`#[warn(unused_assignments)]` on by default',
          rendered: null,
          spans: []
        },
        {
          code: null,
          level: 'help',
          message: 'maybe it is overwritten before being read?',
          rendered: null,
          spans: []
        }
      ],
      code: {
        code: 'unused_assignments',
        explanation: null
      },
      level: 'warning',
      message: 'value assigned to `foo` is never read',
      spans: [
        {
          byte_end: 355,
          byte_start: 348,
          column_end: 16,
          column_start: 9,
          expansion: null,
          file_name: 'src/main.rs',
          is_primary: true,
          label: null,
          line_end: 29,
          line_start: 29,
          suggested_replacement: null,
          suggestion_applicability: null,
          text: [
            {
              highlight_end: 16,
              highlight_start: 9,
              text: '    let mut foo = 0;'
            }
          ]
        }
      ]
    }
  },
  {
    reason: 'compiler-message',
    package_id: 'checks-test 0.1.0 (path+file:///checks-test)',
    target: {
      kind: ['bin'],
      crate_types: ['bin'],
      name: 'checks-test',
      src_path: '/checks-test/src/main.rs',
      edition: '2018',
      doctest: false,
      test: true
    },
    message: {
      rendered:
        'warning: value assigned to `bar` is never read\n  --> src/main.rs:33:5\n   |\n33 |     bar = foo;\n   |     ^^^\n   |\n   = help: maybe it is overwritten before being read?\n\n',
      children: [
        {
          code: null,
          level: 'help',
          message: 'maybe it is overwritten before being read?',
          rendered: null,
          spans: []
        }
      ],
      code: {
        code: 'unused_assignments',
        explanation: null
      },
      level: 'warning',
      message: 'value assigned to `bar` is never read',
      spans: [
        {
          byte_end: 405,
          byte_start: 402,
          column_end: 8,
          column_start: 5,
          expansion: null,
          file_name: 'src/main.rs',
          is_primary: true,
          label: null,
          line_end: 33,
          line_start: 33,
          suggested_replacement: null,
          suggestion_applicability: null,
          text: [
            {
              highlight_end: 8,
              highlight_start: 5,
              text: '    bar = foo;'
            }
          ]
        }
      ]
    }
  },
  {
    reason: 'compiler-message',
    package_id: 'checks-test 0.1.0 (path+file:///checks-test)',
    target: {
      kind: ['bin'],
      crate_types: ['bin'],
      name: 'checks-test',
      src_path: '/checks-test/src/main.rs',
      edition: '2018',
      doctest: false,
      test: true
    },
    message: {
      rendered:
        'warning: value assigned to `bar` is never read\n  --> src/main.rs:33:5\n   |\n33 |     bar = foo;\n   |     ^^^\n   |\n   = help: maybe it is overwritten before being read?\n\n',
      children: [
        {
          code: null,
          level: 'help',
          message: 'maybe it is overwritten before being read?',
          rendered: null,
          spans: []
        }
      ],
      code: {
        code: 'unused_assignments',
        explanation: null
      },
      level: 'warning',
      message: 'value assigned to `bar` is never read',
      spans: [
        {
          byte_end: 405,
          byte_start: 402,
          column_end: 8,
          column_start: 5,
          expansion: null,
          file_name: 'src/main.rs',
          is_primary: true,
          label: null,
          line_end: 33,
          line_start: 33,
          suggested_replacement: null,
          suggestion_applicability: null,
          text: [
            {
              highlight_end: 8,
              highlight_start: 5,
              text: '    bar = foo;'
            }
          ]
        }
      ]
    }
  },
  {
    reason: 'compiler-message',
    package_id: 'checks-test 0.1.0 (path+file:///checks-test)',
    target: {
      kind: ['bin'],
      crate_types: ['bin'],
      name: 'checks-test',
      src_path: '/checks-test/src/main.rs',
      edition: '2018',
      doctest: false,
      test: true
    },
    message: {
      rendered:
        'warning: unused `std::result::Result` that must be used\n  --> src/main.rs:25:5\n   |\n25 |     f.read(&mut buf);\n   |     ^^^^^^^^^^^^^^^^^\n   |\n   = note: `#[warn(unused_must_use)]` on by default\n   = note: this `Result` may be an `Err` variant, which should be handled\n\n',
      children: [
        {
          code: null,
          level: 'note',
          message: '`#[warn(unused_must_use)]` on by default',
          rendered: null,
          spans: []
        },
        {
          code: null,
          level: 'note',
          message: 'this `Result` may be an `Err` variant, which should be handled',
          rendered: null,
          spans: []
        }
      ],
      code: {
        code: 'unused_must_use',
        explanation: null
      },
      level: 'warning',
      message: 'unused `std::result::Result` that must be used',
      spans: [
        {
          byte_end: 336,
          byte_start: 319,
          column_end: 22,
          column_start: 5,
          expansion: null,
          file_name: 'src/main.rs',
          is_primary: true,
          label: null,
          line_end: 25,
          line_start: 25,
          suggested_replacement: null,
          suggestion_applicability: null,
          text: [
            {
              highlight_end: 22,
              highlight_start: 5,
              text: '    f.read(&mut buf);'
            }
          ]
        }
      ]
    }
  },
  {
    reason: 'compiler-message',
    package_id: 'checks-test 0.1.0 (path+file:///checks-test)',
    target: {
      kind: ['bin'],
      crate_types: ['bin'],
      name: 'checks-test',
      src_path: '/checks-test/src/main.rs',
      edition: '2018',
      doctest: false,
      test: true
    },
    message: {
      rendered:
        'warning: unused `std::result::Result` that must be used\n  --> src/main.rs:25:5\n   |\n25 |     f.read(&mut buf);\n   |     ^^^^^^^^^^^^^^^^^\n   |\n   = note: `#[warn(unused_must_use)]` on by default\n   = note: this `Result` may be an `Err` variant, which should be handled\n\n',
      children: [
        {
          code: null,
          level: 'note',
          message: '`#[warn(unused_must_use)]` on by default',
          rendered: null,
          spans: []
        },
        {
          code: null,
          level: 'note',
          message: 'this `Result` may be an `Err` variant, which should be handled',
          rendered: null,
          spans: []
        }
      ],
      code: {
        code: 'unused_must_use',
        explanation: null
      },
      level: 'warning',
      message: 'unused `std::result::Result` that must be used',
      spans: [
        {
          byte_end: 336,
          byte_start: 319,
          column_end: 22,
          column_start: 5,
          expansion: null,
          file_name: 'src/main.rs',
          is_primary: true,
          label: null,
          line_end: 25,
          line_start: 25,
          suggested_replacement: null,
          suggestion_applicability: null,
          text: [
            {
              highlight_end: 22,
              highlight_start: 5,
              text: '    f.read(&mut buf);'
            }
          ]
        }
      ]
    }
  },
  {
    reason: 'compiler-message',
    package_id: 'checks-test 0.1.0 (path+file:///checks-test)',
    target: {
      kind: ['bin'],
      crate_types: ['bin'],
      name: 'checks-test',
      src_path: '/checks-test/src/main.rs',
      edition: '2018',
      doctest: false,
      test: true
    },
    message: {
      rendered: 'warning: 6 warnings emitted\n\n',
      children: [],
      code: null,
      level: 'warning',
      message: '6 warnings emitted',
      spans: []
    }
  },
  {
    reason: 'compiler-message',
    package_id: 'checks-test 0.1.0 (path+file:///checks-test)',
    target: {
      kind: ['bin'],
      crate_types: ['bin'],
      name: 'checks-test',
      src_path: '/checks-test/src/main.rs',
      edition: '2018',
      doctest: false,
      test: true
    },
    message: {
      rendered: 'warning: 6 warnings emitted\n\n',
      children: [],
      code: null,
      level: 'warning',
      message: '6 warnings emitted',
      spans: []
    }
  },
  {
    reason: 'compiler-artifact',
    package_id: 'checks-test 0.1.0 (path+file:///checks-test)',
    target: {
      kind: ['bin'],
      crate_types: ['bin'],
      name: 'checks-test',
      src_path: '/checks-test/src/main.rs',
      edition: '2018',
      doctest: false,
      test: true
    },
    profile: {
      opt_level: '0',
      debuginfo: 2,
      debug_assertions: true,
      overflow_checks: true,
      test: false
    },
    features: [],
    filenames: ['/checks-test/target/debug/deps/libcheck_test-3e8dea89f4957cbe.rmeta'],
    executable: null,
    fresh: false
  },
  {
    reason: 'compiler-artifact',
    package_id: 'checks-test 0.1.0 (path+file:///checks-test)',
    target: {
      kind: ['bin'],
      crate_types: ['bin'],
      name: 'checks-test',
      src_path: '/checks-test/src/main.rs',
      edition: '2018',
      doctest: false,
      test: true
    },
    profile: {
      opt_level: '0',
      debuginfo: 2,
      debug_assertions: true,
      overflow_checks: true,
      test: true
    },
    features: [],
    filenames: ['/checks-test/target/debug/deps/libcheck_test-b71ac6c54ee2a77f.rmeta'],
    executable: null,
    fresh: false
  },
  {
    reason: 'build-finished',
    success: true
  }
]
