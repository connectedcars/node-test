import {
  CheckAnnotation,
  CheckAnnotationLevel,
  CheckConversionError,
  CheckRunCompleted,
  GitData
} from '../checks-common'

export interface EslintInput extends GitData {
  data: EslintData[]
}

const generateSummary = (errors: number, warnings: number): string => {
  const problems = errors + warnings
  if (!problems) {
    return 'No problems found'
  }

  const summary = `Found ${problems} ${problems === 1 ? 'problem' : 'problems'}`

  const details = []
  if (errors > 0) {
    details.push(`${errors} ${errors === 1 ? 'error' : 'errors'}`)
  }

  if (warnings > 0) {
    details.push(`${warnings} ${warnings === 1 ? 'warning' : 'warnings'}`)
  }

  return `${summary} (${details.join(', ')})`
}

export const eslintCheck = ({ data, org, repo, sha }: EslintInput): CheckRunCompleted => {
  try {
    let errors = 0
    let warnings = 0
    const annotations: CheckAnnotation[] = []
    // Run through each file
    outer: for (const file of data) {
      // Run through each message for file
      for (const message of file.messages) {
        if (message.message === 'File ignored because of a matching ignore pattern. Use "--no-ignore" to override.') {
          continue outer
        }
        const match = file.filePath.match(/^.*\/(src\/.+)$/)
        const relPath = match && match.length === 2 ? match[1] : ''
        // Determine severity of message
        let annotation_level: CheckAnnotationLevel = 'notice'
        switch (message.severity) {
          case 1:
            annotation_level = 'notice'
            break
          case 2:
            annotation_level = 'failure'
            break
        }
        // Generate an annotation
        const annotation: CheckAnnotation = {
          path: relPath,
          annotation_level,
          start_line: message.line || 0,
          end_line: message.endLine || 0,
          message: `${message.line}:${message.column}`.padEnd(10) + message.message,
          raw_details: JSON.stringify(message, null, '    ')
        }

        annotations.push(annotation)
      }
      // Increment problem counts
      errors += file.errorCount
      warnings += file.warningCount
    }

    const summary = generateSummary(errors, warnings)

    const result: CheckRunCompleted = {
      name: 'eslint',
      head_sha: sha,
      conclusion: 'success',
      status: 'completed',
      completed_at: new Date().toISOString(),
      output: {
        title: summary,
        summary,
        annotations
      }
    }

    if (errors > 0) {
      result.conclusion = 'failure'
      return result
    }

    if (warnings > 0) {
      result.conclusion = 'neutral'
      return result
    }

    return result
  } catch (e) {
    throw new CheckConversionError('eslint', { data, org, repo, sha }, e)
  }
}
