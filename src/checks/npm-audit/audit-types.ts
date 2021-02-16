export interface AuditDataV1 {
  actions: Action[]
  advisories: Advisories
  metadata: AuditMetadata
  runId: string
}

export interface Action {
  action: string
  module: string
  depth: number
  target: string
}

export interface AuditMetadata {
  vulnerabilities: AuditMetadataVulnerabilities
  dependencies: number
  devDependencies: number
  optionalDependencies: number
  totalDependencies: number
}

export interface AuditMetadataVulnerabilities {
  [key: string]: number
  info: number
  low: number
  moderate: number
  high: number
  critical: number
}

export interface Advisories {
  [key: string]: Advisory
}

export interface Advisory {
  findings: Finding[]
  id: number
  url: string
  module_name: string
  title: string
  overview: string
  severity: string
  vulnerable_versions: string
  recommendation: string
}

interface Finding {
  paths: string[]
  dev: string
}

export function isAuditDataV2(obj: unknown): obj is AuditDataV2 {
  if ((obj as AuditDataV2).auditReportVersion === 2) {
    return true
  }
  return false
}

export interface AuditDataV2 {
  auditReportVersion: 2
  vulnerabilities: {
    [packageName: string]: Vulnerability
  }
  metadata: {
    vulnerabilities: {
      info: number
      low: number
      moderate: number
      high: number
      critical: number
      total: number
    }
    dependencies: {
      prod: number
      dev: number
      optional: number
      peer: number
      peerOptional: number
      total: number
    }
  }
}

export type VulnerabilitySeverity = 'info' | 'low' | 'moderate' | 'high' | 'critical'

export interface VulnerabilityFixAvailable {
  name: string
  version: string
  isSemVerMajor: boolean
}

export interface VulnerabilityVia {
  source: number
  name: string
  dependency: string
  title: string
  url: string
  severity: VulnerabilitySeverity
  range: string
}

export interface Vulnerability {
  name: string
  severity: VulnerabilitySeverity
  via: Array<string | VulnerabilityVia>
  effects: string[]
  range: string
  nodes: string[]
  fixAvailable: boolean | VulnerabilityFixAvailable
}
