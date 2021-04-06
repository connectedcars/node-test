export type CargoMessage = CargoCompilerMessage | CargoBuildFinishedMessage | CargoTestMessage | CargoSuiteMessage

export interface CargoTestMessage {
  type: 'test'
  reason?: undefined
  name: string
  event: string
  exec_time?: string
  stdout?: string
}

export interface CargoSuiteMessage {
  type: 'suite'
  reason?: undefined
  event: string
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
  message: CargoCompilerMessageBody
  target: {
    kind: string[]
    crate_types: string[]
    name: string
    src_path: string
    edition: string
    doctest: true
  }
}

export interface CargoCompilerMessageBody {
  code: string | null | { code: string; explanation: string | null }
  level: string
  message: string
  rendered: string | null
  spans: DiagnosticSpan[]
  children: CargoCompilerMessageBody[]
}

export interface DiagnosticSpan {
  byte_end: number
  byte_start: number
  file_name: string
  is_primary: boolean
  line_start: number
  line_end: number
  column_start: number
  column_end: number
  expansion: null | unknown
  label: string | null
  suggested_replacement: null | unknown
  suggestion_applicability: null | unknown
  text: [
    {
      highlight_end: number
      highlight_start: number
      text: string
    }
  ]
}
