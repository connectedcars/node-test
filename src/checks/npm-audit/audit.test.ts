import { auditCheck } from './audit'
import {
  auditMultiVulnerabilities,
  auditMultiVulnerabilitiesV2,
  auditNoVulnerabilities,
  auditNoVulnerabilitiesV2
} from './resources/audit-help-text'

describe('checks/audit', () => {
  it('converts successful audit', () => {
    const data = JSON.parse(auditNoVulnerabilities)
    const result = auditCheck({
      data,
      sha: 'c61a4ae014360e064eb2a9f76c8a6a55d05e5b88'
    })
    expect(result).toMatchSnapshot({
      completed_at: expect.stringMatching(/^\d{4}/)
    })
  })

  it('converts successful audit v2', () => {
    const result = auditCheck({
      data: auditNoVulnerabilitiesV2 as any,
      sha: 'c61a4ae014360e064eb2a9f76c8a6a55d05e5b88'
    })
    expect(result).toMatchSnapshot({
      completed_at: expect.stringMatching(/^\d{4}/)
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

  it('converts failed audit v2', () => {
    const result = auditCheck({
      data: auditMultiVulnerabilitiesV2 as any,
      sha: 'c61a4ae014360e064eb2a9f76c8a6a55d05e5b88'
    })
    expect(result).toMatchSnapshot({
      completed_at: expect.stringMatching(/^\d{4}/)
    })
  })
})
