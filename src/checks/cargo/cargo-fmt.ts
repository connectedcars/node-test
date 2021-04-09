import { CheckRunCompleted } from '../checks-common'

export interface CargoFmt {
  sha: string
  data: boolean
}

export function cargoFmtCheck({ data, sha }: CargoFmt): CheckRunCompleted {
  if (data) {
    return {
      name: 'cargo fmt',
      head_sha: sha,
      conclusion: 'success',
      status: 'completed',
      completed_at: new Date().toISOString(),
      output: {
        title: 'Found no errors',
        summary: 'Found no errors',
        annotations: []
      }
    }
  }
  return {
    name: 'cargo fmt',
    head_sha: sha,
    conclusion: 'failure',
    status: 'completed',
    completed_at: new Date().toISOString(),
    output: {
      title: 'Format not ok',
      summary: ''
    }
  }
}
