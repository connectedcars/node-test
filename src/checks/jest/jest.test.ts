import { FormattedTestResults, jestCheck } from './jest'
import { jestFailedOutput, jestPassedOutput, jestSkippedOutput, jestSnapshotFailed } from './resources/jest-help-text'

describe('checks/jest', () => {
  it('processes passing jest output to checks structure', () => {
    const output = jestCheck({ data: jestPassedOutput, sha: '1234567890' })
    const expected = {
      name: 'jest',
      head_sha: '1234567890',
      conclusion: 'success',
      status: 'completed',
      completed_at: expect.stringMatching(/^\d{4}/),
      output: {
        title: '33 of 33 tests passed',
        summary: '33 of 33 tests passed',
        annotations: []
      }
    }
    expect(output).toStrictEqual(expected)
  })

  it('processes failing jest output to checks structure', () => {
    const output = jestCheck({ data: jestFailedOutput, sha: '1234567890' })
    expect(output).toMatchSnapshot({
      completed_at: expect.stringMatching(/^\d{4}/)
    })
  })

  it('handles empty input', () => {
    const sampleOutput = ''
    const output = jestCheck({
      data: sampleOutput as unknown as FormattedTestResults,
      sha: '1234567890'
    })
    expect(output).toStrictEqual({
      name: 'jest',
      head_sha: '1234567890',
      conclusion: 'neutral',
      status: 'completed',
      completed_at: expect.stringMatching(/^\d{4}/),
      output: {
        title: 'No tests found',
        summary: 'No tests found',
        annotations: []
      }
    })
  })

  it('should handle skipped tests', () => {
    const output = jestCheck({ data: jestSkippedOutput, sha: '1234567890' })
    expect(output).toMatchSnapshot({
      completed_at: expect.stringMatching(/^\d{4}/)
    })
  })

  it('handles obsolete snapshots', () => {
    const output = jestCheck({ data: jestSnapshotFailed, sha: '1234567890' })
    const expected = {
      name: 'jest',
      head_sha: '1234567890',
      conclusion: 'failure',
      status: 'completed',
      completed_at: expect.stringMatching(/^\d{4}/),
      output: {
        title: '2 of 2 tests passed (with 2 snapshots obsolete)',
        summary: '2 of 2 tests passed (with 2 snapshots obsolete)',
        annotations: [
          {
            start_line: 1,
            end_line: 1,
            annotation_level: 'failure',
            title: '2 snapshots obsolete',
            message:
              ' - big-query/analytics getAnalyticsEvent no results 1\n - big-query/analytics getAnalyticsEvents 1',
            path: 'src/analytics/analytics.test.ts',
            raw_details:
              '{\n  "added": 0,\n  "didUpdate": false,\n  "failure": true,\n  "filesAdded": 0,\n  "filesRemoved": 0,\n  "filesRemovedList": [],\n  "filesUnmatched": 0,\n  "filesUpdated": 0,\n  "matched": 2,\n  "total": 2,\n  "unchecked": 2,\n  "uncheckedKeysByFile": [\n    {\n      "filePath": "/Users/michaelstorgaard/Sites/node-backend/src/analytics/analytics.test.ts",\n      "keys": [\n        "big-query/analytics getAnalyticsEvent no results 1",\n        "big-query/analytics getAnalyticsEvents 1"\n      ]\n    }\n  ],\n  "unmatched": 0,\n  "updated": 0\n}'
          }
        ]
      }
    }
    expect(output).toStrictEqual(expected)
  })
})
