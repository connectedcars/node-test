import { CheckAnnotation, CheckAnnotationLevel, CheckConversionError, CheckRunCompleted } from '../checks-common'
import { EslintData } from './eslint-types'

export interface EslintInput {
  sha: string
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

export const eslintCheck = ({ data, sha }: EslintInput): CheckRunCompleted => {
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
        const match = file.filePath.match(/^.*\/((?:src|bin)\/.+)$/)
        const relPath = match && match.length === 2 ? match[1] : '.eslintrc'
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
          start_line: message.line || 1,
          end_line: message.endLine || 1,
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
        // Limit to 50 annotations as this is the max per post for github
        annotations: annotations.slice(0, 50)
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
    throw new CheckConversionError('eslint', { data, sha }, e)
  }
}
