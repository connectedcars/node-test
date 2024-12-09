import { MAX_LINE_LENGTH, MAX_OUTPUT_LENGTH } from '../checks-common'
import { FormattedTestResults, jestCheck } from './jest'
import {
  jestFailedOutput,
  jestHugeOutput,
  jestPassedOutput,
  jestSkippedOutput,
  jestSnapshotFailed
} from './resources/jest-help-text'

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

  it('handles huge outputs', () => {
    const output = jestCheck({ data: jestHugeOutput, sha: '1234567890' })

    const outputString = JSON.stringify(output, null, 2)
    expect(outputString.length).toBeLessThan(MAX_OUTPUT_LENGTH)
    for (const line of outputString.split('\n')) {
      expect(line.length).toBeLessThan(MAX_LINE_LENGTH)
    }
    expect(output).toStrictEqual({
      name: 'jest',
      head_sha: '1234567890',
      conclusion: 'failure',
      status: 'completed',
      completed_at: expect.stringMatching(/^\d{4}/),
      output: {
        title: '178 of 180 tests passed',
        summary: '178 of 180 tests passed',
        annotations: [
          {
            start_line: 58,
            end_line: 58,
            annotation_level: 'failure',
            title: 'jobs/run-intercom-cleanup - runIntercomCleanup - runs Intercom cleanup',
            message:
              'Error: expect(received).toMatchSnapshot()\n\nSnapshot name: `jobs/run-intercom-cleanup runIntercomCleanup runs Intercom cleanup 1`\n\n- Snapshot  - 24\n+ Received  + 24\n\n@@ -19,11 +19,11 @@\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "content-length": "146",\n        "content-type": "application/json",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "POST",\n      "url": "/contacts/search",\n    },\n    Object {\n@@ -46,11 +46,11 @@\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "content-length": "146",\n        "content-type": "application/json",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "POST",\n      "url": "/contacts/search",\n    },\n    Object {\n@@ -58,11 +58,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa1",\n    },\n    Object {\n@@ -70,11 +70,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa1",\n    },\n    Object {\n@@ -82,11 +82,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa2",\n    },\n    Object {\n@@ -94,11 +94,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa2",\n    },\n    Object {\n@@ -106,11 +106,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa3",\n    },\n    Object {\n@@ -118,11 +118,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa3",\n    },\n    Object {\n@@ -146,11 +146,11 @@\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "content-length": "170",\n        "content-type": "application/json",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "POST",\n      "url": "/contacts/search",\n    },\n    Object {\n@@ -174,11 +174,11 @@\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "content-length": "170",\n        "content-type": "application/json",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "POST",\n      "url": "/contacts/search",\n    },\n    Object {\n@@ -186,11 +186,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa1",\n    },\n    Object {\n@@ -198,11 +198,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa1",\n    },\n    Object {\n@@ -210,11 +210,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa2",\n    },\n    Object {\n@@ -222,11 +222,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa2",\n    },\n    Object {\n@@ -234,11 +234,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa3",\n    },\n    Object {\n@@ -246,11 +246,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa3",\n    },\n    Object {\n@@ -274,11 +274,11 @@\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "content-length": "170",\n        "content-type": "application/json",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "POST",\n      "url": "/contacts/search",\n    },\n    Object {\n@@ -302,11 +302,11 @@\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "content-length": "170",\n        "content-type": "application/json",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "POST",\n      "url": "/contacts/search",\n    },\n    Object {\n@@ -314,11 +314,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa1",\n    },\n    Object {\n@@ -326,11 +326,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa1",\n    },\n    Object {\n@@ -338,11 +338,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa2",\n    },\n    Object {\n@@ -350,11 +350,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa2",\n    },\n    Object {\n@@ -362,11 +362,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa3",\n    },\n    Object {\n@@ -374,11 +374,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa3",\n    },\n  ]\n    at Object.<anonymous> (/Users/michaelstorgaard/Sites/job-runner-cleanup/src/jobs/run-intercom-cleanup.it.test.ts:58:11)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)',
            path: 'src/jobs/run-intercom-cleanup.it.test.ts',
            raw_details: 'Line too large (64435 B)'
          },
          {
            start_line: 91,
            end_line: 91,
            annotation_level: 'failure',
            title: 'jobs/run-gdpr-cleanup - getGdprCleanupJobs - gets GDPR cleanup jobs',
            message:
              'Error: expect(received).toEqual(expected) // deep equality\n\nExpected: 58\nReceived: 59\n    at Object.<anonymous> (/Users/michaelstorgaard/Sites/job-runner-cleanup/src/jobs/run-gdpr-cleanup.test.ts:91:27)\n    at Promise.then.completed (/Users/michaelstorgaard/Sites/job-runner-cleanup/node_modules/jest-circus/build/utils.js:298:28)\n    at new Promise (<anonymous>)\n    at callAsyncCircusFn (/Users/michaelstorgaard/Sites/job-runner-cleanup/node_modules/jest-circus/build/utils.js:231:10)\n    at _callCircusTest (/Users/michaelstorgaard/Sites/job-runner-cleanup/node_modules/jest-circus/build/run.js:316:40)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at _runTest (/Users/michaelstorgaard/Sites/job-runner-cleanup/node_modules/jest-circus/build/run.js:252:3)\n    at _runTestsForDescribeBlock (/Users/michaelstorgaard/Sites/job-runner-cleanup/node_modules/jest-circus/build/run.js:126:9)\n    at _runTestsForDescribeBlock (/Users/michaelstorgaard/Sites/job-runner-cleanup/node_modules/jest-circus/build/run.js:121:9)\n    at _runTestsForDescribeBlock (/Users/michaelstorgaard/Sites/job-runner-cleanup/node_modules/jest-circus/build/run.js:121:9)\n    at run (/Users/michaelstorgaard/Sites/job-runner-cleanup/node_modules/jest-circus/build/run.js:71:3)\n    at runAndTransformResultsToJestFormat (/Users/michaelstorgaard/Sites/job-runner-cleanup/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapterInit.js:122:21)\n    at jestAdapter (/Users/michaelstorgaard/Sites/job-runner-cleanup/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapter.js:79:19)\n    at runTestInternal (/Users/michaelstorgaard/Sites/job-runner-cleanup/node_modules/jest-runner/build/runTest.js:367:16)\n    at runTest (/Users/michaelstorgaard/Sites/job-runner-cleanup/node_modules/jest-runner/build/runTest.js:444:34)',
            path: 'src/jobs/run-gdpr-cleanup.test.ts',
            raw_details:
              '{\n  "ancestorTitles": [\n    "jobs/run-gdpr-cleanup",\n    "getGdprCleanupJobs"\n  ],\n  "duration": 0,\n  "failureDetails": [\n    {\n      "matcherResult": {\n        "actual": 59,\n        "expected": 58,\n        "message": "expect(received).toEqual(expected) // deep equality\\n\\nExpected: 58\\nReceived: 59",\n        "name": "toEqual",\n        "pass": false\n      }\n    }\n  ],\n  "failureMessages": [\n    "Error: expect(received).toEqual(expected) // deep equality\\n\\nExpected: 58\\nReceived: 59\\n    at Object.<anonymous> (/Users/michaelstorgaard/Sites/job-runner-cleanup/src/jobs/run-gdpr-cleanup.test.ts:91:27)\\n    at Promise.then.completed (/Users/michaelstorgaard/Sites/job-runner-cleanup/node_modules/jest-circus/build/utils.js:298:28)\\n    at new Promise (<anonymous>)\\n    at callAsyncCircusFn (/Users/michaelstorgaard/Sites/job-runner-cleanup/node_modules/jest-circus/build/utils.js:231:10)\\n    at _callCircusTest (/Users/michaelstorgaard/Sites/job-runner-cleanup/node_modules/jest-circus/build/run.js:316:40)\\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)\\n    at _runTest (/Users/michaelstorgaard/Sites/job-runner-cleanup/node_modules/jest-circus/build/run.js:252:3)\\n    at _runTestsForDescribeBlock (/Users/michaelstorgaard/Sites/job-runner-cleanup/node_modules/jest-circus/build/run.js:126:9)\\n    at _runTestsForDescribeBlock (/Users/michaelstorgaard/Sites/job-runner-cleanup/node_modules/jest-circus/build/run.js:121:9)\\n    at _runTestsForDescribeBlock (/Users/michaelstorgaard/Sites/job-runner-cleanup/node_modules/jest-circus/build/run.js:121:9)\\n    at run (/Users/michaelstorgaard/Sites/job-runner-cleanup/node_modules/jest-circus/build/run.js:71:3)\\n    at runAndTransformResultsToJestFormat (/Users/michaelstorgaard/Sites/job-runner-cleanup/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapterInit.js:122:21)\\n    at jestAdapter (/Users/michaelstorgaard/Sites/job-runner-cleanup/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapter.js:79:19)\\n    at runTestInternal (/Users/michaelstorgaard/Sites/job-runner-cleanup/node_modules/jest-runner/build/runTest.js:367:16)\\n    at runTest (/Users/michaelstorgaard/Sites/job-runner-cleanup/node_modules/jest-runner/build/runTest.js:444:34)"\n  ],\n  "fullName": "jobs/run-gdpr-cleanup getGdprCleanupJobs gets GDPR cleanup jobs",\n  "invocations": 1,\n  "location": null,\n  "numPassingAsserts": 0,\n  "retryReasons": [],\n  "status": "failed",\n  "title": "gets GDPR cleanup jobs",\n  "file": "/Users/michaelstorgaard/Sites/job-runner-cleanup/src/jobs/run-gdpr-cleanup.test.ts"\n}'
          }
        ]
      }
    })
  })
  it('handles truncated messages', () => {
    const numberAssertions = 5
    // Make sure each message * numberAssertions is less than MAX_OUTPUT_LENGTH
    const largeFailureMessage = 'a'.repeat(MAX_OUTPUT_LENGTH / numberAssertions)
    const data: FormattedTestResults = {
      numFailedTests: 1,
      numFailedTestSuites: 1,
      numPassedTests: 0,
      numPassedTestSuites: 0,
      numPendingTests: 0,
      numPendingTestSuites: 0,
      numRuntimeErrorTestSuites: 0,
      numTodoTests: 0,
      numTotalTests: 1,
      numTotalTestSuites: 1,
      openHandles: [],
      snapshot: {
        added: 0,
        didUpdate: false,
        failure: false,
        filesAdded: 0,
        filesRemoved: 0,
        filesRemovedList: [],
        filesUnmatched: 0,
        filesUpdated: 0,
        matched: 0,
        total: 0,
        unchecked: 0,
        uncheckedKeysByFile: [],
        unmatched: 0,
        updated: 0
      },
      startTime: Date.now(),
      success: false,
      testResults: [
        {
          message: 'test suite failed',
          name: 'test',
          summary: 'test',
          status: 'failed',
          startTime: Date.now(),
          endTime: Date.now(),
          assertionResults: Array.from({ length: 5 }, () => ({
            ancestorTitles: [],
            failureMessages: [largeFailureMessage],
            fullName: 'test',
            status: 'failed',
            title: 'test'
          }))
        }
      ],
      wasInterrupted: false
    }

    const output = jestCheck({ data, sha: '1234567890' })
    const outputString = JSON.stringify(output, null, 2)
    expect(outputString.length).toBeLessThan(MAX_OUTPUT_LENGTH)
    for (const line of outputString.split('\n')) {
      expect(line.length).toBeLessThan(MAX_LINE_LENGTH)
    }
    expect(output.output?.annotations?.[0].raw_details).toContain('Output too large')
    // We expect each message to be truncated to half the length
    expect(output.output?.annotations?.[0].message).toHaveLength(MAX_OUTPUT_LENGTH / (numberAssertions * 2))
  })
})
