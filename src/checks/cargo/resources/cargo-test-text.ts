import { CargoMessage } from '../cargo-types'

export const cargoTestFailedOutput: CargoMessage[] = [
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
        'error: expected one of `.`, `;`, `?`, `}`, or an operator, found `assert_eq`\n   --> can/src/can_session.rs:536:9\n    |\n535 |         assert!(false) \n    |                       - expected one of `.`, `;`, `?`, `}`, or an operator\n536 |         assert_eq!(session.typ, SessionType::TP2(0x89));\n    |         ^^^^^^^^^ unexpected token\n\n',
      children: [],
      code: null,
      level: 'error',
      message: 'expected one of `.`, `;`, `?`, `}`, or an operator, found `assert_eq`',
      spans: [
        {
          byte_end: 17846,
          byte_start: 17846,
          column_end: 23,
          column_start: 23,
          expansion: null,
          file_name: 'can/src/can_session.rs',
          is_primary: false,
          label: 'expected one of `.`, `;`, `?`, `}`, or an operator',
          line_end: 535,
          line_start: 535,
          suggested_replacement: null,
          suggestion_applicability: null,
          text: [
            {
              highlight_end: 23,
              highlight_start: 23,
              text: '        assert!(false) '
            }
          ]
        },
        {
          byte_end: 17865,
          byte_start: 17856,
          column_end: 18,
          column_start: 9,
          expansion: null,
          file_name: 'can/src/can_session.rs',
          is_primary: true,
          label: 'unexpected token',
          line_end: 536,
          line_start: 536,
          suggested_replacement: null,
          suggestion_applicability: null,
          text: [
            {
              highlight_end: 18,
              highlight_start: 9,
              text: '        assert_eq!(session.typ, SessionType::TP2(0x89));'
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
      rendered: 'error: aborting due to previous error; 2 warnings emitted\n\n',
      children: [],
      code: null,
      level: 'error',
      message: 'aborting due to previous error; 2 warnings emitted',
      spans: []
    }
  },
  {
    reason: 'build-finished',
    success: false
  },
  {
    type: 'test',
    name: 'can_session::tests::tp2_stays_alive_after_applayer_error',
    event: 'failed',
    stdout:
      "thread 'can_session::tests::tp2_stays_alive_after_applayer_error' panicked at 'assertion failed: false', can/src/can_session.rs:535:9\nnote: run with `RUST_BACKTRACE=1` environment variable to display a backtrace\n"
  },
  {
    type: 'test',
    event: 'started',
    name: 'passive_listeners::tester_detector::tests::obd2'
  },
  {
    type: 'test',
    name: 'passive_listeners::tester_detector::tests::detects_frames_on_diagnostic_relevant_arbitration_ids_sent_by_someone_else',
    event: 'ok'
  },
  {
    type: 'test',
    event: 'started',
    name: 'passive_listeners::tester_detector::tests::obd2_but_not_functionally_addressed'
  },
  {
    type: 'test',
    name: 'passive_listeners::tester_detector::tests::doesnt_hardcode_obd2',
    event: 'ok'
  },
  {
    type: 'test',
    event: 'started',
    name: 'server::tests::it_deserialize_null_sessions'
  },
  {
    type: 'test',
    name: 'passive_listeners::tester_detector::tests::functionally_addressed_but_not_obd2',
    event: 'ok'
  },
  {
    type: 'test',
    event: 'started',
    name: 'server::tests::it_deserialize_sessions_with_numbered_level'
  },
  {
    type: 'test',
    name: 'passive_listeners::tester_detector::tests::obd2',
    event: 'ok'
  },
  {
    type: 'test',
    event: 'started',
    name: 'server::tests::it_fails_empty_sessions'
  },
  {
    type: 'test',
    name: 'passive_listeners::tester_detector::tests::obd2_but_not_functionally_addressed',
    event: 'ok'
  },
  {
    type: 'test',
    event: 'started',
    name: 'server::tests::it_fails_malformed_ecu_formats'
  },
  {
    type: 'test',
    name: 'server::tests::it_deserialize_null_sessions',
    event: 'ok'
  },
  {
    type: 'test',
    event: 'started',
    name: 'server::tests::it_fails_nonsense_sessions'
  },
  {
    type: 'test',
    name: 'server::tests::it_deserialize_sessions_with_numbered_level',
    event: 'ok'
  },
  {
    type: 'test',
    event: 'started',
    name: 'server::tests::it_works_on_wellformed_ecus'
  },
  {
    type: 'test',
    name: 'server::tests::it_fails_empty_sessions',
    event: 'ok'
  },
  {
    type: 'test',
    event: 'started',
    name: 'transport::isotp::transfer_in::test::check_sn_according_to_fiat'
  },
  {
    type: 'test',
    name: 'server::tests::it_fails_malformed_ecu_formats',
    event: 'ok'
  },
  {
    type: 'test',
    event: 'started',
    name: 'transport::isotp::transfer_in::test::check_sn_according_to_iso'
  },
  {
    type: 'test',
    name: 'server::tests::it_fails_nonsense_sessions',
    event: 'ok'
  },
  {
    type: 'test',
    event: 'started',
    name: 'transport::isotp::transfer_in::test::test_flow_control'
  },
  {
    type: 'test',
    name: 'server::tests::it_works_on_wellformed_ecus',
    event: 'ok'
  },
  {
    type: 'test',
    event: 'started',
    name: 'transport::isotp::transfer_in::test::test_frame_type_from_pci1'
  },
  {
    type: 'test',
    name: 'transport::isotp::transfer_in::test::check_sn_according_to_fiat',
    event: 'ok'
  },
  {
    type: 'test',
    event: 'started',
    name: 'transport::isotp::transfer_in::test::test_handle_consecutive_frame'
  },
  {
    type: 'test',
    name: 'transport::isotp::transfer_in::test::check_sn_according_to_iso',
    event: 'ok'
  },
  {
    type: 'test',
    event: 'started',
    name: 'transport::isotp::transfer_in::test::test_handle_first_frame'
  },
  {
    type: 'test',
    name: 'transport::isotp::transfer_in::test::test_flow_control',
    event: 'ok'
  },
  {
    type: 'test',
    event: 'started',
    name: 'transport::isotp::transfer_in::test::test_handle_first_frame_unexpected'
  },
  {
    type: 'test',
    name: 'transport::isotp::transfer_in::test::test_handle_consecutive_frame',
    event: 'ignored'
  },
  {
    type: 'test',
    event: 'started',
    name: 'transport::isotp::transfer_in::test::test_handle_single_frame'
  },
  {
    type: 'test',
    name: 'transport::isotp::transfer_in::test::test_frame_type_from_pci1',
    event: 'ok'
  },
  {
    type: 'test',
    event: 'started',
    name: 'transport::isotp::transfer_in::test::test_handle_single_frame_invalid_length'
  },
  {
    type: 'test',
    name: 'transport::isotp::transfer_in::test::test_handle_first_frame',
    event: 'ok'
  },
  {
    type: 'test',
    event: 'started',
    name: 'transport::isotp::transfer_in::test::test_handle_single_frame_unexpected'
  },
  {
    type: 'test',
    name: 'transport::isotp::transfer_in::test::test_handle_first_frame_unexpected',
    event: 'ok'
  },
  {
    type: 'test',
    event: 'started',
    name: 'transport::isotp::transfer_in::test::test_is_frame_for_us'
  },
  {
    type: 'test',
    name: 'transport::isotp::transfer_in::test::test_handle_single_frame',
    event: 'ok'
  },
  {
    type: 'test',
    event: 'started',
    name: 'transport::isotp::transfer_in::test::test_waiting_for_first_or_single_frame_timeout'
  },
  {
    type: 'test',
    name: 'transport::isotp::transfer_in::test::test_handle_single_frame_invalid_length',
    event: 'ok'
  },
  {
    type: 'test',
    event: 'started',
    name: 'transport::isotp::transfer_out::test::test_send'
  },
  {
    type: 'test',
    name: 'transport::isotp::transfer_in::test::test_handle_single_frame_unexpected',
    event: 'ok'
  },
  {
    type: 'test',
    event: 'started',
    name: 'transport::isotp::transfer_out::test::test_send_not_ready'
  },
  {
    type: 'test',
    name: 'transport::isotp::transfer_in::test::test_is_frame_for_us',
    event: 'ok'
  },
  {
    type: 'test',
    event: 'started',
    name: 'transport::isotp::transfer_out::test::test_single_frame'
  },
  {
    type: 'test',
    name: 'transport::isotp::transfer_in::test::test_waiting_for_first_or_single_frame_timeout',
    event: 'ok'
  },
  {
    type: 'test',
    name: 'transport::isotp::transfer_out::test::test_send',
    event: 'ok'
  },
  {
    type: 'test',
    name: 'transport::isotp::transfer_out::test::test_send_not_ready',
    event: 'ok'
  },
  {
    type: 'test',
    name: 'transport::isotp::transfer_out::test::test_single_frame',
    event: 'ok'
  },
  {
    type: 'suite',
    event: 'failed',
    passed: 66,
    failed: 1,
    allowed_fail: 0,
    ignored: 1,
    measured: 0,
    filtered_out: 0
  }
]
