import { CheckConversionError, CheckRunCompleted } from '../checks-common'
import { Advisory, AuditDataV1, AuditDataV2, AuditMetadataVulnerabilities, isAuditDataV2 } from './audit-types'

export interface AuditInput {
  data: AuditDataV1 | AuditDataV2
  sha: string
}

function getSummary(problems: AuditMetadataVulnerabilities, totalDependencies: number, totalProblems: number): string {
  let summary = `Found **${totalProblems}** vulnerabilities`
  if (totalProblems > 0) {
    const details = []
    for (const key of Object.keys(problems)) {
      if (problems[key] > 0) {
        details.push(`**${problems[key]}** ${key}`)
      }
    }
    summary += ` (${details.join(', ')})`
  }
  summary += ` in ${totalDependencies} scanned packages`
  return summary
}

interface SeverityMap {
  [name: string]: number
}

const severities: SeverityMap = {
  critical: 5,
  high: 4,
  moderate: 3,
  low: 2,
  info: 1
}

function getTextV1(data: AuditDataV1): string {
  const advisories = Object.values(data.advisories)
  advisories.sort((a: Advisory, b: Advisory) => severities[b.severity] - severities[a.severity])
  const entries: string[] = []
  for (const advisory of advisories) {
    const severity = advisory.severity.substr(0, 1).toUpperCase() + advisory.severity.substr(1)
    let entry = `## ${severity}: ${advisory.title}\n`
    const overview = advisory.overview.replace(/\r/g, '')
    entry += `${overview}\n\n`
    const id = advisory.id
    const url = advisory.url
    entry += `[Read about advisory ${id} at nodesecurity.io](${url})\n\n`
    entry += `#### ${advisory.module_name} (${advisory.vulnerable_versions})\n`
    for (const finding of advisory.findings) {
      for (const path of finding.paths) {
        const dev = finding.dev ? '**DEV:**' : ''
        entry += ` - ${dev} \`${path.replace(/>/g, '` > `')}\`\n`
      }
    }
    const recommendation = advisory.recommendation.replace(/\r/g, '')
    entry += `\n#### Recommendation\n${recommendation}`
    entries.push(entry)
  }
  return entries.join('\n\n')
}

function getTextV2(data: AuditDataV2): string {
  const vulnerabilities = Object.values(data.vulnerabilities)
  vulnerabilities.sort((a, b) => severities[b.severity] - severities[a.severity])
  const entries: string[] = []
  for (const advisory of vulnerabilities) {
    const severity = advisory.severity.substr(0, 1).toUpperCase() + advisory.severity.substr(1)
    let entry = `## ${severity}: ${advisory.name} (${advisory.range})\n`
    const overview = advisory.via
      .map(a =>
        typeof a === 'string'
          ? `* via ${a}`
          : `* ${a.title}${a.name !== advisory.name ? ` via ${a.name}` : ''} (${a.source}: ${a.url})`
      )
      .join('\n')
    entry += `${overview}`
    entries.push(entry)
  }
  return entries.join('\n\n')
}

export function auditCheck({ data, sha }: AuditInput): CheckRunCompleted {
  try {
    let totalDependencies = 0
    let totalProblems = 0
    let text: string | undefined

    let problems: AuditMetadataVulnerabilities = {
      info: 0,
      low: 0,
      moderate: 0,
      high: 0,
      critical: 0,
      total: 0
    }
    if (isAuditDataV2(data)) {
      problems = data.metadata.vulnerabilities
      totalProblems = Object.values(data.metadata.vulnerabilities).reduce((sum, val) => sum + val, 0)
      text = getTextV2(data)
    } else {
      if (data.metadata) {
        if (data.metadata.vulnerabilities) {
          problems = data.metadata.vulnerabilities
          totalProblems = Object.values(data.metadata.vulnerabilities).reduce((sum, val) => sum + val, 0)
        }
        if (data.metadata.totalDependencies) {
          totalDependencies = data.metadata.totalDependencies
        }
      }
      text = getTextV1(data)
    }

    return {
      name: 'audit',
      head_sha: sha,
      conclusion: totalProblems === 0 ? 'success' : 'neutral',
      status: 'completed',
      completed_at: new Date().toISOString(),
      output: {
        title: 'npm audit security report',
        summary: getSummary(problems, totalDependencies, totalProblems),
        text: text || undefined
      }
    }
  } catch (e) {
    throw new CheckConversionError('audit', { data }, e)
  }
}
