// References:
// - https://doc.rust-lang.org/rustc/json.html
// - https://doc.rust-lang.org/cargo/reference/external-tools.html

export type CargoMessage =
  | CargoCompilerMessage
  | CargoBuildFinishedMessage
  | CargoCompilerArtifact
  | CargoTestMessage
  | CargoSuiteMessage
  | CargoManifestParseError

// JSON output from `cargo test` is currently
// unstable, so the format is undocumented,
// and this is entirely inferred.
export interface CargoTestMessage {
  type: 'test'
  reason?: undefined
  name: string
  event: TestEvent
  // exec_time?: string
  stdout?: string
}

export type TestEvent = 'ok' | 'failed' | 'ignored' | 'started' | string

export type CargoSuiteMessage = CargoSuiteStartedMessage | CargoSuiteFinishedMessage

export interface CargoSuiteStartedMessage {
  type: 'suite'
  reason?: undefined
  event: 'started'
  // If the test suite is ignored by the use of the
  // FILTER CLI arg, then `test_count` is `0`.
  test_count: number
}

// If the test suite is ignored by the use of the
// FILTER CLI arg, then `test_count` is `0`, which
// in turn means all other counts, `passed`, `failed`,
// etc. are also `0`.
export interface CargoSuiteFinishedMessage {
  type: 'suite'
  reason?: undefined
  event: 'ok' | 'failed' | string
  passed: number
  failed: number
  allowed_fail: number
  ignored: number
  measured: number
  filtered_out: number
}

export interface CargoBuildFinishedMessage {
  type?: undefined
  reason: 'build-finished'
  success: boolean
}

export interface CargoCompilerMessage {
  type?: undefined
  reason: 'compiler-message'
  package_id: string
  message: Diagnostic
  target: {
    kind: string[]
    crate_types: string[]
    name: string
    src_path: string
    edition: string
    doctest: boolean
    test?: boolean
  }
}

export interface CargoCompilerArtifact {
  type?: undefined
  reason: 'compiler-artifact'
  package_id: string
  target: {
    kind: string[]
    crate_types: string[]
    name: string
    src_path: string
    edition: string
    doctest: boolean
    test?: boolean
  }
  profile: {
    opt_level?: '0' | '1' | '2'
    debuginfo: number
    debug_assertions: boolean
    overflow_checks: boolean
    test: boolean
  }
  features: string[]
  filenames: string[]
  executable: string | null
  fresh: boolean
}

export interface Diagnostic extends DiagnosticBase {
  children: DiagnosticBase[]
}

export interface DiagnosticBase {
  message: string
  code: DiagnosticCode | null
  level: DiagnosticLevel
  spans: DiagnosticSpan[]
  rendered: string | null
}

export interface DiagnosticCode {
  code: string
  explanation: string | null
}

export type DiagnosticLevel = 'error' | 'warning' | 'note' | 'help' | 'failure-note' | 'error: internal compiler error'

export interface DiagnosticSpan {
  file_name: string
  // 0-based, inclusive
  byte_start: number
  // 0-based, exclusive
  byte_end: number
  // 1-based, inclusive
  line_start: number
  // 1-based, inclusive
  line_end: number
  // 1-based, inclusive
  column_start: number
  // 1-based, exclusive
  column_end: number
  // This indicates that this span is the focal point of the
  // diagnostic.
  //
  // There are rare cases where multiple spans may be marked as
  // primary. For example, "immutable borrow occurs here" and
  // "mutable borrow ends here" can be two separate primary spans.
  //
  // The top (parent) message should always have at least one
  // primary span, unless it has zero spans. Child messages may have
  // zero or more primary spans.
  is_primary: boolean
  text: DiagnosticSpanText[]
  label: string | null
  // An optional string of a suggested replacement for this span to
  // solve the issue.
  suggested_replacement: string | null
  // An optional string that indicates the confidence of the
  // "suggested_replacement". Tools may use this value to determine
  // whether or not suggestions should be automatically applied.
  suggestion_applicability: DiagnosticSuggestedReplacementConfidence | null
  // An optional object indicating the expansion of a macro within
  // this span.
  //
  // If a message occurs within a macro invocation, this object will
  // provide details of where within the macro expansion the message
  // is located.
  expansion: DiagnosticExpansion | null
}

export type DiagnosticSuggestedReplacementConfidence =
  | 'MachineApplicable'
  | 'MaybeIncorrect'
  | 'HasPlaceholders'
  | 'Unspecified'

export interface DiagnosticSpanText {
  text: string
  // 1-based, inclusive
  highlight_start: number
  // 1-based, exclusive
  highlight_end: number
}

export interface DiagnosticExpansion {
  span: DiagnosticSpan
  macro_decl_name: string
  // Optional span where the relevant part of the macro is defined
  def_site_span: DiagnosticSpan | null
}

export type CargoFmtMessage = CargoFmtFile | CargoManifestParseError

export interface CargoFmtFile {
  reason?: undefined
  name: string
  mismatches: CargoFmtMismatch[]
}

export interface CargoFmtMismatch {
  original_begin_line: number
  original_end_line: number
  expected_begin_line: number
  expected_end_line: number
  original: string
  expected: string
}

// Not an official Rust nor Cargo message, it's
// one `checks` produces on the given error.
export interface CargoManifestParseError {
  type?: undefined
  reason: 'manifest-parse-error'
  path: string
  title: string
  error: string
}
