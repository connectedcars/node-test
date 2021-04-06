import { CargoMessage } from '../cargo-types'

export const cargoClippyFailedOutput: CargoMessage[] = [
  {
    reason: 'compiler-message',
    package_id: 'can 0.1.0 (path+file:///app/can)',
    target: {
      kind: ['lib'],
      crate_types: ['lib'],
      name: 'can',
      src_path: '/app/can/src/lib.rs',
      edition: '2018',
      doctest: true
    },
    message: {
      rendered:
        'error: this comparison involving the minimum or maximum element for this type contains a case that is always true or always false\n   --> can/src/can_session.rs:391:12\n    |\n391 |         if 100 > i32::MAX {}\n    |            ^^^^^^^^^^^^^^\n    |\n    = note: `-D clippy::absurd-extreme-comparisons` implied by `-D clippy::all`\n    = help: because `i32::MAX` is the maximum value for this type, this comparison is always false\n    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#absurd_extreme_comparisons\n\n',
      children: [
        {
          children: [],
          code: null,
          level: 'note',
          message: '`-D clippy::absurd-extreme-comparisons` implied by `-D clippy::all`',
          rendered: null,
          spans: []
        },
        {
          children: [],
          code: null,
          level: 'help',
          message: 'because `i32::MAX` is the maximum value for this type, this comparison is always false',
          rendered: null,
          spans: []
        },
        {
          children: [],
          code: null,
          level: 'help',
          message:
            'for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#absurd_extreme_comparisons',
          rendered: null,
          spans: []
        }
      ],
      code: {
        code: 'clippy::absurd_extreme_comparisons',
        explanation: null
      },
      level: 'error',
      message:
        'this comparison involving the minimum or maximum element for this type contains a case that is always true or always false',
      spans: [
        {
          byte_end: 13338,
          byte_start: 13324,
          column_end: 26,
          column_start: 12,
          expansion: null,
          file_name: 'can/src/can_session.rs',
          is_primary: true,
          label: null,
          line_end: 391,
          line_start: 391,
          suggested_replacement: null,
          suggestion_applicability: null,
          text: [
            {
              highlight_end: 26,
              highlight_start: 12,
              text: '        if 100 > i32::MAX {}'
            }
          ]
        }
      ]
    }
  },
  {
    reason: 'compiler-message',
    package_id: 'can 0.1.0 (path+file:///app/can)',
    target: {
      kind: ['lib'],
      crate_types: ['lib'],
      name: 'can',
      src_path: '/app/can/src/lib.rs',
      edition: '2018',
      doctest: true
    },
    message: {
      rendered: 'error: aborting due to previous error\n\n',
      children: [],
      code: null,
      level: 'error',
      message: 'aborting due to previous error',
      spans: []
    }
  }
]
