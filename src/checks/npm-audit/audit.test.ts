import { auditCheck } from './audit'
import { auditMultiVulnerabilities, auditNoVulnerabilities } from './resources/audit-help-text'

describe('checks/audit', () => {
  it('converts successful audit', () => {
    const data = JSON.parse(auditNoVulnerabilities)
    const result = auditCheck({
      data,
      sha: 'c61a4ae014360e064eb2a9f76c8a6a55d05e5b88'
    })
    expect(result).toStrictEqual({
      name: 'audit',
      head_sha: 'c61a4ae014360e064eb2a9f76c8a6a55d05e5b88',
      conclusion: 'success',
      status: 'completed',
      completed_at: expect.stringMatching(/^\d{4}/),
      output: {
        title: 'npm audit security report',
        summary: 'Found **0** vulnerabilities in 4982 scanned packages',
        text: ''
      }
    })
  })

  it('converts failed audit', () => {
    const data = JSON.parse(auditMultiVulnerabilities)
    const result = auditCheck({
      sha: 'abcdefg',
      data
    })
    expect(result).toMatchSnapshot({
      completed_at: expect.stringMatching(/^\d{4}/)
    })
  })
})
