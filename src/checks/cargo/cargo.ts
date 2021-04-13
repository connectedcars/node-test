import { CheckAnnotation } from '../checks-common'
import { CargoCompilerMessage } from './cargo-types'

export function getCompilerAnnotations(item: CargoCompilerMessage): CheckAnnotation[] {
  const annotations: CheckAnnotation[] = []
  const message = item.message

  const relPath = item.target && item.target.src_path ? item.target.src_path.match(/^\/app\/(.+)$/) : null

  const span = message.spans && message.spans[0] ? message.spans[0] : null

  annotations.push({
    path: relPath && relPath[1] ? relPath[1] : 'Cargo.toml',
    start_line: span ? span.line_start : 0,
    end_line: span ? span.line_end : 0,
    annotation_level: 'failure',
    message: message.message,
    raw_details: JSON.stringify(message, null, '    ')
  })

  return annotations
}
