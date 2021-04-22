import { CargoMessage } from '../cargo-types'

export const cargoClippyFailedOutput: CargoMessage[] = [
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
          children: [],
          code: null,
          level: 'note',
          message: '`#[warn(unused_imports)]` on by default',
          rendered: null,
          spans: []
        },
        {
          children: [],
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
          children: [],
          code: null,
          level: 'note',
          message: '`#[warn(unused_imports)]` on by default',
          rendered: null,
          spans: []
        },
        {
          children: [],
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
          children: [],
          code: null,
          level: 'note',
          message: '`#[warn(unused_variables)]` on by default',
          rendered: null,
          spans: []
        },
        {
          children: [],
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
          children: [],
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
          children: [],
          code: null,
          level: 'note',
          message: '`#[warn(unused_assignments)]` on by default',
          rendered: null,
          spans: []
        },
        {
          children: [],
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
          children: [],
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
        'warning: unused variable: `foo`\n  --> src/main.rs:15:11\n   |\n15 |       let foo = foo();\n   |           ^^^ help: if this is intentional, prefix it with an underscore: `_foo`\n   |\n   = note: `#[warn(unused_variables)]` on by default\n\n',
      children: [
        {
          children: [],
          code: null,
          level: 'note',
          message: '`#[warn(unused_variables)]` on by default',
          rendered: null,
          spans: []
        },
        {
          children: [],
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
          children: [],
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
          children: [],
          code: null,
          level: 'note',
          message: '`#[warn(unused_assignments)]` on by default',
          rendered: null,
          spans: []
        },
        {
          children: [],
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
          children: [],
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
        'error: this looks like you are trying to swap `foo` and `bar`\n  --> src/main.rs:32:5\n   |\n32 | /     foo = bar;\n33 | |     bar = foo;\n   | |_____________^ help: try: `std::mem::swap(&mut foo, &mut bar)`\n   |\n   = note: `#[deny(clippy::almost_swapped)]` on by default\n   = note: or maybe you should use `std::mem::replace`?\n   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#almost_swapped\n\n',
      children: [
        {
          children: [],
          code: null,
          level: 'note',
          message: '`#[deny(clippy::almost_swapped)]` on by default',
          rendered: null,
          spans: []
        },
        {
          children: [],
          code: null,
          level: 'note',
          message: 'or maybe you should use `std::mem::replace`?',
          rendered: null,
          spans: []
        },
        {
          children: [],
          code: null,
          level: 'help',
          message:
            'for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#almost_swapped',
          rendered: null,
          spans: []
        },
        {
          children: [],
          code: null,
          level: 'help',
          message: 'try',
          rendered: null,
          spans: [
            {
              byte_end: 411,
              byte_start: 387,
              column_end: 14,
              column_start: 5,
              expansion: null,
              file_name: 'src/main.rs',
              is_primary: true,
              label: null,
              line_end: 33,
              line_start: 32,
              suggested_replacement: 'std::mem::swap(&mut foo, &mut bar)',
              suggestion_applicability: 'MaybeIncorrect',
              text: [
                {
                  highlight_end: 15,
                  highlight_start: 5,
                  text: '    foo = bar;'
                },
                {
                  highlight_end: 14,
                  highlight_start: 1,
                  text: '    bar = foo;'
                }
              ]
            }
          ]
        }
      ],
      code: {
        code: 'clippy::almost_swapped',
        explanation: null
      },
      level: 'error',
      message: 'this looks like you are trying to swap `foo` and `bar`',
      spans: [
        {
          byte_end: 411,
          byte_start: 387,
          column_end: 14,
          column_start: 5,
          expansion: null,
          file_name: 'src/main.rs',
          is_primary: true,
          label: null,
          line_end: 33,
          line_start: 32,
          suggested_replacement: null,
          suggestion_applicability: null,
          text: [
            {
              highlight_end: 15,
              highlight_start: 5,
              text: '    foo = bar;'
            },
            {
              highlight_end: 14,
              highlight_start: 1,
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
        'warning: use of a blacklisted/placeholder name `foo`\n  --> src/main.rs:15:11\n   |\n15 |       let foo = foo();\n   |           ^^^\n   |\n   = note: `#[warn(clippy::blacklisted_name)]` on by default\n   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#blacklisted_name\n\n',
      children: [
        {
          children: [],
          code: null,
          level: 'note',
          message: '`#[warn(clippy::blacklisted_name)]` on by default',
          rendered: null,
          spans: []
        },
        {
          children: [],
          code: null,
          level: 'help',
          message:
            'for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#blacklisted_name',
          rendered: null,
          spans: []
        }
      ],
      code: {
        code: 'clippy::blacklisted_name',
        explanation: null
      },
      level: 'warning',
      message: 'use of a blacklisted/placeholder name `foo`',
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
        'warning: use of a blacklisted/placeholder name `foo`\n  --> src/main.rs:29:13\n   |\n29 |     let mut foo = 0;\n   |             ^^^\n   |\n   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#blacklisted_name\n\n',
      children: [
        {
          children: [],
          code: null,
          level: 'help',
          message:
            'for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#blacklisted_name',
          rendered: null,
          spans: []
        }
      ],
      code: {
        code: 'clippy::blacklisted_name',
        explanation: null
      },
      level: 'warning',
      message: 'use of a blacklisted/placeholder name `foo`',
      spans: [
        {
          byte_end: 355,
          byte_start: 352,
          column_end: 16,
          column_start: 13,
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
              highlight_start: 13,
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
        'warning: in an `if` condition, avoid complex blocks or closures with blocks; instead, move the block or closure higher and bind it with a `let`\n  --> src/main.rs:37:5\n   |\n37 |     if { let b = false; b } {}\n   |     ^^^^^^^^^^^^^^^^^^^^^^^ help: try: `let res = { let b = false; b }; if res`\n   |\n   = note: `#[warn(clippy::blocks_in_if_conditions)]` on by default\n   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#blocks_in_if_conditions\n\n',
      children: [
        {
          children: [],
          code: null,
          level: 'note',
          message: '`#[warn(clippy::blocks_in_if_conditions)]` on by default',
          rendered: null,
          spans: []
        },
        {
          children: [],
          code: null,
          level: 'help',
          message:
            'for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#blocks_in_if_conditions',
          rendered: null,
          spans: []
        },
        {
          children: [],
          code: null,
          level: 'help',
          message: 'try',
          rendered: null,
          spans: [
            {
              byte_end: 443,
              byte_start: 420,
              column_end: 28,
              column_start: 5,
              expansion: null,
              file_name: 'src/main.rs',
              is_primary: true,
              label: null,
              line_end: 37,
              line_start: 37,
              suggested_replacement: 'let res = { let b = false; b }; if res',
              suggestion_applicability: 'MachineApplicable',
              text: [
                {
                  highlight_end: 28,
                  highlight_start: 5,
                  text: '    if { let b = false; b } {}'
                }
              ]
            }
          ]
        }
      ],
      code: {
        code: 'clippy::blocks_in_if_conditions',
        explanation: null
      },
      level: 'warning',
      message:
        'in an `if` condition, avoid complex blocks or closures with blocks; instead, move the block or closure higher and bind it with a `let`',
      spans: [
        {
          byte_end: 443,
          byte_start: 420,
          column_end: 28,
          column_start: 5,
          expansion: null,
          file_name: 'src/main.rs',
          is_primary: true,
          label: null,
          line_end: 37,
          line_start: 37,
          suggested_replacement: null,
          suggestion_applicability: null,
          text: [
            {
              highlight_end: 28,
              highlight_start: 5,
              text: '    if { let b = false; b } {}'
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
        'warning: returning the result of a `let` binding from a block\n  --> src/main.rs:37:25\n   |\n37 |     if { let b = false; b } {}\n   |          -------------- ^\n   |          |\n   |          unnecessary `let` binding\n   |\n   = note: `#[warn(clippy::let_and_return)]` on by default\n   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#let_and_return\nhelp: return the expression directly\n   |\n37 |     if {  false } {}\n   |         --^^^^^\n\n',
      children: [
        {
          children: [],
          code: null,
          level: 'note',
          message: '`#[warn(clippy::let_and_return)]` on by default',
          rendered: null,
          spans: []
        },
        {
          children: [],
          code: null,
          level: 'help',
          message:
            'for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#let_and_return',
          rendered: null,
          spans: []
        },
        {
          children: [],
          code: null,
          level: 'help',
          message: 'return the expression directly',
          rendered: null,
          spans: [
            {
              byte_end: 439,
              byte_start: 425,
              column_end: 24,
              column_start: 10,
              expansion: null,
              file_name: 'src/main.rs',
              is_primary: true,
              label: null,
              line_end: 37,
              line_start: 37,
              suggested_replacement: '',
              suggestion_applicability: 'MachineApplicable',
              text: [
                {
                  highlight_end: 24,
                  highlight_start: 10,
                  text: '    if { let b = false; b } {}'
                }
              ]
            },
            {
              byte_end: 441,
              byte_start: 440,
              column_end: 26,
              column_start: 25,
              expansion: null,
              file_name: 'src/main.rs',
              is_primary: true,
              label: null,
              line_end: 37,
              line_start: 37,
              suggested_replacement: 'false',
              suggestion_applicability: 'MachineApplicable',
              text: [
                {
                  highlight_end: 26,
                  highlight_start: 25,
                  text: '    if { let b = false; b } {}'
                }
              ]
            }
          ]
        }
      ],
      code: {
        code: 'clippy::let_and_return',
        explanation: null
      },
      level: 'warning',
      message: 'returning the result of a `let` binding from a block',
      spans: [
        {
          byte_end: 439,
          byte_start: 425,
          column_end: 24,
          column_start: 10,
          expansion: null,
          file_name: 'src/main.rs',
          is_primary: false,
          label: 'unnecessary `let` binding',
          line_end: 37,
          line_start: 37,
          suggested_replacement: null,
          suggestion_applicability: null,
          text: [
            {
              highlight_end: 24,
              highlight_start: 10,
              text: '    if { let b = false; b } {}'
            }
          ]
        },
        {
          byte_end: 441,
          byte_start: 440,
          column_end: 26,
          column_start: 25,
          expansion: null,
          file_name: 'src/main.rs',
          is_primary: true,
          label: null,
          line_end: 37,
          line_start: 37,
          suggested_replacement: null,
          suggestion_applicability: null,
          text: [
            {
              highlight_end: 26,
              highlight_start: 25,
              text: '    if { let b = false; b } {}'
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
        'error: this looks like you are trying to swap `foo` and `bar`\n  --> src/main.rs:32:5\n   |\n32 | /     foo = bar;\n33 | |     bar = foo;\n   | |_____________^ help: try: `std::mem::swap(&mut foo, &mut bar)`\n   |\n   = note: `#[deny(clippy::almost_swapped)]` on by default\n   = note: or maybe you should use `std::mem::replace`?\n   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#almost_swapped\n\n',
      children: [
        {
          children: [],
          code: null,
          level: 'note',
          message: '`#[deny(clippy::almost_swapped)]` on by default',
          rendered: null,
          spans: []
        },
        {
          children: [],
          code: null,
          level: 'note',
          message: 'or maybe you should use `std::mem::replace`?',
          rendered: null,
          spans: []
        },
        {
          children: [],
          code: null,
          level: 'help',
          message:
            'for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#almost_swapped',
          rendered: null,
          spans: []
        },
        {
          children: [],
          code: null,
          level: 'help',
          message: 'try',
          rendered: null,
          spans: [
            {
              byte_end: 411,
              byte_start: 387,
              column_end: 14,
              column_start: 5,
              expansion: null,
              file_name: 'src/main.rs',
              is_primary: true,
              label: null,
              line_end: 33,
              line_start: 32,
              suggested_replacement: 'std::mem::swap(&mut foo, &mut bar)',
              suggestion_applicability: 'MaybeIncorrect',
              text: [
                {
                  highlight_end: 15,
                  highlight_start: 5,
                  text: '    foo = bar;'
                },
                {
                  highlight_end: 14,
                  highlight_start: 1,
                  text: '    bar = foo;'
                }
              ]
            }
          ]
        }
      ],
      code: {
        code: 'clippy::almost_swapped',
        explanation: null
      },
      level: 'error',
      message: 'this looks like you are trying to swap `foo` and `bar`',
      spans: [
        {
          byte_end: 411,
          byte_start: 387,
          column_end: 14,
          column_start: 5,
          expansion: null,
          file_name: 'src/main.rs',
          is_primary: true,
          label: null,
          line_end: 33,
          line_start: 32,
          suggested_replacement: null,
          suggestion_applicability: null,
          text: [
            {
              highlight_end: 15,
              highlight_start: 5,
              text: '    foo = bar;'
            },
            {
              highlight_end: 14,
              highlight_start: 1,
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
        'warning: use of a blacklisted/placeholder name `foo`\n  --> src/main.rs:15:11\n   |\n15 |       let foo = foo();\n   |           ^^^\n   |\n   = note: `#[warn(clippy::blacklisted_name)]` on by default\n   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#blacklisted_name\n\n',
      children: [
        {
          children: [],
          code: null,
          level: 'note',
          message: '`#[warn(clippy::blacklisted_name)]` on by default',
          rendered: null,
          spans: []
        },
        {
          children: [],
          code: null,
          level: 'help',
          message:
            'for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#blacklisted_name',
          rendered: null,
          spans: []
        }
      ],
      code: {
        code: 'clippy::blacklisted_name',
        explanation: null
      },
      level: 'warning',
      message: 'use of a blacklisted/placeholder name `foo`',
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
        'warning: use of a blacklisted/placeholder name `foo`\n  --> src/main.rs:29:13\n   |\n29 |     let mut foo = 0;\n   |             ^^^\n   |\n   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#blacklisted_name\n\n',
      children: [
        {
          children: [],
          code: null,
          level: 'help',
          message:
            'for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#blacklisted_name',
          rendered: null,
          spans: []
        }
      ],
      code: {
        code: 'clippy::blacklisted_name',
        explanation: null
      },
      level: 'warning',
      message: 'use of a blacklisted/placeholder name `foo`',
      spans: [
        {
          byte_end: 355,
          byte_start: 352,
          column_end: 16,
          column_start: 13,
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
              highlight_start: 13,
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
        'warning: in an `if` condition, avoid complex blocks or closures with blocks; instead, move the block or closure higher and bind it with a `let`\n  --> src/main.rs:37:5\n   |\n37 |     if { let b = false; b } {}\n   |     ^^^^^^^^^^^^^^^^^^^^^^^ help: try: `let res = { let b = false; b }; if res`\n   |\n   = note: `#[warn(clippy::blocks_in_if_conditions)]` on by default\n   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#blocks_in_if_conditions\n\n',
      children: [
        {
          children: [],
          code: null,
          level: 'note',
          message: '`#[warn(clippy::blocks_in_if_conditions)]` on by default',
          rendered: null,
          spans: []
        },
        {
          children: [],
          code: null,
          level: 'help',
          message:
            'for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#blocks_in_if_conditions',
          rendered: null,
          spans: []
        },
        {
          children: [],
          code: null,
          level: 'help',
          message: 'try',
          rendered: null,
          spans: [
            {
              byte_end: 443,
              byte_start: 420,
              column_end: 28,
              column_start: 5,
              expansion: null,
              file_name: 'src/main.rs',
              is_primary: true,
              label: null,
              line_end: 37,
              line_start: 37,
              suggested_replacement: 'let res = { let b = false; b }; if res',
              suggestion_applicability: 'MachineApplicable',
              text: [
                {
                  highlight_end: 28,
                  highlight_start: 5,
                  text: '    if { let b = false; b } {}'
                }
              ]
            }
          ]
        }
      ],
      code: {
        code: 'clippy::blocks_in_if_conditions',
        explanation: null
      },
      level: 'warning',
      message:
        'in an `if` condition, avoid complex blocks or closures with blocks; instead, move the block or closure higher and bind it with a `let`',
      spans: [
        {
          byte_end: 443,
          byte_start: 420,
          column_end: 28,
          column_start: 5,
          expansion: null,
          file_name: 'src/main.rs',
          is_primary: true,
          label: null,
          line_end: 37,
          line_start: 37,
          suggested_replacement: null,
          suggestion_applicability: null,
          text: [
            {
              highlight_end: 28,
              highlight_start: 5,
              text: '    if { let b = false; b } {}'
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
        'warning: returning the result of a `let` binding from a block\n  --> src/main.rs:37:25\n   |\n37 |     if { let b = false; b } {}\n   |          -------------- ^\n   |          |\n   |          unnecessary `let` binding\n   |\n   = note: `#[warn(clippy::let_and_return)]` on by default\n   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#let_and_return\nhelp: return the expression directly\n   |\n37 |     if {  false } {}\n   |         --^^^^^\n\n',
      children: [
        {
          children: [],
          code: null,
          level: 'note',
          message: '`#[warn(clippy::let_and_return)]` on by default',
          rendered: null,
          spans: []
        },
        {
          children: [],
          code: null,
          level: 'help',
          message:
            'for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#let_and_return',
          rendered: null,
          spans: []
        },
        {
          children: [],
          code: null,
          level: 'help',
          message: 'return the expression directly',
          rendered: null,
          spans: [
            {
              byte_end: 439,
              byte_start: 425,
              column_end: 24,
              column_start: 10,
              expansion: null,
              file_name: 'src/main.rs',
              is_primary: true,
              label: null,
              line_end: 37,
              line_start: 37,
              suggested_replacement: '',
              suggestion_applicability: 'MachineApplicable',
              text: [
                {
                  highlight_end: 24,
                  highlight_start: 10,
                  text: '    if { let b = false; b } {}'
                }
              ]
            },
            {
              byte_end: 441,
              byte_start: 440,
              column_end: 26,
              column_start: 25,
              expansion: null,
              file_name: 'src/main.rs',
              is_primary: true,
              label: null,
              line_end: 37,
              line_start: 37,
              suggested_replacement: 'false',
              suggestion_applicability: 'MachineApplicable',
              text: [
                {
                  highlight_end: 26,
                  highlight_start: 25,
                  text: '    if { let b = false; b } {}'
                }
              ]
            }
          ]
        }
      ],
      code: {
        code: 'clippy::let_and_return',
        explanation: null
      },
      level: 'warning',
      message: 'returning the result of a `let` binding from a block',
      spans: [
        {
          byte_end: 439,
          byte_start: 425,
          column_end: 24,
          column_start: 10,
          expansion: null,
          file_name: 'src/main.rs',
          is_primary: false,
          label: 'unnecessary `let` binding',
          line_end: 37,
          line_start: 37,
          suggested_replacement: null,
          suggestion_applicability: null,
          text: [
            {
              highlight_end: 24,
              highlight_start: 10,
              text: '    if { let b = false; b } {}'
            }
          ]
        },
        {
          byte_end: 441,
          byte_start: 440,
          column_end: 26,
          column_start: 25,
          expansion: null,
          file_name: 'src/main.rs',
          is_primary: true,
          label: null,
          line_end: 37,
          line_start: 37,
          suggested_replacement: null,
          suggestion_applicability: null,
          text: [
            {
              highlight_end: 26,
              highlight_start: 25,
              text: '    if { let b = false; b } {}'
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
          children: [],
          code: null,
          level: 'note',
          message: '`#[warn(unused_must_use)]` on by default',
          rendered: null,
          spans: []
        },
        {
          children: [],
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
      rendered: 'error: aborting due to previous error; 10 warnings emitted\n\n',
      children: [],
      code: null,
      level: 'error',
      message: 'aborting due to previous error; 10 warnings emitted',
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
      rendered:
        'warning: `assert!(true)` will be optimized out by the compiler\n  --> src/main.rs:51:9\n   |\n51 |         assert!(true);\n   |         ^^^^^^^^^^^^^^\n   |\n   = note: `#[warn(clippy::assertions_on_constants)]` on by default\n   = help: remove it\n   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#assertions_on_constants\n   = note: this warning originates in a macro (in Nightly builds, run with -Z macro-backtrace for more info)\n\n',
      children: [
        {
          children: [],
          code: null,
          level: 'note',
          message: '`#[warn(clippy::assertions_on_constants)]` on by default',
          rendered: null,
          spans: []
        },
        {
          children: [],
          code: null,
          level: 'help',
          message: 'remove it',
          rendered: null,
          spans: []
        },
        {
          children: [],
          code: null,
          level: 'help',
          message:
            'for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#assertions_on_constants',
          rendered: null,
          spans: []
        }
      ],
      code: {
        code: 'clippy::assertions_on_constants',
        explanation: null
      },
      level: 'warning',
      message: '`assert!(true)` will be optimized out by the compiler',
      spans: [
        {
          byte_end: 603,
          byte_start: 589,
          column_end: 23,
          column_start: 9,
          expansion: {
            def_site_span: {
              byte_end: 41339,
              byte_start: 41183,
              column_end: 6,
              column_start: 5,
              expansion: null,
              file_name:
                '/home/user/.rustup/toolchains/1.49.0-x86_64-unknown-linux-gnu/lib/rustlib/src/rust/library/core/src/macros/mod.rs',
              is_primary: false,
              label: null,
              line_end: 1221,
              line_start: 1218,
              suggested_replacement: null,
              suggestion_applicability: null,
              text: [
                {
                  highlight_end: 1,
                  highlight_start: 5,
                  text: '    macro_rules! assert {'
                },
                {
                  highlight_end: 1,
                  highlight_start: 1,
                  text: '        ($cond:expr $(,)?) => {{ /* compiler built-in */ }};'
                },
                {
                  highlight_end: 1,
                  highlight_start: 1,
                  text: '        ($cond:expr, $($arg:tt)+) => {{ /* compiler built-in */ }};'
                },
                {
                  highlight_end: 6,
                  highlight_start: 1,
                  text: '    }'
                }
              ]
            },
            macro_decl_name: 'assert!',
            span: {
              byte_end: 603,
              byte_start: 589,
              column_end: 23,
              column_start: 9,
              expansion: null,
              file_name: 'src/main.rs',
              is_primary: false,
              label: null,
              line_end: 51,
              line_start: 51,
              suggested_replacement: null,
              suggestion_applicability: null,
              text: [
                {
                  highlight_end: 23,
                  highlight_start: 9,
                  text: '        assert!(true);'
                }
              ]
            }
          },
          file_name: 'src/main.rs',
          is_primary: true,
          label: null,
          line_end: 51,
          line_start: 51,
          suggested_replacement: null,
          suggestion_applicability: null,
          text: [
            {
              highlight_end: 23,
              highlight_start: 9,
              text: '        assert!(true);'
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
        'warning: `assert!(false)` should probably be replaced\n  --> src/main.rs:56:5\n   |\n56 |     assert!(false);\n   |     ^^^^^^^^^^^^^^^\n   |\n   = help: use `panic!()` or `unreachable!()`\n   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#assertions_on_constants\n   = note: this warning originates in a macro (in Nightly builds, run with -Z macro-backtrace for more info)\n\n',
      children: [
        {
          children: [],
          code: null,
          level: 'help',
          message: 'use `panic!()` or `unreachable!()`',
          rendered: null,
          spans: []
        },
        {
          children: [],
          code: null,
          level: 'help',
          message:
            'for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#assertions_on_constants',
          rendered: null,
          spans: []
        }
      ],
      code: {
        code: 'clippy::assertions_on_constants',
        explanation: null
      },
      level: 'warning',
      message: '`assert!(false)` should probably be replaced',
      spans: [
        {
          byte_end: 660,
          byte_start: 645,
          column_end: 20,
          column_start: 5,
          expansion: {
            def_site_span: {
              byte_end: 41339,
              byte_start: 41183,
              column_end: 6,
              column_start: 5,
              expansion: null,
              file_name:
                '/home/user/.rustup/toolchains/1.49.0-x86_64-unknown-linux-gnu/lib/rustlib/src/rust/library/core/src/macros/mod.rs',
              is_primary: false,
              label: null,
              line_end: 1221,
              line_start: 1218,
              suggested_replacement: null,
              suggestion_applicability: null,
              text: [
                {
                  highlight_end: 26,
                  highlight_start: 5,
                  text: '    macro_rules! assert {'
                },
                {
                  highlight_end: 61,
                  highlight_start: 1,
                  text: '        ($cond:expr $(,)?) => {{ /* compiler built-in */ }};'
                },
                {
                  highlight_end: 68,
                  highlight_start: 1,
                  text: '        ($cond:expr, $($arg:tt)+) => {{ /* compiler built-in */ }};'
                },
                {
                  highlight_end: 6,
                  highlight_start: 1,
                  text: '    }'
                }
              ]
            },
            macro_decl_name: 'assert!',
            span: {
              byte_end: 660,
              byte_start: 645,
              column_end: 20,
              column_start: 5,
              expansion: null,
              file_name: 'src/main.rs',
              is_primary: false,
              label: null,
              line_end: 56,
              line_start: 56,
              suggested_replacement: null,
              suggestion_applicability: null,
              text: [
                {
                  highlight_end: 20,
                  highlight_start: 5,
                  text: '    assert!(false);'
                }
              ]
            }
          },
          file_name: 'src/main.rs',
          is_primary: true,
          label: null,
          line_end: 56,
          line_start: 56,
          suggested_replacement: null,
          suggestion_applicability: null,
          text: [
            {
              highlight_end: 20,
              highlight_start: 5,
              text: '    assert!(false);'
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
          children: [],
          code: null,
          level: 'note',
          message: '`#[warn(unused_must_use)]` on by default',
          rendered: null,
          spans: []
        },
        {
          children: [],
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
      rendered: 'error: aborting due to previous error; 12 warnings emitted\n\n',
      children: [],
      code: null,
      level: 'error',
      message: 'aborting due to previous error; 12 warnings emitted',
      spans: []
    }
  },
  {
    reason: 'build-finished',
    success: false
  }
]
