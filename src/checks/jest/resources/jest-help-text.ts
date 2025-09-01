import { FormattedTestResults } from '../jest'

export const jestNotFound = `{ "error": { "code": "ELIFECYCLE", "summary": "ci-tools@1.0.0 test: \`jest\`\\nExit status 1", "detail": "\\nFailed at the ci-tools@1.0.0 test script.\\nThis is probably not a problem with npm. There is likely additional logging output above." } }`

export const jestSuccessfulOutput = {
  numFailedTestSuites: 0,
  numFailedTests: 0,
  numPassedTestSuites: 8,
  numPassedTests: 33,
  numPendingTestSuites: 1,
  numPendingTests: 2,
  numRuntimeErrorTestSuites: 0,
  numTodoTests: 0,
  numTotalTestSuites: 9,
  numTotalTests: 35,
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
    matched: 5,
    total: 5,
    unchecked: 0,
    uncheckedKeysByFile: [],
    unmatched: 0,
    updated: 0
  },
  startTime: 1585832047890,
  success: true,
  testResults: [
    {
      assertionResults: [
        {
          ancestorTitles: ['HttpServer'],
          failureMessages: [],
          fullName: 'HttpServer Simple GET /',
          location: null,
          status: 'passed',
          title: 'Simple GET /'
        },
        {
          ancestorTitles: ['HttpServer'],
          failureMessages: [],
          fullName: 'HttpServer Simple POST /',
          location: null,
          status: 'passed',
          title: 'Simple POST /'
        },
        {
          ancestorTitles: ['HttpServer'],
          failureMessages: [],
          fullName: 'HttpServer should GET /json and return json requests',
          location: null,
          status: 'passed',
          title: 'should GET /json and return json requests'
        }
      ],
      endTime: 1585832054263,
      message: '',
      name: '/Users/f736trbe/git/connectedcars/node-test/src/http/http-server.test.ts',
      startTime: 1585832049096,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['HttpServer'],
          failureMessages: [],
          fullName: 'HttpServer Simple GET / with http',
          location: null,
          status: 'passed',
          title: 'Simple GET / with http'
        },
        {
          ancestorTitles: ['HttpServer'],
          failureMessages: [],
          fullName: 'HttpServer Simple GET / with https',
          location: null,
          status: 'passed',
          title: 'Simple GET / with https'
        },
        {
          ancestorTitles: ['HttpServer'],
          failureMessages: [],
          fullName: 'HttpServer Simple GET / with https and client cert',
          location: null,
          status: 'passed',
          title: 'Simple GET / with https and client cert'
        },
        {
          ancestorTitles: ['HttpServer'],
          failureMessages: [],
          fullName: 'HttpServer Should have requests in correct order ',
          location: null,
          status: 'passed',
          title: 'Should have requests in correct order '
        }
      ],
      endTime: 1585832054517,
      message: '',
      name: '/Users/f736trbe/git/connectedcars/node-test/src/http/web-server.test.ts',
      startTime: 1585832049122,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['MySQLServer'],
          failureMessages: [],
          fullName: 'MySQLServer Query test',
          location: null,
          status: 'passed',
          title: 'Query test'
        }
      ],
      endTime: 1585832054632,
      message: '',
      name: '/Users/f736trbe/git/connectedcars/node-test/src/mysql/mysql-client.test.ts',
      startTime: 1585832049159,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['ChildProcess'],
          failureMessages: [],
          fullName: 'ChildProcess should run faked sh command with local path',
          location: null,
          status: 'passed',
          title: 'should run faked sh command with local path'
        },
        {
          ancestorTitles: ['ChildProcess'],
          failureMessages: [],
          fullName: 'ChildProcess should run faked bash command',
          location: null,
          status: 'passed',
          title: 'should run faked bash command'
        },
        {
          ancestorTitles: ['ChildProcess'],
          failureMessages: [],
          fullName: 'ChildProcess should run faked node command',
          location: null,
          status: 'passed',
          title: 'should run faked node command'
        },
        {
          ancestorTitles: ['ChildProcess'],
          failureMessages: [],
          fullName: 'ChildProcess should run faked node command with inject data',
          location: null,
          status: 'passed',
          title: 'should run faked node command with inject data'
        }
      ],
      endTime: 1585832054949,
      message: '',
      name: '/Users/f736trbe/git/connectedcars/node-test/src/unix/command-emulation.test.ts',
      startTime: 1585832049029,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['mysql common', 'generateMySQLServerConfig'],
          failureMessages: [],
          fullName: 'mysql common generateMySQLServerConfig should generate generic config',
          location: null,
          status: 'passed',
          title: 'should generate generic config'
        },
        {
          ancestorTitles: ['mysql common', 'generateMySQLServerConfig'],
          failureMessages: [],
          fullName: 'mysql common generateMySQLServerConfig should set user to mysql',
          location: null,
          status: 'passed',
          title: 'should set user to mysql'
        },
        {
          ancestorTitles: ['mysql common', 'getMySQLServerVersionString'],
          failureMessages: [],
          fullName: 'mysql common getMySQLServerVersionString should return the version string',
          location: null,
          status: 'passed',
          title: 'should return the version string'
        },
        {
          ancestorTitles: ['mysql common', 'getMySQLServerVersionString'],
          failureMessages: [],
          fullName: 'mysql common getMySQLServerVersionString should return an error',
          location: null,
          status: 'passed',
          title: 'should return an error'
        },
        {
          ancestorTitles: ['mysql common', 'getMySQLServerConfig'],
          failureMessages: [],
          fullName: 'mysql common getMySQLServerConfig should return the current mysql config',
          location: null,
          status: 'passed',
          title: 'should return the current mysql config'
        },
        {
          ancestorTitles: ['mysql common', 'startMySQLd'],
          failureMessages: [],
          fullName: 'mysql common startMySQLd it should start a detached mysqld server and get the pid',
          location: null,
          status: 'passed',
          title: 'it should start a detached mysqld server and get the pid'
        }
      ],
      endTime: 1585832055389,
      message: '',
      name: '/Users/f736trbe/git/connectedcars/node-test/src/mysql/mysqld-utils.test.ts',
      startTime: 1585832049100,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['MySQLServer startup'],
          failureMessages: [],
          fullName: 'MySQLServer startup Should start a new database server in a tmp folder',
          location: null,
          status: 'pending',
          title: 'Should start a new database server in a tmp folder'
        },
        {
          ancestorTitles: ['MySQLServer startup'],
          failureMessages: [],
          fullName: 'MySQLServer startup Should start a new database server and resume it after',
          location: null,
          status: 'pending',
          title: 'Should start a new database server and resume it after'
        }
      ],
      endTime: 1585832055445,
      message: '',
      name: '/Users/f736trbe/git/connectedcars/node-test/src/mysql/mysql-server.test.ts',
      startTime: 1585832054554,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['run-process'],
          failureMessages: [],
          fullName: 'run-process should start a process and wait for exit',
          location: null,
          status: 'passed',
          title: 'should start a process and wait for exit'
        },
        {
          ancestorTitles: ['run-process'],
          failureMessages: [],
          fullName: 'run-process should start a process and kill it',
          location: null,
          status: 'passed',
          title: 'should start a process and kill it'
        },
        {
          ancestorTitles: ['run-process'],
          failureMessages: [],
          fullName: 'run-process should start a process that ignores SIGTERM and kill it',
          location: null,
          status: 'passed',
          title: 'should start a process that ignores SIGTERM and kill it'
        },
        {
          ancestorTitles: ['run-process'],
          failureMessages: [],
          fullName: 'run-process should start a process and stop it on output',
          location: null,
          status: 'passed',
          title: 'should start a process and stop it on output'
        },
        {
          ancestorTitles: ['run-process'],
          failureMessages: [],
          fullName: "run-process should start a process that stops when we close it's stdin",
          location: null,
          status: 'passed',
          title: "should start a process that stops when we close it's stdin"
        },
        {
          ancestorTitles: ['run-process'],
          failureMessages: [],
          fullName: 'run-process should completely detach process',
          location: null,
          status: 'passed',
          title: 'should completely detach process'
        },
        {
          ancestorTitles: ['run-process'],
          failureMessages: [],
          fullName: 'run-process should detach and fork a new process',
          location: null,
          status: 'passed',
          title: 'should detach and fork a new process'
        }
      ],
      endTime: 1585832055486,
      message: '',
      name: '/Users/f736trbe/git/connectedcars/node-test/src/unix/run-process.test.ts',
      startTime: 1585832049125,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['HttpServer'],
          failureMessages: [],
          fullName: 'HttpServer Simple GET / with https',
          location: null,
          status: 'passed',
          title: 'Simple GET / with https'
        },
        {
          ancestorTitles: ['HttpServer'],
          failureMessages: [],
          fullName: 'HttpServer Simple GET / with https and client cert',
          location: null,
          status: 'passed',
          title: 'Simple GET / with https and client cert'
        }
      ],
      endTime: 1585832055510,
      message: '',
      name: '/Users/f736trbe/git/connectedcars/node-test/src/http/https-server.test.ts',
      startTime: 1585832054496,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['run-wrapper'],
          failureMessages: [],
          fullName: "run-wrapper should start a process that stops when we close it's stdin",
          location: null,
          status: 'passed',
          title: "should start a process that stops when we close it's stdin"
        },
        {
          ancestorTitles: ['run-wrapper'],
          failureMessages: [],
          fullName: 'run-wrapper should start a process that stops when send SIGTERM to it',
          location: null,
          status: 'passed',
          title: 'should start a process that stops when send SIGTERM to it'
        },
        {
          ancestorTitles: ['run-wrapper'],
          failureMessages: [],
          fullName: 'run-wrapper should start a process that logs to file',
          location: null,
          status: 'passed',
          title: 'should start a process that logs to file'
        },
        {
          ancestorTitles: ['run-wrapper'],
          failureMessages: [],
          fullName: 'run-wrapper should saves a PID file',
          location: null,
          status: 'passed',
          title: 'should saves a PID file'
        },
        {
          ancestorTitles: ['run-wrapper'],
          failureMessages: [],
          fullName: 'run-wrapper should completely detach process',
          location: null,
          status: 'passed',
          title: 'should completely detach process'
        },
        {
          ancestorTitles: ['run-wrapper'],
          failureMessages: [],
          fullName: 'run-wrapper should detach and log to file',
          location: null,
          status: 'passed',
          title: 'should detach and log to file'
        }
      ],
      endTime: 1585832056422,
      message: '',
      name: '/Users/f736trbe/git/connectedcars/node-test/bin/run-wrapper.test.ts',
      startTime: 1585832049139,
      status: 'passed',
      summary: ''
    }
  ],
  wasInterrupted: false
}

export const jestPassedOutput: FormattedTestResults = {
  numFailedTestSuites: 0,
  numFailedTests: 0,
  numPassedTestSuites: 8,
  numPassedTests: 33,
  numPendingTestSuites: 0,
  numPendingTests: 0,
  numRuntimeErrorTestSuites: 0,
  numTodoTests: 0,
  numTotalTestSuites: 9,
  numTotalTests: 33,
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
    matched: 5,
    total: 5,
    unchecked: 0,
    uncheckedKeysByFile: [],
    unmatched: 0,
    updated: 0
  },
  startTime: 1585832047890,
  success: true,
  testResults: [
    {
      assertionResults: [
        {
          ancestorTitles: ['HttpServer'],
          failureMessages: [],
          fullName: 'HttpServer Simple GET /',
          location: null,
          status: 'passed',
          title: 'Simple GET /'
        },
        {
          ancestorTitles: ['HttpServer'],
          failureMessages: [],
          fullName: 'HttpServer Simple POST /',
          location: null,
          status: 'passed',
          title: 'Simple POST /'
        },
        {
          ancestorTitles: ['HttpServer'],
          failureMessages: [],
          fullName: 'HttpServer should GET /json and return json requests',
          location: null,
          status: 'passed',
          title: 'should GET /json and return json requests'
        }
      ],
      endTime: 1585832054263,
      message: '',
      name: '/Users/f736trbe/git/connectedcars/node-test/src/http/http-server.test.ts',
      startTime: 1585832049096,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['HttpServer'],
          failureMessages: [],
          fullName: 'HttpServer Simple GET / with http',
          location: null,
          status: 'passed',
          title: 'Simple GET / with http'
        },
        {
          ancestorTitles: ['HttpServer'],
          failureMessages: [],
          fullName: 'HttpServer Simple GET / with https',
          location: null,
          status: 'passed',
          title: 'Simple GET / with https'
        },
        {
          ancestorTitles: ['HttpServer'],
          failureMessages: [],
          fullName: 'HttpServer Simple GET / with https and client cert',
          location: null,
          status: 'passed',
          title: 'Simple GET / with https and client cert'
        },
        {
          ancestorTitles: ['HttpServer'],
          failureMessages: [],
          fullName: 'HttpServer Should have requests in correct order ',
          location: null,
          status: 'passed',
          title: 'Should have requests in correct order '
        }
      ],
      endTime: 1585832054517,
      message: '',
      name: '/Users/f736trbe/git/connectedcars/node-test/src/http/web-server.test.ts',
      startTime: 1585832049122,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['MySQLServer'],
          failureMessages: [],
          fullName: 'MySQLServer Query test',
          location: null,
          status: 'passed',
          title: 'Query test'
        }
      ],
      endTime: 1585832054632,
      message: '',
      name: '/Users/f736trbe/git/connectedcars/node-test/src/mysql/mysql-client.test.ts',
      startTime: 1585832049159,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['ChildProcess'],
          failureMessages: [],
          fullName: 'ChildProcess should run faked sh command with local path',
          location: null,
          status: 'passed',
          title: 'should run faked sh command with local path'
        },
        {
          ancestorTitles: ['ChildProcess'],
          failureMessages: [],
          fullName: 'ChildProcess should run faked bash command',
          location: null,
          status: 'passed',
          title: 'should run faked bash command'
        },
        {
          ancestorTitles: ['ChildProcess'],
          failureMessages: [],
          fullName: 'ChildProcess should run faked node command',
          location: null,
          status: 'passed',
          title: 'should run faked node command'
        },
        {
          ancestorTitles: ['ChildProcess'],
          failureMessages: [],
          fullName: 'ChildProcess should run faked node command with inject data',
          location: null,
          status: 'passed',
          title: 'should run faked node command with inject data'
        }
      ],
      endTime: 1585832054949,
      message: '',
      name: '/Users/f736trbe/git/connectedcars/node-test/src/unix/command-emulation.test.ts',
      startTime: 1585832049029,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['mysql common', 'generateMySQLServerConfig'],
          failureMessages: [],
          fullName: 'mysql common generateMySQLServerConfig should generate generic config',
          location: null,
          status: 'passed',
          title: 'should generate generic config'
        },
        {
          ancestorTitles: ['mysql common', 'generateMySQLServerConfig'],
          failureMessages: [],
          fullName: 'mysql common generateMySQLServerConfig should set user to mysql',
          location: null,
          status: 'passed',
          title: 'should set user to mysql'
        },
        {
          ancestorTitles: ['mysql common', 'getMySQLServerVersionString'],
          failureMessages: [],
          fullName: 'mysql common getMySQLServerVersionString should return the version string',
          location: null,
          status: 'passed',
          title: 'should return the version string'
        },
        {
          ancestorTitles: ['mysql common', 'getMySQLServerVersionString'],
          failureMessages: [],
          fullName: 'mysql common getMySQLServerVersionString should return an error',
          location: null,
          status: 'passed',
          title: 'should return an error'
        },
        {
          ancestorTitles: ['mysql common', 'getMySQLServerConfig'],
          failureMessages: [],
          fullName: 'mysql common getMySQLServerConfig should return the current mysql config',
          location: null,
          status: 'passed',
          title: 'should return the current mysql config'
        },
        {
          ancestorTitles: ['mysql common', 'startMySQLd'],
          failureMessages: [],
          fullName: 'mysql common startMySQLd it should start a detached mysqld server and get the pid',
          location: null,
          status: 'passed',
          title: 'it should start a detached mysqld server and get the pid'
        }
      ],
      endTime: 1585832055389,
      message: '',
      name: '/Users/f736trbe/git/connectedcars/node-test/src/mysql/mysqld-utils.test.ts',
      startTime: 1585832049100,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['run-process'],
          failureMessages: [],
          fullName: 'run-process should start a process and wait for exit',
          location: null,
          status: 'passed',
          title: 'should start a process and wait for exit'
        },
        {
          ancestorTitles: ['run-process'],
          failureMessages: [],
          fullName: 'run-process should start a process and kill it',
          location: null,
          status: 'passed',
          title: 'should start a process and kill it'
        },
        {
          ancestorTitles: ['run-process'],
          failureMessages: [],
          fullName: 'run-process should start a process that ignores SIGTERM and kill it',
          location: null,
          status: 'passed',
          title: 'should start a process that ignores SIGTERM and kill it'
        },
        {
          ancestorTitles: ['run-process'],
          failureMessages: [],
          fullName: 'run-process should start a process and stop it on output',
          location: null,
          status: 'passed',
          title: 'should start a process and stop it on output'
        },
        {
          ancestorTitles: ['run-process'],
          failureMessages: [],
          fullName: "run-process should start a process that stops when we close it's stdin",
          location: null,
          status: 'passed',
          title: "should start a process that stops when we close it's stdin"
        },
        {
          ancestorTitles: ['run-process'],
          failureMessages: [],
          fullName: 'run-process should completely detach process',
          location: null,
          status: 'passed',
          title: 'should completely detach process'
        },
        {
          ancestorTitles: ['run-process'],
          failureMessages: [],
          fullName: 'run-process should detach and fork a new process',
          location: null,
          status: 'passed',
          title: 'should detach and fork a new process'
        }
      ],
      endTime: 1585832055486,
      message: '',
      name: '/Users/f736trbe/git/connectedcars/node-test/src/unix/run-process.test.ts',
      startTime: 1585832049125,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['HttpServer'],
          failureMessages: [],
          fullName: 'HttpServer Simple GET / with https',
          location: null,
          status: 'passed',
          title: 'Simple GET / with https'
        },
        {
          ancestorTitles: ['HttpServer'],
          failureMessages: [],
          fullName: 'HttpServer Simple GET / with https and client cert',
          location: null,
          status: 'passed',
          title: 'Simple GET / with https and client cert'
        }
      ],
      endTime: 1585832055510,
      message: '',
      name: '/Users/f736trbe/git/connectedcars/node-test/src/http/https-server.test.ts',
      startTime: 1585832054496,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['run-wrapper'],
          failureMessages: [],
          fullName: "run-wrapper should start a process that stops when we close it's stdin",
          location: null,
          status: 'passed',
          title: "should start a process that stops when we close it's stdin"
        },
        {
          ancestorTitles: ['run-wrapper'],
          failureMessages: [],
          fullName: 'run-wrapper should start a process that stops when send SIGTERM to it',
          location: null,
          status: 'passed',
          title: 'should start a process that stops when send SIGTERM to it'
        },
        {
          ancestorTitles: ['run-wrapper'],
          failureMessages: [],
          fullName: 'run-wrapper should start a process that logs to file',
          location: null,
          status: 'passed',
          title: 'should start a process that logs to file'
        },
        {
          ancestorTitles: ['run-wrapper'],
          failureMessages: [],
          fullName: 'run-wrapper should saves a PID file',
          location: null,
          status: 'passed',
          title: 'should saves a PID file'
        },
        {
          ancestorTitles: ['run-wrapper'],
          failureMessages: [],
          fullName: 'run-wrapper should completely detach process',
          location: null,
          status: 'passed',
          title: 'should completely detach process'
        },
        {
          ancestorTitles: ['run-wrapper'],
          failureMessages: [],
          fullName: 'run-wrapper should detach and log to file',
          location: null,
          status: 'passed',
          title: 'should detach and log to file'
        }
      ],
      endTime: 1585832056422,
      message: '',
      name: '/Users/f736trbe/git/connectedcars/node-test/bin/run-wrapper.test.ts',
      startTime: 1585832049139,
      status: 'passed',
      summary: ''
    }
  ],
  wasInterrupted: false
}

export const jestFailedOutput: FormattedTestResults = {
  numFailedTestSuites: 2,
  numFailedTests: 1,
  numPassedTestSuites: 0,
  numPassedTests: 3,
  numPendingTestSuites: 0,
  numPendingTests: 0,
  numRuntimeErrorTestSuites: 0,
  numTodoTests: 0,
  numTotalTestSuites: 1,
  numTotalTests: 4,
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
  startTime: 1586178581006,
  success: false,
  testResults: [
    {
      assertionResults: [
        {
          ancestorTitles: ['checks/eslint'],
          failureMessages: [],
          fullName: 'checks/eslint converts successful eslint',
          location: null,
          status: 'passed',
          title: 'converts successful eslint'
        },
        {
          ancestorTitles: ['describe/name'],
          failureMessages: [
            'Error: expect(received).toStrictEqual(expected) // deep equality\n\n- Expected - 1\n+ Received + 1\n\n Object {\n "conclusion": "success",\n "output": Object {\n "annotations": Array [],\n "summary": "No problems found",\n- "title": "No problems found BUG",\n+ "title": "No problems found",\n },\n }\n at Object.<anonymous> (/home/jagdos/repos/node-ci-tools/src/eslint/eslint.test.ts:61:18)\n at Object.asyncJestTest (/home/jagdos/repos/node-ci-tools/node_modules/jest-jasmine2/build/jasmineAsyncInstall.js:100:37)\n at /home/jagdos/repos/node-ci-tools/node_modules/jest-jasmine2/build/queueRunner.js:45:12\n at new Promise (<anonymous>)\n at mapper (/home/jagdos/repos/node-ci-tools/node_modules/jest-jasmine2/build/queueRunner.js:28:19)\n at /home/jagdos/repos/node-ci-tools/node_modules/jest-jasmine2/build/queueRunner.js:75:41'
          ],
          fullName: 'converts successful eslint with skipped file',
          location: null,
          status: 'failed',
          title: 'converts successful eslint with skipped file'
        },
        {
          ancestorTitles: [],
          failureMessages: [],
          fullName: 'converts failed eslint',
          location: null,
          status: 'passed',
          title: 'converts failed eslint'
        },
        {
          ancestorTitles: [],
          failureMessages: [],
          fullName: 'converts warned eslint',
          location: null,
          status: 'passed',
          title: 'converts warned eslint'
        },
        {
          ancestorTitles: ['jobs/process-vag-can-dtcs'],
          duration: 549,
          failureDetails: [],
          failureMessages: [
            'Error: \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).\u001b[22mtoEqual\u001b[2m(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m) // deep equality\u001b[22m\n\n\u001b[32m- Expected  -  1\u001b[39m\n\u001b[31m+ Received  + 17\u001b[39m\n\n\u001b[32m- Array []\u001b[39m\n\u001b[31m+ Array [\u001b[39m\n\u001b[31m+   RowDataPacket {\u001b[39m\n\u001b[31m+     "attempts": 0,\u001b[39m\n\u001b[31m+     "carId": 124,\u001b[39m\n\u001b[31m+     "code": null,\u001b[39m\n\u001b[31m+     "createdAt": 2023-03-23T13:45:12.000Z,\u001b[39m\n\u001b[31m+     "id": 1,\u001b[39m\n\u001b[31m+     "primaryCanDtcId": 1,\u001b[39m\n\u001b[31m+     "rawCode": "0304",\u001b[39m\n\u001b[31m+     "resolution": null,\u001b[39m\n\u001b[31m+     "resolved": 0,\u001b[39m\n\u001b[31m+     "resolvedGeneric": 0,\u001b[39m\n\u001b[31m+     "task": "{\\"ecu\\": {\\"rxId\\": \\"7E8\\", \\"txId\\": \\"7E0\\", \\"category\\": \\"01\\", \\"transport\\": \\"ISOTP\\", \\"application\\": \\"UDS\\", \\"requestsAndResponses\\": [{\\"response\\": \\"something useful\\", \\"serviceAndDid\\": \\"22F19E\\"}, {\\"response\\": \\"something useful\\", \\"serviceAndDid\\": \\"22F1A2\\"}, {\\"response\\": \\"something useful\\", \\"serviceAndDid\\": \\"22F197\\"}, {\\"response\\": \\"5902FF030400\\", \\"serviceAndDid\\": \\"1902AE\\"}]}, \\"siblings\\": [{\\"rxId\\": \\"7E8\\", \\"txId\\": \\"7E0\\", \\"category\\": \\"01\\", \\"transport\\": \\"ISOTP\\", \\"application\\": \\"OBD\\", \\"requestsAndResponses\\": [{\\"response\\": \\"49026d7976696e\\", \\"serviceAndDid\\": \\"0902\\"}]}]}",\u001b[39m\n\u001b[31m+     "updatedAt": 2023-03-23T13:45:12.000Z,\u001b[39m\n\u001b[31m+     "vendor": "VAG",\u001b[39m\n\u001b[31m+   },\u001b[39m\n\u001b[31m+ ]\u001b[39m\n    at Object.toEqual (/Users/michaelstorgaard/Sites/job-runner-reverse-engineering/src/jobs/process-vag-can-dtcs.it.test.ts:278:30)\n    at runMicrotasks (<anonymous>)\n    at processTicksAndRejections (node:internal/process/task_queues:96:5)'
          ],
          fullName: 'jobs/process-vag-can-dtcs does not processes TL codes',
          invocations: 1,
          location: {
            line: 278,
            column: 30
          },
          numPassingAsserts: 1,
          retryReasons: [],
          status: 'failed',
          title: 'does not processes TL codes'
        }
      ],
      endTime: 1586178581454,
      message:
        ' ● converts successful eslint with skipped file\n\n expect(received).toStrictEqual(expected) // deep equality\n\n - Expected - 1\n + Received + 1\n\n Object {\n "conclusion": "success",\n "output": Object {\n "annotations": Array [],\n "summary": "No problems found",\n - "title": "No problems found BUG",\n + "title": "No problems found",\n },\n }\n\n 59 | sha: \'c61a4ae014360e064eb2a9f76c8a6a55d05e5b88\'\n 60 | })\n > 61 | expect(result).toStrictEqual({\n | ^\n 62 | conclusion: \'success\',\n 63 | output: {\n 64 | title: \'No problems found BUG\',\n\n at Object.<anonymous> (src/eslint/eslint.test.ts:61:18)\n',
      name: '/home/jagdos/repos/node-ci-tools/src/eslint/eslint.test.ts',
      startTime: 1586178581027,
      status: 'failed',
      summary: ''
    }
  ],
  wasInterrupted: false
}

export const jestSkippedOutput: FormattedTestResults = {
  numFailedTestSuites: 0,
  numFailedTests: 0,
  numPassedTestSuites: 1,
  numPassedTests: 8,
  numPendingTestSuites: 0,
  numPendingTests: 1,
  numRuntimeErrorTestSuites: 0,
  numTodoTests: 0,
  numTotalTestSuites: 1,
  numTotalTests: 9,
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
  startTime: 1610318015361,
  success: true,
  testResults: [
    {
      assertionResults: [
        {
          ancestorTitles: ['Tests INSERT IGNORE warnings'],
          failureMessages: [],
          fullName: 'Tests INSERT IGNORE warnings duplicates are equal to warnings when there are no errors',
          location: null,
          status: 'passed',
          title: 'duplicates are equal to warnings when there are no errors'
        },
        {
          ancestorTitles: ['Tests INSERT IGNORE warnings'],
          failureMessages: [],
          fullName: 'Tests INSERT IGNORE warnings inserts a non-faulty batch',
          location: null,
          status: 'passed',
          title: 'inserts a non-faulty batch'
        },
        {
          ancestorTitles: ['Tests INSERT IGNORE warnings'],
          failureMessages: [],
          fullName: 'Tests INSERT IGNORE warnings inserts a single row batch',
          location: null,
          status: 'passed',
          title: 'inserts a single row batch'
        },
        {
          ancestorTitles: ['Tests INSERT IGNORE warnings'],
          failureMessages: [],
          fullName: 'Tests INSERT IGNORE warnings raises a warning on duplicate rows, but only inserts 1',
          location: null,
          status: 'passed',
          title: 'raises a warning on duplicate rows, but only inserts 1'
        },
        {
          ancestorTitles: ['Tests INSERT IGNORE warnings'],
          failureMessages: [],
          fullName: 'Tests INSERT IGNORE warnings ignores types by casting them and raises a warning',
          location: null,
          status: 'passed',
          title: 'ignores types by casting them and raises a warning'
        },
        {
          ancestorTitles: ['Tests INSERT IGNORE warnings'],
          failureMessages: [],
          fullName: 'Tests INSERT IGNORE warnings truncates 64bit integers to int32.MAX',
          location: null,
          status: 'passed',
          title: 'truncates 64bit integers to int32.MAX'
        },
        {
          ancestorTitles: ['Tests INSERT IGNORE warnings'],
          failureMessages: [],
          fullName: 'Tests INSERT IGNORE warnings casts timestamps in odd ways',
          location: null,
          status: 'passed',
          title: 'casts timestamps in odd ways'
        },
        {
          ancestorTitles: ['Tests INSERT IGNORE warnings'],
          failureMessages: [],
          fullName: 'Tests INSERT IGNORE warnings does not give an info property when inserting 1 record',
          location: null,
          status: 'passed',
          title: 'does not give an info property when inserting 1 record'
        },
        {
          ancestorTitles: ['Tests INSERT IGNORE warnings'],
          failureMessages: [],
          fullName: 'Tests INSERT IGNORE warnings is possible to distinguish between duplicates and all other errors',
          location: null,
          status: 'pending',
          title: 'is possible to distinguish between duplicates and all other errors'
        }
      ],
      endTime: 1610318017998,
      message: '',
      name: '/Users/tlb/git/connectedcars/data/src/tests/integration/insert-ignore.test.ts',
      startTime: 1610318015398,
      status: 'passed',
      summary: ''
    }
  ],
  wasInterrupted: false
}

export const jestSnapshotFailed: FormattedTestResults = {
  numFailedTestSuites: 0,
  numFailedTests: 0,
  numPassedTestSuites: 1,
  numPassedTests: 2,
  numPendingTestSuites: 0,
  numPendingTests: 0,
  numRuntimeErrorTestSuites: 0,
  numTodoTests: 0,
  numTotalTestSuites: 1,
  numTotalTests: 2,
  openHandles: [],
  snapshot: {
    added: 0,
    didUpdate: false,
    failure: true,
    filesAdded: 0,
    filesRemoved: 0,
    filesRemovedList: [],
    filesUnmatched: 0,
    filesUpdated: 0,
    matched: 2,
    total: 2,
    unchecked: 2,
    uncheckedKeysByFile: [
      {
        filePath: '/Users/michaelstorgaard/Sites/node-backend/src/analytics/analytics.test.ts',
        keys: ['big-query/analytics getAnalyticsEvent no results 1', 'big-query/analytics getAnalyticsEvents 1']
      }
    ],
    unmatched: 0,
    updated: 0
  },
  startTime: 1683796913983,
  success: false,
  testResults: [
    {
      assertionResults: [
        {
          ancestorTitles: ['analytics/analytics'],
          duration: 26,
          failureDetails: [],
          failureMessages: [],
          fullName: 'analytics/analytics getAnalyticsEvents',
          invocations: 1,
          location: null,
          numPassingAsserts: 0,
          retryReasons: [],
          status: 'passed',
          title: 'getAnalyticsEvents'
        },
        {
          ancestorTitles: ['analytics/analytics'],
          duration: 4,
          failureDetails: [],
          failureMessages: [],
          fullName: 'analytics/analytics getAnalyticsEvent no results',
          invocations: 1,
          location: null,
          numPassingAsserts: 0,
          retryReasons: [],
          status: 'passed',
          title: 'getAnalyticsEvent no results'
        }
      ],
      endTime: 1683796914447,
      message: '',
      name: '/Users/michaelstorgaard/Sites/node-backend/src/analytics/analytics.test.ts',
      startTime: 1683796914004,
      status: 'passed',
      summary: ''
    }
  ],
  wasInterrupted: false
}

export const jestHugeOutput: FormattedTestResults = {
  numFailedTestSuites: 3,
  numFailedTests: 2,
  numPassedTestSuites: 75,
  numPassedTests: 178,
  numPendingTestSuites: 0,
  numPendingTests: 0,
  numRuntimeErrorTestSuites: 1,
  numTodoTests: 0,
  numTotalTestSuites: 78,
  numTotalTests: 180,
  openHandles: [],
  snapshot: {
    added: 0,
    didUpdate: false,
    failure: true,
    filesAdded: 0,
    filesRemoved: 0,
    filesRemovedList: [],
    filesUnmatched: 1,
    filesUpdated: 0,
    matched: 122,
    total: 123,
    unchecked: 0,
    uncheckedKeysByFile: [],
    unmatched: 1,
    updated: 0
  },
  startTime: 1714132425404,
  success: false,
  testResults: [
    {
      assertionResults: [
        {
          ancestorTitles: ['jobs/run-intercom-cleanup', 'runIntercomCleanup'],
          duration: 820,
          failureDetails: [
            {
              matcherResult: {
                actual:
                  'Array [\n  Object {\n    "body": Object {\n      "pagination": Object {\n        "per_page": 150,\n      },\n      "query": Object {\n        "field": "updated_at",\n        "operator": "<",\n        "value": 0,\n      },\n      "sort": Object {\n        "field": "updated_at",\n        "order": "ascending",\n      },\n    },\n    "headers": Object {\n      "accept": "application/json",\n      "accept-encoding": "gzip, compress, deflate, br",\n      "connection": "keep-alive",\n      "content-length": "146",\n      "content-type": "application/json",\n      "host": "localhost",\n      "user-agent": "axios/1.6.8",\n    },\n    "method": "POST",\n    "url": "/contacts/search",\n  },\n  Object {\n    "body": Object {\n      "pagination": Object {\n        "per_page": 150,\n      },\n      "query": Object {\n        "field": "updated_at",\n        "operator": "<",\n        "value": 0,\n      },\n      "sort": Object {\n        "field": "updated_at",\n        "order": "ascending",\n      },\n    },\n    "headers": Object {\n      "accept": "application/json",\n      "accept-encoding": "gzip, compress, deflate, br",\n      "connection": "keep-alive",\n      "content-length": "146",\n      "content-type": "application/json",\n      "host": "localhost",\n      "user-agent": "axios/1.6.8",\n    },\n    "method": "POST",\n    "url": "/contacts/search",\n  },\n  Object {\n    "body": null,\n    "headers": Object {\n      "accept": "application/json",\n      "accept-encoding": "gzip, compress, deflate, br",\n      "connection": "keep-alive",\n      "host": "localhost",\n      "user-agent": "axios/1.6.8",\n    },\n    "method": "DELETE",\n    "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa1",\n  },\n  Object {\n    "body": null,\n    "headers": Object {\n      "accept": "application/json",\n      "accept-encoding": "gzip, compress, deflate, br",\n      "connection": "keep-alive",\n      "host": "localhost",\n      "user-agent": "axios/1.6.8",\n    },\n    "method": "DELETE",\n    "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa1",\n  },\n  Object {\n    "body": null,\n    "headers": Object {\n      "accept": "application/json",\n      "accept-encoding": "gzip, compress, deflate, br",\n      "connection": "keep-alive",\n      "host": "localhost",\n      "user-agent": "axios/1.6.8",\n    },\n    "method": "DELETE",\n    "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa2",\n  },\n  Object {\n    "body": null,\n    "headers": Object {\n      "accept": "application/json",\n      "accept-encoding": "gzip, compress, deflate, br",\n      "connection": "keep-alive",\n      "host": "localhost",\n      "user-agent": "axios/1.6.8",\n    },\n    "method": "DELETE",\n    "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa2",\n  },\n  Object {\n    "body": null,\n    "headers": Object {\n      "accept": "application/json",\n      "accept-encoding": "gzip, compress, deflate, br",\n      "connection": "keep-alive",\n      "host": "localhost",\n      "user-agent": "axios/1.6.8",\n    },\n    "method": "DELETE",\n    "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa3",\n  },\n  Object {\n    "body": null,\n    "headers": Object {\n      "accept": "application/json",\n      "accept-encoding": "gzip, compress, deflate, br",\n      "connection": "keep-alive",\n      "host": "localhost",\n      "user-agent": "axios/1.6.8",\n    },\n    "method": "DELETE",\n    "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa3",\n  },\n  Object {\n    "body": Object {\n      "pagination": Object {\n        "per_page": 150,\n        "starting_after": "Mg==",\n      },\n      "query": Object {\n        "field": "updated_at",\n        "operator": "<",\n        "value": 0,\n      },\n      "sort": Object {\n        "field": "updated_at",\n        "order": "ascending",\n      },\n    },\n    "headers": Object {\n      "accept": "application/json",\n      "accept-encoding": "gzip, compress, deflate, br",\n      "connection": "keep-alive",\n      "content-length": "170",\n      "content-type": "application/json",\n      "host": "localhost",\n      "user-agent": "axios/1.6.8",\n    },\n    "method": "POST",\n    "url": "/contacts/search",\n  },\n  Object {\n    "body": Object {\n      "pagination": Object {\n        "per_page": 150,\n        "starting_after": "Mg==",\n      },\n      "query": Object {\n        "field": "updated_at",\n        "operator": "<",\n        "value": 0,\n      },\n      "sort": Object {\n        "field": "updated_at",\n        "order": "ascending",\n      },\n    },\n    "headers": Object {\n      "accept": "application/json",\n      "accept-encoding": "gzip, compress, deflate, br",\n      "connection": "keep-alive",\n      "content-length": "170",\n      "content-type": "application/json",\n      "host": "localhost",\n      "user-agent": "axios/1.6.8",\n    },\n    "method": "POST",\n    "url": "/contacts/search",\n  },\n  Object {\n    "body": null,\n    "headers": Object {\n      "accept": "application/json",\n      "accept-encoding": "gzip, compress, deflate, br",\n      "connection": "keep-alive",\n      "host": "localhost",\n      "user-agent": "axios/1.6.8",\n    },\n    "method": "DELETE",\n    "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa1",\n  },\n  Object {\n    "body": null,\n    "headers": Object {\n      "accept": "application/json",\n      "accept-encoding": "gzip, compress, deflate, br",\n      "connection": "keep-alive",\n      "host": "localhost",\n      "user-agent": "axios/1.6.8",\n    },\n    "method": "DELETE",\n    "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa1",\n  },\n  Object {\n    "body": null,\n    "headers": Object {\n      "accept": "application/json",\n      "accept-encoding": "gzip, compress, deflate, br",\n      "connection": "keep-alive",\n      "host": "localhost",\n      "user-agent": "axios/1.6.8",\n    },\n    "method": "DELETE",\n    "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa2",\n  },\n  Object {\n    "body": null,\n    "headers": Object {\n      "accept": "application/json",\n      "accept-encoding": "gzip, compress, deflate, br",\n      "connection": "keep-alive",\n      "host": "localhost",\n      "user-agent": "axios/1.6.8",\n    },\n    "method": "DELETE",\n    "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa2",\n  },\n  Object {\n    "body": null,\n    "headers": Object {\n      "accept": "application/json",\n      "accept-encoding": "gzip, compress, deflate, br",\n      "connection": "keep-alive",\n      "host": "localhost",\n      "user-agent": "axios/1.6.8",\n    },\n    "method": "DELETE",\n    "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa3",\n  },\n  Object {\n    "body": null,\n    "headers": Object {\n      "accept": "application/json",\n      "accept-encoding": "gzip, compress, deflate, br",\n      "connection": "keep-alive",\n      "host": "localhost",\n      "user-agent": "axios/1.6.8",\n    },\n    "method": "DELETE",\n    "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa3",\n  },\n  Object {\n    "body": Object {\n      "pagination": Object {\n        "per_page": 150,\n        "starting_after": "Mw==",\n      },\n      "query": Object {\n        "field": "updated_at",\n        "operator": "<",\n        "value": 0,\n      },\n      "sort": Object {\n        "field": "updated_at",\n        "order": "ascending",\n      },\n    },\n    "headers": Object {\n      "accept": "application/json",\n      "accept-encoding": "gzip, compress, deflate, br",\n      "connection": "keep-alive",\n      "content-length": "170",\n      "content-type": "application/json",\n      "host": "localhost",\n      "user-agent": "axios/1.6.8",\n    },\n    "method": "POST",\n    "url": "/contacts/search",\n  },\n  Object {\n    "body": Object {\n      "pagination": Object {\n        "per_page": 150,\n        "starting_after": "Mw==",\n      },\n      "query": Object {\n        "field": "updated_at",\n        "operator": "<",\n        "value": 0,\n      },\n      "sort": Object {\n        "field": "updated_at",\n        "order": "ascending",\n      },\n    },\n    "headers": Object {\n      "accept": "application/json",\n      "accept-encoding": "gzip, compress, deflate, br",\n      "connection": "keep-alive",\n      "content-length": "170",\n      "content-type": "application/json",\n      "host": "localhost",\n      "user-agent": "axios/1.6.8",\n    },\n    "method": "POST",\n    "url": "/contacts/search",\n  },\n  Object {\n    "body": null,\n    "headers": Object {\n      "accept": "application/json",\n      "accept-encoding": "gzip, compress, deflate, br",\n      "connection": "keep-alive",\n      "host": "localhost",\n      "user-agent": "axios/1.6.8",\n    },\n    "method": "DELETE",\n    "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa1",\n  },\n  Object {\n    "body": null,\n    "headers": Object {\n      "accept": "application/json",\n      "accept-encoding": "gzip, compress, deflate, br",\n      "connection": "keep-alive",\n      "host": "localhost",\n      "user-agent": "axios/1.6.8",\n    },\n    "method": "DELETE",\n    "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa1",\n  },\n  Object {\n    "body": null,\n    "headers": Object {\n      "accept": "application/json",\n      "accept-encoding": "gzip, compress, deflate, br",\n      "connection": "keep-alive",\n      "host": "localhost",\n      "user-agent": "axios/1.6.8",\n    },\n    "method": "DELETE",\n    "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa2",\n  },\n  Object {\n    "body": null,\n    "headers": Object {\n      "accept": "application/json",\n      "accept-encoding": "gzip, compress, deflate, br",\n      "connection": "keep-alive",\n      "host": "localhost",\n      "user-agent": "axios/1.6.8",\n    },\n    "method": "DELETE",\n    "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa2",\n  },\n  Object {\n    "body": null,\n    "headers": Object {\n      "accept": "application/json",\n      "accept-encoding": "gzip, compress, deflate, br",\n      "connection": "keep-alive",\n      "host": "localhost",\n      "user-agent": "axios/1.6.8",\n    },\n    "method": "DELETE",\n    "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa3",\n  },\n  Object {\n    "body": null,\n    "headers": Object {\n      "accept": "application/json",\n      "accept-encoding": "gzip, compress, deflate, br",\n      "connection": "keep-alive",\n      "host": "localhost",\n      "user-agent": "axios/1.6.8",\n    },\n    "method": "DELETE",\n    "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa3",\n  },\n]',
                expected:
                  'Array [\n  Object {\n    "body": Object {\n      "pagination": Object {\n        "per_page": 150,\n      },\n      "query": Object {\n        "field": "updated_at",\n        "operator": "<",\n        "value": 0,\n      },\n      "sort": Object {\n        "field": "updated_at",\n        "order": "ascending",\n      },\n    },\n    "headers": Object {\n      "accept": "application/json",\n      "accept-encoding": "gzip, compress, deflate, br",\n      "connection": "keep-alive",\n      "content-length": "146",\n      "content-type": "application/json",\n      "host": "localhost",\n      "user-agent": "axios/1.6.6",\n    },\n    "method": "POST",\n    "url": "/contacts/search",\n  },\n  Object {\n    "body": Object {\n      "pagination": Object {\n        "per_page": 150,\n      },\n      "query": Object {\n        "field": "updated_at",\n        "operator": "<",\n        "value": 0,\n      },\n      "sort": Object {\n        "field": "updated_at",\n        "order": "ascending",\n      },\n    },\n    "headers": Object {\n      "accept": "application/json",\n      "accept-encoding": "gzip, compress, deflate, br",\n      "connection": "keep-alive",\n      "content-length": "146",\n      "content-type": "application/json",\n      "host": "localhost",\n      "user-agent": "axios/1.6.6",\n    },\n    "method": "POST",\n    "url": "/contacts/search",\n  },\n  Object {\n    "body": null,\n    "headers": Object {\n      "accept": "application/json",\n      "accept-encoding": "gzip, compress, deflate, br",\n      "connection": "keep-alive",\n      "host": "localhost",\n      "user-agent": "axios/1.6.6",\n    },\n    "method": "DELETE",\n    "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa1",\n  },\n  Object {\n    "body": null,\n    "headers": Object {\n      "accept": "application/json",\n      "accept-encoding": "gzip, compress, deflate, br",\n      "connection": "keep-alive",\n      "host": "localhost",\n      "user-agent": "axios/1.6.6",\n    },\n    "method": "DELETE",\n    "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa1",\n  },\n  Object {\n    "body": null,\n    "headers": Object {\n      "accept": "application/json",\n      "accept-encoding": "gzip, compress, deflate, br",\n      "connection": "keep-alive",\n      "host": "localhost",\n      "user-agent": "axios/1.6.6",\n    },\n    "method": "DELETE",\n    "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa2",\n  },\n  Object {\n    "body": null,\n    "headers": Object {\n      "accept": "application/json",\n      "accept-encoding": "gzip, compress, deflate, br",\n      "connection": "keep-alive",\n      "host": "localhost",\n      "user-agent": "axios/1.6.6",\n    },\n    "method": "DELETE",\n    "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa2",\n  },\n  Object {\n    "body": null,\n    "headers": Object {\n      "accept": "application/json",\n      "accept-encoding": "gzip, compress, deflate, br",\n      "connection": "keep-alive",\n      "host": "localhost",\n      "user-agent": "axios/1.6.6",\n    },\n    "method": "DELETE",\n    "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa3",\n  },\n  Object {\n    "body": null,\n    "headers": Object {\n      "accept": "application/json",\n      "accept-encoding": "gzip, compress, deflate, br",\n      "connection": "keep-alive",\n      "host": "localhost",\n      "user-agent": "axios/1.6.6",\n    },\n    "method": "DELETE",\n    "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa3",\n  },\n  Object {\n    "body": Object {\n      "pagination": Object {\n        "per_page": 150,\n        "starting_after": "Mg==",\n      },\n      "query": Object {\n        "field": "updated_at",\n        "operator": "<",\n        "value": 0,\n      },\n      "sort": Object {\n        "field": "updated_at",\n        "order": "ascending",\n      },\n    },\n    "headers": Object {\n      "accept": "application/json",\n      "accept-encoding": "gzip, compress, deflate, br",\n      "connection": "keep-alive",\n      "content-length": "170",\n      "content-type": "application/json",\n      "host": "localhost",\n      "user-agent": "axios/1.6.6",\n    },\n    "method": "POST",\n    "url": "/contacts/search",\n  },\n  Object {\n    "body": Object {\n      "pagination": Object {\n        "per_page": 150,\n        "starting_after": "Mg==",\n      },\n      "query": Object {\n        "field": "updated_at",\n        "operator": "<",\n        "value": 0,\n      },\n      "sort": Object {\n        "field": "updated_at",\n        "order": "ascending",\n      },\n    },\n    "headers": Object {\n      "accept": "application/json",\n      "accept-encoding": "gzip, compress, deflate, br",\n      "connection": "keep-alive",\n      "content-length": "170",\n      "content-type": "application/json",\n      "host": "localhost",\n      "user-agent": "axios/1.6.6",\n    },\n    "method": "POST",\n    "url": "/contacts/search",\n  },\n  Object {\n    "body": null,\n    "headers": Object {\n      "accept": "application/json",\n      "accept-encoding": "gzip, compress, deflate, br",\n      "connection": "keep-alive",\n      "host": "localhost",\n      "user-agent": "axios/1.6.6",\n    },\n    "method": "DELETE",\n    "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa1",\n  },\n  Object {\n    "body": null,\n    "headers": Object {\n      "accept": "application/json",\n      "accept-encoding": "gzip, compress, deflate, br",\n      "connection": "keep-alive",\n      "host": "localhost",\n      "user-agent": "axios/1.6.6",\n    },\n    "method": "DELETE",\n    "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa1",\n  },\n  Object {\n    "body": null,\n    "headers": Object {\n      "accept": "application/json",\n      "accept-encoding": "gzip, compress, deflate, br",\n      "connection": "keep-alive",\n      "host": "localhost",\n      "user-agent": "axios/1.6.6",\n    },\n    "method": "DELETE",\n    "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa2",\n  },\n  Object {\n    "body": null,\n    "headers": Object {\n      "accept": "application/json",\n      "accept-encoding": "gzip, compress, deflate, br",\n      "connection": "keep-alive",\n      "host": "localhost",\n      "user-agent": "axios/1.6.6",\n    },\n    "method": "DELETE",\n    "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa2",\n  },\n  Object {\n    "body": null,\n    "headers": Object {\n      "accept": "application/json",\n      "accept-encoding": "gzip, compress, deflate, br",\n      "connection": "keep-alive",\n      "host": "localhost",\n      "user-agent": "axios/1.6.6",\n    },\n    "method": "DELETE",\n    "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa3",\n  },\n  Object {\n    "body": null,\n    "headers": Object {\n      "accept": "application/json",\n      "accept-encoding": "gzip, compress, deflate, br",\n      "connection": "keep-alive",\n      "host": "localhost",\n      "user-agent": "axios/1.6.6",\n    },\n    "method": "DELETE",\n    "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa3",\n  },\n  Object {\n    "body": Object {\n      "pagination": Object {\n        "per_page": 150,\n        "starting_after": "Mw==",\n      },\n      "query": Object {\n        "field": "updated_at",\n        "operator": "<",\n        "value": 0,\n      },\n      "sort": Object {\n        "field": "updated_at",\n        "order": "ascending",\n      },\n    },\n    "headers": Object {\n      "accept": "application/json",\n      "accept-encoding": "gzip, compress, deflate, br",\n      "connection": "keep-alive",\n      "content-length": "170",\n      "content-type": "application/json",\n      "host": "localhost",\n      "user-agent": "axios/1.6.6",\n    },\n    "method": "POST",\n    "url": "/contacts/search",\n  },\n  Object {\n    "body": Object {\n      "pagination": Object {\n        "per_page": 150,\n        "starting_after": "Mw==",\n      },\n      "query": Object {\n        "field": "updated_at",\n        "operator": "<",\n        "value": 0,\n      },\n      "sort": Object {\n        "field": "updated_at",\n        "order": "ascending",\n      },\n    },\n    "headers": Object {\n      "accept": "application/json",\n      "accept-encoding": "gzip, compress, deflate, br",\n      "connection": "keep-alive",\n      "content-length": "170",\n      "content-type": "application/json",\n      "host": "localhost",\n      "user-agent": "axios/1.6.6",\n    },\n    "method": "POST",\n    "url": "/contacts/search",\n  },\n  Object {\n    "body": null,\n    "headers": Object {\n      "accept": "application/json",\n      "accept-encoding": "gzip, compress, deflate, br",\n      "connection": "keep-alive",\n      "host": "localhost",\n      "user-agent": "axios/1.6.6",\n    },\n    "method": "DELETE",\n    "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa1",\n  },\n  Object {\n    "body": null,\n    "headers": Object {\n      "accept": "application/json",\n      "accept-encoding": "gzip, compress, deflate, br",\n      "connection": "keep-alive",\n      "host": "localhost",\n      "user-agent": "axios/1.6.6",\n    },\n    "method": "DELETE",\n    "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa1",\n  },\n  Object {\n    "body": null,\n    "headers": Object {\n      "accept": "application/json",\n      "accept-encoding": "gzip, compress, deflate, br",\n      "connection": "keep-alive",\n      "host": "localhost",\n      "user-agent": "axios/1.6.6",\n    },\n    "method": "DELETE",\n    "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa2",\n  },\n  Object {\n    "body": null,\n    "headers": Object {\n      "accept": "application/json",\n      "accept-encoding": "gzip, compress, deflate, br",\n      "connection": "keep-alive",\n      "host": "localhost",\n      "user-agent": "axios/1.6.6",\n    },\n    "method": "DELETE",\n    "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa2",\n  },\n  Object {\n    "body": null,\n    "headers": Object {\n      "accept": "application/json",\n      "accept-encoding": "gzip, compress, deflate, br",\n      "connection": "keep-alive",\n      "host": "localhost",\n      "user-agent": "axios/1.6.6",\n    },\n    "method": "DELETE",\n    "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa3",\n  },\n  Object {\n    "body": null,\n    "headers": Object {\n      "accept": "application/json",\n      "accept-encoding": "gzip, compress, deflate, br",\n      "connection": "keep-alive",\n      "host": "localhost",\n      "user-agent": "axios/1.6.6",\n    },\n    "method": "DELETE",\n    "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa3",\n  },\n]',
                message:
                  'expect(received).toMatchSnapshot()\n\nSnapshot name: `jobs/run-intercom-cleanup runIntercomCleanup runs Intercom cleanup 1`\n\n- Snapshot  - 24\n+ Received  + 24\n\n@@ -19,11 +19,11 @@\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "content-length": "146",\n        "content-type": "application/json",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "POST",\n      "url": "/contacts/search",\n    },\n    Object {\n@@ -46,11 +46,11 @@\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "content-length": "146",\n        "content-type": "application/json",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "POST",\n      "url": "/contacts/search",\n    },\n    Object {\n@@ -58,11 +58,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa1",\n    },\n    Object {\n@@ -70,11 +70,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa1",\n    },\n    Object {\n@@ -82,11 +82,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa2",\n    },\n    Object {\n@@ -94,11 +94,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa2",\n    },\n    Object {\n@@ -106,11 +106,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa3",\n    },\n    Object {\n@@ -118,11 +118,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa3",\n    },\n    Object {\n@@ -146,11 +146,11 @@\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "content-length": "170",\n        "content-type": "application/json",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "POST",\n      "url": "/contacts/search",\n    },\n    Object {\n@@ -174,11 +174,11 @@\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "content-length": "170",\n        "content-type": "application/json",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "POST",\n      "url": "/contacts/search",\n    },\n    Object {\n@@ -186,11 +186,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa1",\n    },\n    Object {\n@@ -198,11 +198,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa1",\n    },\n    Object {\n@@ -210,11 +210,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa2",\n    },\n    Object {\n@@ -222,11 +222,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa2",\n    },\n    Object {\n@@ -234,11 +234,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa3",\n    },\n    Object {\n@@ -246,11 +246,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa3",\n    },\n    Object {\n@@ -274,11 +274,11 @@\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "content-length": "170",\n        "content-type": "application/json",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "POST",\n      "url": "/contacts/search",\n    },\n    Object {\n@@ -302,11 +302,11 @@\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "content-length": "170",\n        "content-type": "application/json",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "POST",\n      "url": "/contacts/search",\n    },\n    Object {\n@@ -314,11 +314,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa1",\n    },\n    Object {\n@@ -326,11 +326,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa1",\n    },\n    Object {\n@@ -338,11 +338,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa2",\n    },\n    Object {\n@@ -350,11 +350,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa2",\n    },\n    Object {\n@@ -362,11 +362,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa3",\n    },\n    Object {\n@@ -374,11 +374,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa3",\n    },\n  ]',
                name: 'toMatchSnapshot',
                pass: false
              }
            }
          ],
          failureMessages: [
            'Error: expect(received).toMatchSnapshot()\n\nSnapshot name: `jobs/run-intercom-cleanup runIntercomCleanup runs Intercom cleanup 1`\n\n- Snapshot  - 24\n+ Received  + 24\n\n@@ -19,11 +19,11 @@\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "content-length": "146",\n        "content-type": "application/json",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "POST",\n      "url": "/contacts/search",\n    },\n    Object {\n@@ -46,11 +46,11 @@\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "content-length": "146",\n        "content-type": "application/json",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "POST",\n      "url": "/contacts/search",\n    },\n    Object {\n@@ -58,11 +58,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa1",\n    },\n    Object {\n@@ -70,11 +70,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa1",\n    },\n    Object {\n@@ -82,11 +82,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa2",\n    },\n    Object {\n@@ -94,11 +94,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa2",\n    },\n    Object {\n@@ -106,11 +106,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa3",\n    },\n    Object {\n@@ -118,11 +118,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa3",\n    },\n    Object {\n@@ -146,11 +146,11 @@\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "content-length": "170",\n        "content-type": "application/json",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "POST",\n      "url": "/contacts/search",\n    },\n    Object {\n@@ -174,11 +174,11 @@\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "content-length": "170",\n        "content-type": "application/json",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "POST",\n      "url": "/contacts/search",\n    },\n    Object {\n@@ -186,11 +186,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa1",\n    },\n    Object {\n@@ -198,11 +198,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa1",\n    },\n    Object {\n@@ -210,11 +210,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa2",\n    },\n    Object {\n@@ -222,11 +222,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa2",\n    },\n    Object {\n@@ -234,11 +234,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa3",\n    },\n    Object {\n@@ -246,11 +246,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa3",\n    },\n    Object {\n@@ -274,11 +274,11 @@\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "content-length": "170",\n        "content-type": "application/json",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "POST",\n      "url": "/contacts/search",\n    },\n    Object {\n@@ -302,11 +302,11 @@\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "content-length": "170",\n        "content-type": "application/json",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "POST",\n      "url": "/contacts/search",\n    },\n    Object {\n@@ -314,11 +314,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa1",\n    },\n    Object {\n@@ -326,11 +326,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa1",\n    },\n    Object {\n@@ -338,11 +338,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa2",\n    },\n    Object {\n@@ -350,11 +350,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa2",\n    },\n    Object {\n@@ -362,11 +362,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa3",\n    },\n    Object {\n@@ -374,11 +374,11 @@\n      "headers": Object {\n        "accept": "application/json",\n        "accept-encoding": "gzip, compress, deflate, br",\n        "connection": "keep-alive",\n        "host": "localhost",\n-       "user-agent": "axios/1.6.6",\n+       "user-agent": "axios/1.6.8",\n      },\n      "method": "DELETE",\n      "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa3",\n    },\n  ]\n    at Object.<anonymous> (/Users/michaelstorgaard/Sites/job-runner-cleanup/src/jobs/run-intercom-cleanup.it.test.ts:58:11)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)'
          ],
          fullName: 'jobs/run-intercom-cleanup runIntercomCleanup runs Intercom cleanup',
          invocations: 1,
          location: null,
          numPassingAsserts: 13,
          retryReasons: [],
          status: 'failed',
          title: 'runs Intercom cleanup'
        },
        {
          ancestorTitles: ['jobs/run-intercom-cleanup', 'runIntercomCleanup'],
          duration: 11,
          failureDetails: [],
          failureMessages: [],
          fullName: 'jobs/run-intercom-cleanup runIntercomCleanup skips cleanup if already run',
          invocations: 1,
          location: null,
          numPassingAsserts: 1,
          retryReasons: [],
          status: 'passed',
          title: 'skips cleanup if already run'
        }
      ],
      endTime: 1714132427262,
      message:
        '  ● jobs/run-intercom-cleanup › runIntercomCleanup › runs Intercom cleanup\n\n    expect(received).toMatchSnapshot()\n\n    Snapshot name: `jobs/run-intercom-cleanup runIntercomCleanup runs Intercom cleanup 1`\n\n    - Snapshot  - 24\n    + Received  + 24\n\n    @@ -19,11 +19,11 @@\n            "accept-encoding": "gzip, compress, deflate, br",\n            "connection": "keep-alive",\n            "content-length": "146",\n            "content-type": "application/json",\n            "host": "localhost",\n    -       "user-agent": "axios/1.6.6",\n    +       "user-agent": "axios/1.6.8",\n          },\n          "method": "POST",\n          "url": "/contacts/search",\n        },\n        Object {\n    @@ -46,11 +46,11 @@\n            "accept-encoding": "gzip, compress, deflate, br",\n            "connection": "keep-alive",\n            "content-length": "146",\n            "content-type": "application/json",\n            "host": "localhost",\n    -       "user-agent": "axios/1.6.6",\n    +       "user-agent": "axios/1.6.8",\n          },\n          "method": "POST",\n          "url": "/contacts/search",\n        },\n        Object {\n    @@ -58,11 +58,11 @@\n          "headers": Object {\n            "accept": "application/json",\n            "accept-encoding": "gzip, compress, deflate, br",\n            "connection": "keep-alive",\n            "host": "localhost",\n    -       "user-agent": "axios/1.6.6",\n    +       "user-agent": "axios/1.6.8",\n          },\n          "method": "DELETE",\n          "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa1",\n        },\n        Object {\n    @@ -70,11 +70,11 @@\n          "headers": Object {\n            "accept": "application/json",\n            "accept-encoding": "gzip, compress, deflate, br",\n            "connection": "keep-alive",\n            "host": "localhost",\n    -       "user-agent": "axios/1.6.6",\n    +       "user-agent": "axios/1.6.8",\n          },\n          "method": "DELETE",\n          "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa1",\n        },\n        Object {\n    @@ -82,11 +82,11 @@\n          "headers": Object {\n            "accept": "application/json",\n            "accept-encoding": "gzip, compress, deflate, br",\n            "connection": "keep-alive",\n            "host": "localhost",\n    -       "user-agent": "axios/1.6.6",\n    +       "user-agent": "axios/1.6.8",\n          },\n          "method": "DELETE",\n          "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa2",\n        },\n        Object {\n    @@ -94,11 +94,11 @@\n          "headers": Object {\n            "accept": "application/json",\n            "accept-encoding": "gzip, compress, deflate, br",\n            "connection": "keep-alive",\n            "host": "localhost",\n    -       "user-agent": "axios/1.6.6",\n    +       "user-agent": "axios/1.6.8",\n          },\n          "method": "DELETE",\n          "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa2",\n        },\n        Object {\n    @@ -106,11 +106,11 @@\n          "headers": Object {\n            "accept": "application/json",\n            "accept-encoding": "gzip, compress, deflate, br",\n            "connection": "keep-alive",\n            "host": "localhost",\n    -       "user-agent": "axios/1.6.6",\n    +       "user-agent": "axios/1.6.8",\n          },\n          "method": "DELETE",\n          "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa3",\n        },\n        Object {\n    @@ -118,11 +118,11 @@\n          "headers": Object {\n            "accept": "application/json",\n            "accept-encoding": "gzip, compress, deflate, br",\n            "connection": "keep-alive",\n            "host": "localhost",\n    -       "user-agent": "axios/1.6.6",\n    +       "user-agent": "axios/1.6.8",\n          },\n          "method": "DELETE",\n          "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa3",\n        },\n        Object {\n    @@ -146,11 +146,11 @@\n            "accept-encoding": "gzip, compress, deflate, br",\n            "connection": "keep-alive",\n            "content-length": "170",\n            "content-type": "application/json",\n            "host": "localhost",\n    -       "user-agent": "axios/1.6.6",\n    +       "user-agent": "axios/1.6.8",\n          },\n          "method": "POST",\n          "url": "/contacts/search",\n        },\n        Object {\n    @@ -174,11 +174,11 @@\n            "accept-encoding": "gzip, compress, deflate, br",\n            "connection": "keep-alive",\n            "content-length": "170",\n            "content-type": "application/json",\n            "host": "localhost",\n    -       "user-agent": "axios/1.6.6",\n    +       "user-agent": "axios/1.6.8",\n          },\n          "method": "POST",\n          "url": "/contacts/search",\n        },\n        Object {\n    @@ -186,11 +186,11 @@\n          "headers": Object {\n            "accept": "application/json",\n            "accept-encoding": "gzip, compress, deflate, br",\n            "connection": "keep-alive",\n            "host": "localhost",\n    -       "user-agent": "axios/1.6.6",\n    +       "user-agent": "axios/1.6.8",\n          },\n          "method": "DELETE",\n          "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa1",\n        },\n        Object {\n    @@ -198,11 +198,11 @@\n          "headers": Object {\n            "accept": "application/json",\n            "accept-encoding": "gzip, compress, deflate, br",\n            "connection": "keep-alive",\n            "host": "localhost",\n    -       "user-agent": "axios/1.6.6",\n    +       "user-agent": "axios/1.6.8",\n          },\n          "method": "DELETE",\n          "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa1",\n        },\n        Object {\n    @@ -210,11 +210,11 @@\n          "headers": Object {\n            "accept": "application/json",\n            "accept-encoding": "gzip, compress, deflate, br",\n            "connection": "keep-alive",\n            "host": "localhost",\n    -       "user-agent": "axios/1.6.6",\n    +       "user-agent": "axios/1.6.8",\n          },\n          "method": "DELETE",\n          "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa2",\n        },\n        Object {\n    @@ -222,11 +222,11 @@\n          "headers": Object {\n            "accept": "application/json",\n            "accept-encoding": "gzip, compress, deflate, br",\n            "connection": "keep-alive",\n            "host": "localhost",\n    -       "user-agent": "axios/1.6.6",\n    +       "user-agent": "axios/1.6.8",\n          },\n          "method": "DELETE",\n          "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa2",\n        },\n        Object {\n    @@ -234,11 +234,11 @@\n          "headers": Object {\n            "accept": "application/json",\n            "accept-encoding": "gzip, compress, deflate, br",\n            "connection": "keep-alive",\n            "host": "localhost",\n    -       "user-agent": "axios/1.6.6",\n    +       "user-agent": "axios/1.6.8",\n          },\n          "method": "DELETE",\n          "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa3",\n        },\n        Object {\n    @@ -246,11 +246,11 @@\n          "headers": Object {\n            "accept": "application/json",\n            "accept-encoding": "gzip, compress, deflate, br",\n            "connection": "keep-alive",\n            "host": "localhost",\n    -       "user-agent": "axios/1.6.6",\n    +       "user-agent": "axios/1.6.8",\n          },\n          "method": "DELETE",\n          "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa3",\n        },\n        Object {\n    @@ -274,11 +274,11 @@\n            "accept-encoding": "gzip, compress, deflate, br",\n            "connection": "keep-alive",\n            "content-length": "170",\n            "content-type": "application/json",\n            "host": "localhost",\n    -       "user-agent": "axios/1.6.6",\n    +       "user-agent": "axios/1.6.8",\n          },\n          "method": "POST",\n          "url": "/contacts/search",\n        },\n        Object {\n    @@ -302,11 +302,11 @@\n            "accept-encoding": "gzip, compress, deflate, br",\n            "connection": "keep-alive",\n            "content-length": "170",\n            "content-type": "application/json",\n            "host": "localhost",\n    -       "user-agent": "axios/1.6.6",\n    +       "user-agent": "axios/1.6.8",\n          },\n          "method": "POST",\n          "url": "/contacts/search",\n        },\n        Object {\n    @@ -314,11 +314,11 @@\n          "headers": Object {\n            "accept": "application/json",\n            "accept-encoding": "gzip, compress, deflate, br",\n            "connection": "keep-alive",\n            "host": "localhost",\n    -       "user-agent": "axios/1.6.6",\n    +       "user-agent": "axios/1.6.8",\n          },\n          "method": "DELETE",\n          "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa1",\n        },\n        Object {\n    @@ -326,11 +326,11 @@\n          "headers": Object {\n            "accept": "application/json",\n            "accept-encoding": "gzip, compress, deflate, br",\n            "connection": "keep-alive",\n            "host": "localhost",\n    -       "user-agent": "axios/1.6.6",\n    +       "user-agent": "axios/1.6.8",\n          },\n          "method": "DELETE",\n          "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa1",\n        },\n        Object {\n    @@ -338,11 +338,11 @@\n          "headers": Object {\n            "accept": "application/json",\n            "accept-encoding": "gzip, compress, deflate, br",\n            "connection": "keep-alive",\n            "host": "localhost",\n    -       "user-agent": "axios/1.6.6",\n    +       "user-agent": "axios/1.6.8",\n          },\n          "method": "DELETE",\n          "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa2",\n        },\n        Object {\n    @@ -350,11 +350,11 @@\n          "headers": Object {\n            "accept": "application/json",\n            "accept-encoding": "gzip, compress, deflate, br",\n            "connection": "keep-alive",\n            "host": "localhost",\n    -       "user-agent": "axios/1.6.6",\n    +       "user-agent": "axios/1.6.8",\n          },\n          "method": "DELETE",\n          "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa2",\n        },\n        Object {\n    @@ -362,11 +362,11 @@\n          "headers": Object {\n            "accept": "application/json",\n            "accept-encoding": "gzip, compress, deflate, br",\n            "connection": "keep-alive",\n            "host": "localhost",\n    -       "user-agent": "axios/1.6.6",\n    +       "user-agent": "axios/1.6.8",\n          },\n          "method": "DELETE",\n          "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa3",\n        },\n        Object {\n    @@ -374,11 +374,11 @@\n          "headers": Object {\n            "accept": "application/json",\n            "accept-encoding": "gzip, compress, deflate, br",\n            "connection": "keep-alive",\n            "host": "localhost",\n    -       "user-agent": "axios/1.6.6",\n    +       "user-agent": "axios/1.6.8",\n          },\n          "method": "DELETE",\n          "url": "/contacts/aaaaaaaaaaaaaaaaaaaaaaa3",\n        },\n      ]\n\n      56 |           return output\n      57 |         })\n    > 58 |       ).toMatchSnapshot()\n         |           ^\n      59 |       for (const req of server.getJsonRequests<IntercomSearchParams>()) {\n      60 |         if (req.body) {\n      61 |           expect(req.body?.query.value).toBeGreaterThanOrEqual(1533562615)\n\n      at Object.<anonymous> (src/jobs/run-intercom-cleanup.it.test.ts:58:11)\n',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/jobs/run-intercom-cleanup.it.test.ts',
      startTime: 1714132425423,
      status: 'failed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['data/db/vehicles', 'getArchivedVehicles'],
          duration: 59,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/vehicles getArchivedVehicles gets archived vehicles',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'gets archived vehicles'
        },
        {
          ancestorTitles: ['data/db/vehicles', 'getArchivedVehicles'],
          duration: 26,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/vehicles getArchivedVehicles gets archived vehicles with same date',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'gets archived vehicles with same date'
        },
        {
          ancestorTitles: ['data/db/vehicles', 'getArchivedVehicles'],
          duration: 26,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/vehicles getArchivedVehicles gets no archived vehicles with same date',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'gets no archived vehicles with same date'
        },
        {
          ancestorTitles: ['data/db/vehicles', 'getArchivedVehicles'],
          duration: 26,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/vehicles getArchivedVehicles gets no archived vehicles',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'gets no archived vehicles'
        },
        {
          ancestorTitles: ['data/db/vehicles', 'getHistoricVehiclesByUsers'],
          duration: 27,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/vehicles getHistoricVehiclesByUsers gets historic vehicles by users',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'gets historic vehicles by users'
        },
        {
          ancestorTitles: ['data/db/vehicles', 'getHistoricVehiclesByUsers'],
          duration: 27,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/vehicles getHistoricVehiclesByUsers gets no historic vehicles by users',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'gets no historic vehicles by users'
        },
        {
          ancestorTitles: ['data/db/vehicles', 'getVehicleAccessesWithoutUser'],
          duration: 25,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/vehicles getVehicleAccessesWithoutUser gets vehicle accesses without user',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'gets vehicle accesses without user'
        },
        {
          ancestorTitles: ['data/db/vehicles', 'getVehicleAccessesWithoutUser'],
          duration: 27,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/vehicles getVehicleAccessesWithoutUser gets no vehicle accesses without user',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'gets no vehicle accesses without user'
        },
        {
          ancestorTitles: ['data/db/vehicles', 'clearVehicleIdentifiers'],
          duration: 28,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/vehicles clearVehicleIdentifiers clears vehicle identifiers',
          invocations: 1,
          location: null,
          numPassingAsserts: 5,
          retryReasons: [],
          status: 'passed',
          title: 'clears vehicle identifiers'
        },
        {
          ancestorTitles: ['data/db/vehicles', 'getPromptedBlockedVehicles'],
          duration: 26,
          failureDetails: [],
          failureMessages: [],
          fullName:
            'data/db/vehicles getPromptedBlockedVehicles runs query for getting vehicles that failed to self activate',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'runs query for getting vehicles that failed to self activate'
        },
        {
          ancestorTitles: ['data/db/vehicles', 'getPromptedBlockedVehicles'],
          duration: 26,
          failureDetails: [],
          failureMessages: [],
          fullName:
            'data/db/vehicles getPromptedBlockedVehicles runs query for getting vehicles that failed to self activate with no results index',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'runs query for getting vehicles that failed to self activate with no results index'
        }
      ],
      endTime: 1714132427875,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/data/db/vehicles.it.test.ts',
      startTime: 1714132427265,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['data/db/car-profilings', 'deleteVehicleProfilings'],
          duration: 367,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/car-profilings deleteVehicleProfilings deletes car profilings',
          invocations: 1,
          location: null,
          numPassingAsserts: 8,
          retryReasons: [],
          status: 'passed',
          title: 'deletes car profilings'
        },
        {
          ancestorTitles: ['data/db/car-profilings', 'deleteVehicleProfilings'],
          duration: 295,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/car-profilings deleteVehicleProfilings deletes car profilings with period',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'deletes car profilings with period'
        }
      ],
      endTime: 1714132428716,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/data/db/vehicle-profilings.it.test.ts',
      startTime: 1714132427876,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [],
      coverage: {},
      endTime: 1714132452019,
      message:
        '  ● Test suite failed to run\n\n    expect(received).toEqual(expected) // deep equality\n\n    - Expected  - 0\n    + Received  + 1\n\n    @@ -1,10 +1,11 @@\n      Object {\n        "CalcFuelUsed": 60,\n        "CalcVehicleIdleStates": 60,\n        "CanAdblueLevelMm": 60,\n        "CanAdblueRemainingDistanceKm": 60,\n    +   "CanChargingStates": 60,\n        "CanExceededOilChangeDays": 60,\n        "CanExceededOilChangeKm": 60,\n        "CanFuelConsumptionLph": 60,\n        "CanHighVoltageBatteryHealthPercent": 60,\n        "CanHighVoltageBatteryTemperatures": 60,\n\n      90 |     test(\'gets first record time for charge levels percent\', async () => {\n      91 |       await db.query(\n    > 92 |         "insert into `CarChargeLevelsPercent` (`carId`, `percent`, `recordedAt`) values (1, 42, \'2019-08-06 13:37:00\'), (2, 85, CURRENT_TIMESTAMP)",\n         |                                                ^\n      93 |         \'connectedcars_Data01\'\n      94 |       )\n      95 |\n\n      at src/data/db/vehicle-data-cleanup.it.test.ts:92:48\n      at src/data/db/vehicle-data-cleanup.it.test.ts:31:3\n      at Object.<anonymous> (src/data/db/vehicle-data-cleanup.it.test.ts:14:1)\n',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/data/db/vehicle-data-cleanup.it.test.ts',
      startTime: 1714132452019,
      status: 'failed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['data/db/vehicle-trips', 'deleteVehicleTrips'],
          duration: 317,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/vehicle-trips deleteVehicleTrips deletes vehicle trips',
          invocations: 1,
          location: null,
          numPassingAsserts: 8,
          retryReasons: [],
          status: 'passed',
          title: 'deletes vehicle trips'
        },
        {
          ancestorTitles: ['data/db/vehicle-trips', 'deleteVehicleTrips'],
          duration: 198,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/vehicle-trips deleteVehicleTrips deletes vehicle trips with period',
          invocations: 1,
          location: null,
          numPassingAsserts: 7,
          retryReasons: [],
          status: 'passed',
          title: 'deletes vehicle trips with period'
        },
        {
          ancestorTitles: ['data/db/vehicle-trips', 'deleteVehicleTrips'],
          duration: 177,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/vehicle-trips deleteVehicleTrips deletes no vehicle trips',
          invocations: 1,
          location: null,
          numPassingAsserts: 5,
          retryReasons: [],
          status: 'passed',
          title: 'deletes no vehicle trips'
        }
      ],
      endTime: 1714132429771,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/data/db/vehicle-trips.it.test.ts',
      startTime: 1714132428899,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['data/db/car-outdoor-temperatures', 'deleteVehicleOutdoorTemperatures'],
          duration: 348,
          failureDetails: [],
          failureMessages: [],
          fullName:
            'data/db/car-outdoor-temperatures deleteVehicleOutdoorTemperatures deletes car outdoor temperatures',
          invocations: 1,
          location: null,
          numPassingAsserts: 8,
          retryReasons: [],
          status: 'passed',
          title: 'deletes car outdoor temperatures'
        },
        {
          ancestorTitles: ['data/db/car-outdoor-temperatures', 'deleteVehicleOutdoorTemperatures'],
          duration: 315,
          failureDetails: [],
          failureMessages: [],
          fullName:
            'data/db/car-outdoor-temperatures deleteVehicleOutdoorTemperatures deletes car outdoor temperatures with period',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'deletes car outdoor temperatures with period'
        }
      ],
      endTime: 1714132430614,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/data/db/vehicle-outdoor-temperatures.it.test.ts',
      startTime: 1714132429776,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['data/db/vehicle-speedometers', 'deleteVehicleSpeedometer'],
          duration: 405,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/vehicle-speedometers deleteVehicleSpeedometer deletes vehicle speedometers',
          invocations: 1,
          location: null,
          numPassingAsserts: 8,
          retryReasons: [],
          status: 'passed',
          title: 'deletes vehicle speedometers'
        },
        {
          ancestorTitles: ['data/db/vehicle-speedometers', 'deleteVehicleSpeedometer'],
          duration: 271,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/vehicle-speedometers deleteVehicleSpeedometer deletes vehicle speedometers with period',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'deletes vehicle speedometers with period'
        }
      ],
      endTime: 1714132431457,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/data/db/vehicle-speedometers.it.test.ts',
      startTime: 1714132430615,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['jobs/run-purged-vehicle-cleanup', 'runVehicleCleanupForFailedSelfActivations'],
          duration: 254,
          failureDetails: [],
          failureMessages: [],
          fullName:
            'jobs/run-purged-vehicle-cleanup runVehicleCleanupForFailedSelfActivations runs vehicle cleanup for car purges',
          invocations: 1,
          location: null,
          numPassingAsserts: 28,
          retryReasons: [],
          status: 'passed',
          title: 'runs vehicle cleanup for car purges'
        },
        {
          ancestorTitles: ['jobs/run-purged-vehicle-cleanup', 'runVehicleCleanupForFailedSelfActivations'],
          duration: 161,
          failureDetails: [],
          failureMessages: [],
          fullName:
            'jobs/run-purged-vehicle-cleanup runVehicleCleanupForFailedSelfActivations skips cleanup without vehicles found',
          invocations: 1,
          location: null,
          numPassingAsserts: 2,
          retryReasons: [],
          status: 'passed',
          title: 'skips cleanup without vehicles found'
        }
      ],
      endTime: 1714132432082,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/jobs/run-purged-vehicle-cleanup.it.test.ts',
      startTime: 1714132431470,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: [
            'jobs/run-vehicle-cleanup-for-failed-self-activations',
            'runVehicleCleanupForFailedSelfActivations'
          ],
          duration: 284,
          failureDetails: [],
          failureMessages: [],
          fullName:
            'jobs/run-vehicle-cleanup-for-failed-self-activations runVehicleCleanupForFailedSelfActivations runs vehicle cleanup for failed self activations',
          invocations: 1,
          location: null,
          numPassingAsserts: 28,
          retryReasons: [],
          status: 'passed',
          title: 'runs vehicle cleanup for failed self activations'
        },
        {
          ancestorTitles: [
            'jobs/run-vehicle-cleanup-for-failed-self-activations',
            'runVehicleCleanupForFailedSelfActivations'
          ],
          duration: 160,
          failureDetails: [],
          failureMessages: [],
          fullName:
            'jobs/run-vehicle-cleanup-for-failed-self-activations runVehicleCleanupForFailedSelfActivations skips cleanup without vehicles found',
          invocations: 1,
          location: null,
          numPassingAsserts: 2,
          retryReasons: [],
          status: 'passed',
          title: 'skips cleanup without vehicles found'
        }
      ],
      endTime: 1714132432701,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/jobs/run-vehicle-cleanup-for-failed-self-activations.it.test.ts',
      startTime: 1714132432084,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['data/db/vehicle-positions', 'deleteVehiclePositions'],
          duration: 255,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/vehicle-positions deleteVehiclePositions deletes vehicle positions',
          invocations: 1,
          location: null,
          numPassingAsserts: 11,
          retryReasons: [],
          status: 'passed',
          title: 'deletes vehicle positions'
        },
        {
          ancestorTitles: ['data/db/vehicle-positions', 'deleteVehiclePositions'],
          duration: 193,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/vehicle-positions deleteVehiclePositions deletes vehicle positions with period',
          invocations: 1,
          location: null,
          numPassingAsserts: 7,
          retryReasons: [],
          status: 'passed',
          title: 'deletes vehicle positions with period'
        }
      ],
      endTime: 1714132433402,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/data/db/vehicle-positions.it.test.ts',
      startTime: 1714132432703,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['jobs/run-archived-vehicle-cleanup', 'runArchivedVehicleCleanup'],
          duration: 273,
          failureDetails: [],
          failureMessages: [],
          fullName: 'jobs/run-archived-vehicle-cleanup runArchivedVehicleCleanup runs archived vehicle cleanup',
          invocations: 1,
          location: null,
          numPassingAsserts: 27,
          retryReasons: [],
          status: 'passed',
          title: 'runs archived vehicle cleanup'
        },
        {
          ancestorTitles: ['jobs/run-archived-vehicle-cleanup', 'runArchivedVehicleCleanup'],
          duration: 169,
          failureDetails: [],
          failureMessages: [],
          fullName: 'jobs/run-archived-vehicle-cleanup runArchivedVehicleCleanup skips cleanup without vehicles',
          invocations: 1,
          location: null,
          numPassingAsserts: 2,
          retryReasons: [],
          status: 'passed',
          title: 'skips cleanup without vehicles'
        }
      ],
      endTime: 1714132434036,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/jobs/run-archived-vehicle-cleanup.it.test.ts',
      startTime: 1714132433409,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['jobs/run-vehicle-cleanup-for-archived-users', 'runVehicleCleanupForArchivedUsers'],
          duration: 279,
          failureDetails: [],
          failureMessages: [],
          fullName:
            'jobs/run-vehicle-cleanup-for-archived-users runVehicleCleanupForArchivedUsers runs vehicle cleanup for archived users',
          invocations: 1,
          location: null,
          numPassingAsserts: 26,
          retryReasons: [],
          status: 'passed',
          title: 'runs vehicle cleanup for archived users'
        },
        {
          ancestorTitles: ['jobs/run-vehicle-cleanup-for-archived-users', 'runVehicleCleanupForArchivedUsers'],
          duration: 200,
          failureDetails: [],
          failureMessages: [],
          fullName:
            'jobs/run-vehicle-cleanup-for-archived-users runVehicleCleanupForArchivedUsers skips cleanup without users',
          invocations: 1,
          location: null,
          numPassingAsserts: 2,
          retryReasons: [],
          status: 'passed',
          title: 'skips cleanup without users'
        }
      ],
      endTime: 1714132434794,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/jobs/run-vehicle-cleanup-for-archived-users.it.test.ts',
      startTime: 1714132434043,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['jobs/run-buckets-cleanup', 'runBucketsCleanup'],
          duration: 71,
          failureDetails: [],
          failureMessages: [],
          fullName: 'jobs/run-buckets-cleanup runBucketsCleanup it deletes and keeps objects',
          invocations: 1,
          location: null,
          numPassingAsserts: 4,
          retryReasons: [],
          status: 'passed',
          title: 'it deletes and keeps objects'
        },
        {
          ancestorTitles: ['jobs/run-buckets-cleanup', 'runBucketsCleanup vehicle files'],
          duration: 39,
          failureDetails: [],
          failureMessages: [],
          fullName:
            'jobs/run-buckets-cleanup runBucketsCleanup vehicle files it cleans vehicle files for archived vehicles',
          invocations: 1,
          location: null,
          numPassingAsserts: 4,
          retryReasons: [],
          status: 'passed',
          title: 'it cleans vehicle files for archived vehicles'
        },
        {
          ancestorTitles: ['jobs/run-buckets-cleanup', 'runBucketsCleanup process indexes'],
          duration: 47,
          failureDetails: [],
          failureMessages: [],
          fullName: 'jobs/run-buckets-cleanup runBucketsCleanup process indexes it does not re-run the same day',
          invocations: 1,
          location: null,
          numPassingAsserts: 12,
          retryReasons: [],
          status: 'passed',
          title: 'it does not re-run the same day'
        },
        {
          ancestorTitles: ['jobs/run-buckets-cleanup', 'runBucketsCleanup process indexes'],
          duration: 54,
          failureDetails: [],
          failureMessages: [],
          fullName: 'jobs/run-buckets-cleanup runBucketsCleanup process indexes it re-reruns the next day',
          invocations: 1,
          location: null,
          numPassingAsserts: 13,
          retryReasons: [],
          status: 'passed',
          title: 'it re-reruns the next day'
        },
        {
          ancestorTitles: ['jobs/run-buckets-cleanup', 'runBucketsCleanup process indexes'],
          duration: 56,
          failureDetails: [],
          failureMessages: [],
          fullName: 'jobs/run-buckets-cleanup runBucketsCleanup process indexes it defaults to use the environment',
          invocations: 1,
          location: null,
          numPassingAsserts: 13,
          retryReasons: [],
          status: 'passed',
          title: 'it defaults to use the environment'
        }
      ],
      endTime: 1714132435247,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/jobs/run-buckets-cleanup.it.test.ts',
      startTime: 1714132434799,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['data/db/users', 'getArchivedUsers'],
          duration: 75,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/users getArchivedUsers gets archived users',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'gets archived users'
        },
        {
          ancestorTitles: ['data/db/users', 'getArchivedUsers'],
          duration: 28,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/users getArchivedUsers gets archived users with same date',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'gets archived users with same date'
        },
        {
          ancestorTitles: ['data/db/users', 'getArchivedUsers'],
          duration: 28,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/users getArchivedUsers gets no archived users with same date',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'gets no archived users with same date'
        },
        {
          ancestorTitles: ['data/db/users', 'getArchivedUsers'],
          duration: 28,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/users getArchivedUsers gets no archived users',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'gets no archived users'
        },
        {
          ancestorTitles: ['data/db/users', 'getInactiveUsers'],
          duration: 31,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/users getInactiveUsers gets all inactive users',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'gets all inactive users'
        },
        {
          ancestorTitles: ['data/db/users', 'getInactiveWorkshopUserGroups'],
          duration: 28,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/users getInactiveWorkshopUserGroups gets all inactive workshop user groups',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'gets all inactive workshop user groups'
        },
        {
          ancestorTitles: ['data/db/users', 'getInactiveWorkshopUsers'],
          duration: 28,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/users getInactiveWorkshopUsers gets all inactive workshop users',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'gets all inactive workshop users'
        }
      ],
      endTime: 1714132435668,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/data/db/users.it.test.ts',
      startTime: 1714132435249,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['data/db/easypark', 'deleteEasyparkIgnoredAreasByUsers'],
          duration: 39,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/easypark deleteEasyparkIgnoredAreasByUsers deletes Easypark ignored areas by users',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'deletes Easypark ignored areas by users'
        },
        {
          ancestorTitles: ['data/db/easypark', 'deleteEasyparkIgnoredAreasByVehicles'],
          duration: 20,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/easypark deleteEasyparkIgnoredAreasByVehicles deletes Easypark ignored areas by vehicles',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'deletes Easypark ignored areas by vehicles'
        },
        {
          ancestorTitles: ['data/db/easypark', 'deleteEasyparkIgnoredAreasByVehicles'],
          duration: 16,
          failureDetails: [],
          failureMessages: [],
          fullName:
            'data/db/easypark deleteEasyparkIgnoredAreasByVehicles deletes Easypark ignored areas by vehicles with period',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'deletes Easypark ignored areas by vehicles with period'
        },
        {
          ancestorTitles: ['data/db/easypark', 'deleteEasyparkReceiptsByUsers'],
          duration: 12,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/easypark deleteEasyparkReceiptsByUsers deletes Easypark receipts by users',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'deletes Easypark receipts by users'
        },
        {
          ancestorTitles: ['data/db/easypark', 'deleteEasyparkReceiptsByVehicles'],
          duration: 12,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/easypark deleteEasyparkReceiptsByVehicles deletes Easypark receipts by vehicles',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'deletes Easypark receipts by vehicles'
        },
        {
          ancestorTitles: ['data/db/easypark', 'deleteEasyparkReceiptsByVehicles'],
          duration: 13,
          failureDetails: [],
          failureMessages: [],
          fullName:
            'data/db/easypark deleteEasyparkReceiptsByVehicles deletes Easypark receipts by vehicles with period',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'deletes Easypark receipts by vehicles with period'
        },
        {
          ancestorTitles: ['data/db/easypark', 'deleteEasyparkRemindersByUsers'],
          duration: 13,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/easypark deleteEasyparkRemindersByUsers deletes Easypark reminders by users',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'deletes Easypark reminders by users'
        },
        {
          ancestorTitles: ['data/db/easypark', 'deleteEasyparkRemindersByVehicles'],
          duration: 13,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/easypark deleteEasyparkRemindersByVehicles deletes Easypark reminders by vehicles',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'deletes Easypark reminders by vehicles'
        },
        {
          ancestorTitles: ['data/db/easypark', 'deleteEasyparkRemindersByVehicles'],
          duration: 13,
          failureDetails: [],
          failureMessages: [],
          fullName:
            'data/db/easypark deleteEasyparkRemindersByVehicles deletes Easypark reminders by vehicles with period',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'deletes Easypark reminders by vehicles with period'
        }
      ],
      endTime: 1714132436033,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/data/db/easypark.it.test.ts',
      startTime: 1714132435670,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['jobs/run-archived-user-cleanup', 'runArchivedUserCleanup'],
          duration: 141,
          failureDetails: [],
          failureMessages: [],
          fullName: 'jobs/run-archived-user-cleanup runArchivedUserCleanup runs archived user cleanup',
          invocations: 1,
          location: null,
          numPassingAsserts: 19,
          retryReasons: [],
          status: 'passed',
          title: 'runs archived user cleanup'
        },
        {
          ancestorTitles: ['jobs/run-archived-user-cleanup', 'runArchivedUserCleanup'],
          duration: 123,
          failureDetails: [],
          failureMessages: [],
          fullName: 'jobs/run-archived-user-cleanup runArchivedUserCleanup skips cleanup without users',
          invocations: 1,
          location: null,
          numPassingAsserts: 2,
          retryReasons: [],
          status: 'passed',
          title: 'skips cleanup without users'
        }
      ],
      endTime: 1714132436477,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/jobs/run-archived-user-cleanup.it.test.ts',
      startTime: 1714132436035,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['jobs/run-runs-cleanup', 'runRunsCleanup'],
          duration: 227,
          failureDetails: [],
          failureMessages: [],
          fullName: 'jobs/run-runs-cleanup runRunsCleanup runs cleanup of runs',
          invocations: 1,
          location: null,
          numPassingAsserts: 2,
          retryReasons: [],
          status: 'passed',
          title: 'runs cleanup of runs'
        }
      ],
      endTime: 1714132436886,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/jobs/run-runs-cleanup.it.test.ts',
      startTime: 1714132436482,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['jobs/run-cleanup-assigned-users', 'runCleanupForAssignedUsers'],
          duration: 58,
          failureDetails: [],
          failureMessages: [],
          fullName: 'jobs/run-cleanup-assigned-users runCleanupForAssignedUsers runs cleanup of assigned vehicles',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'runs cleanup of assigned vehicles'
        },
        {
          ancestorTitles: ['jobs/run-cleanup-assigned-users', 'runCleanupForAssignedUsers'],
          duration: 28,
          failureDetails: [],
          failureMessages: [],
          fullName:
            'jobs/run-cleanup-assigned-users runCleanupForAssignedUsers does not run cleanup if no assignees found with missing recent activity',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'does not run cleanup if no assignees found with missing recent activity'
        }
      ],
      endTime: 1714132437171,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/jobs/run-cleanup-assigned-users.it.test.ts',
      startTime: 1714132436887,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['jobs/run-inactive-workshop-user-cleanup', 'runInactiveWorkshopUserCleanup'],
          duration: 55,
          failureDetails: [],
          failureMessages: [],
          fullName:
            'jobs/run-inactive-workshop-user-cleanup runInactiveWorkshopUserCleanup runs inactive user cleanup job',
          invocations: 1,
          location: null,
          numPassingAsserts: 5,
          retryReasons: [],
          status: 'passed',
          title: 'runs inactive user cleanup job'
        },
        {
          ancestorTitles: ['jobs/run-inactive-workshop-user-cleanup', 'runInactiveWorkshopUserCleanup'],
          duration: 36,
          failureDetails: [],
          failureMessages: [],
          fullName:
            'jobs/run-inactive-workshop-user-cleanup runInactiveWorkshopUserCleanup runs no inactive user cleanup job if no inactive users',
          invocations: 1,
          location: null,
          numPassingAsserts: 2,
          retryReasons: [],
          status: 'passed',
          title: 'runs no inactive user cleanup job if no inactive users'
        }
      ],
      endTime: 1714132437443,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/jobs/run-inactive-workshop-user-cleanup.it.test.ts',
      startTime: 1714132437172,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['data/db/car-unit-changes', 'getClearedCarUnitChanges'],
          duration: 42,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/car-unit-changes getClearedCarUnitChanges gets data',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'gets data'
        },
        {
          ancestorTitles: ['data/db/car-unit-changes', 'getLatestUnitChange'],
          duration: 15,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/car-unit-changes getLatestUnitChange gets data',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'gets data'
        },
        {
          ancestorTitles: ['data/db/car-unit-changes', 'getLatestUnitChange'],
          duration: 12,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/car-unit-changes getLatestUnitChange gets no data',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'gets no data'
        }
      ],
      endTime: 1714132437736,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/data/db/car-unit-changes.it.test.ts',
      startTime: 1714132437446,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: [
            'jobs/run-cleanup-permissions-expired-car-invites',
            'runCleanupPermissionsExpiredCarInvites'
          ],
          duration: 95,
          failureDetails: [],
          failureMessages: [],
          fullName:
            'jobs/run-cleanup-permissions-expired-car-invites runCleanupPermissionsExpiredCarInvites cleans up permissions from expired invites',
          invocations: 1,
          location: null,
          numPassingAsserts: 8,
          retryReasons: [],
          status: 'passed',
          title: 'cleans up permissions from expired invites'
        }
      ],
      endTime: 1714132438017,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/jobs/run-cleanup-permissions-expired-car-invites.it.test.ts',
      startTime: 1714132437738,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['data/db/audit-accesslog', 'clearAuditAccesslogAgent'],
          duration: 26,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/audit-accesslog clearAuditAccesslogAgent clears agent from audit accesslog',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'clears agent from audit accesslog'
        },
        {
          ancestorTitles: ['data/db/audit-accesslog', 'clearAuditAccesslogData'],
          duration: 7,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/audit-accesslog clearAuditAccesslogData clears data from audit accesslog',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'clears data from audit accesslog'
        }
      ],
      endTime: 1714132438219,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/data/db/audit-accesslog.it.test.ts',
      startTime: 1714132438019,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['jobs/run-cleanup-for-cleared-units', 'runCleanupForClearedUnits'],
          duration: 75,
          failureDetails: [],
          failureMessages: [],
          fullName: 'jobs/run-cleanup-for-cleared-units runCleanupForClearedUnits cleans up cleared units',
          invocations: 1,
          location: null,
          numPassingAsserts: 8,
          retryReasons: [],
          status: 'passed',
          title: 'cleans up cleared units'
        },
        {
          ancestorTitles: ['jobs/run-cleanup-for-cleared-units', 'runCleanupForClearedUnits'],
          duration: 26,
          failureDetails: [],
          failureMessages: [],
          fullName:
            'jobs/run-cleanup-for-cleared-units runCleanupForClearedUnits does not delete rows if the carId is the same',
          invocations: 1,
          location: null,
          numPassingAsserts: 6,
          retryReasons: [],
          status: 'passed',
          title: 'does not delete rows if the carId is the same'
        },
        {
          ancestorTitles: ['jobs/run-cleanup-for-cleared-units', 'runCleanupForClearedUnits'],
          duration: 25,
          failureDetails: [],
          failureMessages: [],
          fullName: 'jobs/run-cleanup-for-cleared-units runCleanupForClearedUnits Uses process index',
          invocations: 1,
          location: null,
          numPassingAsserts: 6,
          retryReasons: [],
          status: 'passed',
          title: 'Uses process index'
        }
      ],
      endTime: 1714132438516,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/jobs/run-cleanup-for-cleared-units.it.test.ts',
      startTime: 1714132438220,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['jobs/run-archived-user-cleanup', 'runArchivedUserCleanup'],
          duration: 7,
          failureDetails: [],
          failureMessages: [],
          fullName: 'jobs/run-archived-user-cleanup runArchivedUserCleanup runs archived user cleanup queries',
          invocations: 1,
          location: null,
          numPassingAsserts: 48,
          retryReasons: [],
          status: 'passed',
          title: 'runs archived user cleanup queries'
        },
        {
          ancestorTitles: ['jobs/run-archived-user-cleanup', 'runArchivedUserCleanup'],
          duration: 2,
          failureDetails: [],
          failureMessages: [],
          fullName: 'jobs/run-archived-user-cleanup runArchivedUserCleanup runs no cleanup queries without users',
          invocations: 1,
          location: null,
          numPassingAsserts: 6,
          retryReasons: [],
          status: 'passed',
          title: 'runs no cleanup queries without users'
        }
      ],
      endTime: 1714132438722,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/jobs/run-archived-user-cleanup.test.ts',
      startTime: 1714132438520,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['data/db/devices', 'clearDevices'],
          duration: 35,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/devices clearDevices clears devices',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'clears devices'
        }
      ],
      endTime: 1714132439020,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/data/db/devices.it.test.ts',
      startTime: 1714132438724,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['data/db/user-notifications', 'clearUserNotificationsMessage'],
          duration: 32,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/user-notifications clearUserNotificationsMessage clears message from user notifications',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'clears message from user notifications'
        },
        {
          ancestorTitles: ['data/db/user-notifications', 'clearUserNotificationsMessageContext'],
          duration: 9,
          failureDetails: [],
          failureMessages: [],
          fullName:
            'data/db/user-notifications clearUserNotificationsMessageContext clears message and context from user notifications',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'clears message and context from user notifications'
        }
      ],
      endTime: 1714132439238,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/data/db/user-notifications.it.test.ts',
      startTime: 1714132439022,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['jobs/run-delete-unattached-user-cleanup', 'runUnattachedUserCleanup'],
          duration: 66,
          failureDetails: [],
          failureMessages: [],
          fullName: 'jobs/run-delete-unattached-user-cleanup runUnattachedUserCleanup runs inactive user cleanup job',
          invocations: 1,
          location: null,
          numPassingAsserts: 6,
          retryReasons: [],
          status: 'passed',
          title: 'runs inactive user cleanup job'
        },
        {
          ancestorTitles: ['jobs/run-delete-unattached-user-cleanup', 'runUnattachedUserCleanup'],
          duration: 29,
          failureDetails: [],
          failureMessages: [],
          fullName:
            'jobs/run-delete-unattached-user-cleanup runUnattachedUserCleanup runs no inactive user cleanup job if no inactive users',
          invocations: 1,
          location: null,
          numPassingAsserts: 2,
          retryReasons: [],
          status: 'passed',
          title: 'runs no inactive user cleanup job if no inactive users'
        }
      ],
      endTime: 1714132439518,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/jobs/run-unattached-user-cleanup.it.test.ts',
      startTime: 1714132439239,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['data/db/car-permissions', 'getExpiredCarPermissionsFromInvites'],
          duration: 56,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/car-permissions getExpiredCarPermissionsFromInvites gets expired car permissions',
          invocations: 1,
          location: null,
          numPassingAsserts: 2,
          retryReasons: [],
          status: 'passed',
          title: 'gets expired car permissions'
        },
        {
          ancestorTitles: ['data/db/car-permissions', 'endCarPermissions'],
          duration: 28,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/car-permissions endCarPermissions ends car permissions',
          invocations: 1,
          location: null,
          numPassingAsserts: 2,
          retryReasons: [],
          status: 'passed',
          title: 'ends car permissions'
        }
      ],
      endTime: 1714132439776,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/data/db/car-permissions.it.test.ts',
      startTime: 1714132439519,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['jobs/run-gdpr-cleanup', 'runGdprCleanup'],
          duration: 4,
          failureDetails: [],
          failureMessages: [],
          fullName: 'jobs/run-gdpr-cleanup runGdprCleanup runs GDPR cleanup of vehicle charge levels percent once',
          invocations: 1,
          location: null,
          numPassingAsserts: 8,
          retryReasons: [],
          status: 'passed',
          title: 'runs GDPR cleanup of vehicle charge levels percent once'
        },
        {
          ancestorTitles: ['jobs/run-gdpr-cleanup', 'runGdprCleanup'],
          duration: 1,
          failureDetails: [],
          failureMessages: [],
          fullName: 'jobs/run-gdpr-cleanup runGdprCleanup runs GDPR cleanup of vehicle odometers twice',
          invocations: 1,
          location: null,
          numPassingAsserts: 10,
          retryReasons: [],
          status: 'passed',
          title: 'runs GDPR cleanup of vehicle odometers twice'
        },
        {
          ancestorTitles: ['jobs/run-gdpr-cleanup', 'runGdprCleanup'],
          duration: 4,
          failureDetails: [],
          failureMessages: [],
          fullName: 'jobs/run-gdpr-cleanup runGdprCleanup runs GDPR cleanup with reset after a day',
          invocations: 1,
          location: null,
          numPassingAsserts: 4,
          retryReasons: [],
          status: 'passed',
          title: 'runs GDPR cleanup with reset after a day'
        },
        {
          ancestorTitles: ['jobs/run-gdpr-cleanup', 'getGdprCleanupJobs'],
          duration: 0,
          failureDetails: [
            {
              matcherResult: {
                actual: 59,
                expected: 58,
                message: 'expect(received).toEqual(expected) // deep equality\n\nExpected: 58\nReceived: 59',
                name: 'toEqual',
                pass: false
              }
            }
          ],
          failureMessages: [
            'Error: expect(received).toEqual(expected) // deep equality\n\nExpected: 58\nReceived: 59\n    at Object.<anonymous> (/Users/michaelstorgaard/Sites/job-runner-cleanup/src/jobs/run-gdpr-cleanup.test.ts:91:27)\n    at Promise.then.completed (/Users/michaelstorgaard/Sites/job-runner-cleanup/node_modules/jest-circus/build/utils.js:298:28)\n    at new Promise (<anonymous>)\n    at callAsyncCircusFn (/Users/michaelstorgaard/Sites/job-runner-cleanup/node_modules/jest-circus/build/utils.js:231:10)\n    at _callCircusTest (/Users/michaelstorgaard/Sites/job-runner-cleanup/node_modules/jest-circus/build/run.js:316:40)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at _runTest (/Users/michaelstorgaard/Sites/job-runner-cleanup/node_modules/jest-circus/build/run.js:252:3)\n    at _runTestsForDescribeBlock (/Users/michaelstorgaard/Sites/job-runner-cleanup/node_modules/jest-circus/build/run.js:126:9)\n    at _runTestsForDescribeBlock (/Users/michaelstorgaard/Sites/job-runner-cleanup/node_modules/jest-circus/build/run.js:121:9)\n    at _runTestsForDescribeBlock (/Users/michaelstorgaard/Sites/job-runner-cleanup/node_modules/jest-circus/build/run.js:121:9)\n    at run (/Users/michaelstorgaard/Sites/job-runner-cleanup/node_modules/jest-circus/build/run.js:71:3)\n    at runAndTransformResultsToJestFormat (/Users/michaelstorgaard/Sites/job-runner-cleanup/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapterInit.js:122:21)\n    at jestAdapter (/Users/michaelstorgaard/Sites/job-runner-cleanup/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapter.js:79:19)\n    at runTestInternal (/Users/michaelstorgaard/Sites/job-runner-cleanup/node_modules/jest-runner/build/runTest.js:367:16)\n    at runTest (/Users/michaelstorgaard/Sites/job-runner-cleanup/node_modules/jest-runner/build/runTest.js:444:34)'
          ],
          fullName: 'jobs/run-gdpr-cleanup getGdprCleanupJobs gets GDPR cleanup jobs',
          invocations: 1,
          location: null,
          numPassingAsserts: 0,
          retryReasons: [],
          status: 'failed',
          title: 'gets GDPR cleanup jobs'
        }
      ],
      endTime: 1714132440036,
      message:
        "  ● jobs/run-gdpr-cleanup › getGdprCleanupJobs › gets GDPR cleanup jobs\n\n    expect(received).toEqual(expected) // deep equality\n\n    Expected: 58\n    Received: 59\n\n      89 |         expect(dataQueries[shard].callCount).toEqual(2)\n      90 |       }\n    > 91 |     })\n         |       ^\n      92 |   })\n      93 |\n      94 |   describe('getGdprCleanupJobs', () => {\n\n      at Object.<anonymous> (src/jobs/run-gdpr-cleanup.test.ts:91:27)\n",
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/jobs/run-gdpr-cleanup.test.ts',
      startTime: 1714132439777,
      status: 'failed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['data/db/organizations', 'getRevokeUserWorkshopAccessAfterDays'],
          duration: 36,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/organizations getRevokeUserWorkshopAccessAfterDays gets organizations',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'gets organizations'
        },
        {
          ancestorTitles: ['data/db/organizations', 'getRevokeUserWorkshopAccessAfterDays'],
          duration: 11,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/organizations getRevokeUserWorkshopAccessAfterDays gets no organizations',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'gets no organizations'
        },
        {
          ancestorTitles: ['data/db/organizations', 'getDeleteUnattachedWorkshopUsersAfterDays'],
          duration: 12,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/organizations getDeleteUnattachedWorkshopUsersAfterDays gets organizations',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'gets organizations'
        },
        {
          ancestorTitles: ['data/db/organizations', 'getDeleteUnattachedWorkshopUsersAfterDays'],
          duration: 11,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/organizations getDeleteUnattachedWorkshopUsersAfterDays gets no organizations',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'gets no organizations'
        }
      ],
      endTime: 1714132440291,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/data/db/organizations.it.test.ts',
      startTime: 1714132440038,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['data/db/can-engine-code', 'getClearedCarUnitChanges'],
          duration: 29,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/can-engine-code getClearedCarUnitChanges deletes data',
          invocations: 1,
          location: null,
          numPassingAsserts: 6,
          retryReasons: [],
          status: 'passed',
          title: 'deletes data'
        }
      ],
      endTime: 1714132440488,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/data/db/can-engine-code.it.test.ts',
      startTime: 1714132440293,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['jobs/run-firebase-cleanup', 'runFirebaseCleanup'],
          duration: 54,
          failureDetails: [],
          failureMessages: [],
          fullName: 'jobs/run-firebase-cleanup runFirebaseCleanup runs Firebase cleanup',
          invocations: 1,
          location: null,
          numPassingAsserts: 4,
          retryReasons: [],
          status: 'passed',
          title: 'runs Firebase cleanup'
        },
        {
          ancestorTitles: ['jobs/run-firebase-cleanup', 'runFirebaseCleanup'],
          duration: 13,
          failureDetails: [],
          failureMessages: [],
          fullName: 'jobs/run-firebase-cleanup runFirebaseCleanup skips cleanup with higher process index',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'skips cleanup with higher process index'
        },
        {
          ancestorTitles: ['jobs/run-firebase-cleanup', 'runFirebaseCleanup'],
          duration: 12,
          failureDetails: [],
          failureMessages: [],
          fullName: 'jobs/run-firebase-cleanup runFirebaseCleanup skips cleanup without users',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'skips cleanup without users'
        },
        {
          ancestorTitles: ['jobs/run-firebase-cleanup', 'runFirebaseCleanup'],
          duration: 11,
          failureDetails: [],
          failureMessages: [],
          fullName: 'jobs/run-firebase-cleanup runFirebaseCleanup does not run in staging',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'does not run in staging'
        }
      ],
      endTime: 1714132440748,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/jobs/run-firebase-cleanup.it.test.ts',
      startTime: 1714132440489,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['data/db/vehicle-invites', 'clearVehicleInviteIdentifiersByUsers'],
          duration: 33,
          failureDetails: [],
          failureMessages: [],
          fullName:
            'data/db/vehicle-invites clearVehicleInviteIdentifiersByUsers clears vehicle invite identifiers by users',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'clears vehicle invite identifiers by users'
        },
        {
          ancestorTitles: ['data/db/vehicle-invites', 'clearVehicleInviteIdentifiersByVehicles'],
          duration: 18,
          failureDetails: [],
          failureMessages: [],
          fullName:
            'data/db/vehicle-invites clearVehicleInviteIdentifiersByVehicles clears vehicle invite identifiers by vehicles',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'clears vehicle invite identifiers by vehicles'
        },
        {
          ancestorTitles: ['data/db/vehicle-invites', 'clearVehicleInviteIdentifiersByVehicles'],
          duration: 15,
          failureDetails: [],
          failureMessages: [],
          fullName:
            'data/db/vehicle-invites clearVehicleInviteIdentifiersByVehicles clears vehicle invite identifiers by vehicles with period',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'clears vehicle invite identifiers by vehicles with period'
        }
      ],
      endTime: 1714132440981,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/data/db/vehicle-invites.it.test.ts',
      startTime: 1714132440750,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['data/db/quotes', 'clearQuotesByUsers'],
          duration: 35,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/quotes clearQuotesByUsers clears quotes by users',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'clears quotes by users'
        },
        {
          ancestorTitles: ['data/db/quotes', 'clearQuotesByVehicles'],
          duration: 14,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/quotes clearQuotesByVehicles clears quotes by vehicles',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'clears quotes by vehicles'
        },
        {
          ancestorTitles: ['data/db/quotes', 'clearQuotesByVehicles'],
          duration: 15,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/quotes clearQuotesByVehicles clears quotes by vehicles with period',
          invocations: 1,
          location: null,
          numPassingAsserts: 4,
          retryReasons: [],
          status: 'passed',
          title: 'clears quotes by vehicles with period'
        }
      ],
      endTime: 1714132441290,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/data/db/quotes.it.test.ts',
      startTime: 1714132440982,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['jobs/run-audit-changelog-cleanup', 'runAuditChangelogCleanup'],
          duration: 3,
          failureDetails: [],
          failureMessages: [],
          fullName: 'jobs/run-audit-changelog-cleanup runAuditChangelogCleanup runs audit changelog cleanup queries',
          invocations: 1,
          location: null,
          numPassingAsserts: 10,
          retryReasons: [],
          status: 'passed',
          title: 'runs audit changelog cleanup queries'
        },
        {
          ancestorTitles: ['jobs/run-audit-changelog-cleanup', 'runAuditChangelogCleanup'],
          duration: 1,
          failureDetails: [],
          failureMessages: [],
          fullName: 'jobs/run-audit-changelog-cleanup runAuditChangelogCleanup runs no cleanup queries without events',
          invocations: 1,
          location: null,
          numPassingAsserts: 6,
          retryReasons: [],
          status: 'passed',
          title: 'runs no cleanup queries without events'
        }
      ],
      endTime: 1714132441481,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/jobs/run-audit-changelog-cleanup.test.ts',
      startTime: 1714132441292,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['data/db/road-toll-charges', 'deleteRoadTollCharges'],
          duration: 46,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/road-toll-charges deleteRoadTollCharges deletes road toll charges',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'deletes road toll charges'
        },
        {
          ancestorTitles: ['data/db/road-toll-charges', 'deleteRoadTollCharges'],
          duration: 24,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/road-toll-charges deleteRoadTollCharges deletes road toll charges with period',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'deletes road toll charges with period'
        }
      ],
      endTime: 1714132441726,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/data/db/road-toll-charges.it.test.ts',
      startTime: 1714132441483,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['jobs/run-feeder-cleanup', 'runFeederCleanup'],
          duration: 30,
          failureDetails: [],
          failureMessages: [],
          fullName: 'jobs/run-feeder-cleanup runFeederCleanup runs feeder cleanup',
          invocations: 1,
          location: null,
          numPassingAsserts: 2,
          retryReasons: [],
          status: 'passed',
          title: 'runs feeder cleanup'
        }
      ],
      endTime: 1714132441932,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/jobs/run-feeder-cleanup.it.test.ts',
      startTime: 1714132441727,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['data/db/audit-changelog', 'getAuditChangelogEvents'],
          duration: 28,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/audit-changelog getAuditChangelogEvents gets audit changelog events',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'gets audit changelog events'
        },
        {
          ancestorTitles: ['data/db/audit-changelog', 'updateAuditChangelog'],
          duration: 7,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/audit-changelog updateAuditChangelog updates audit changelog',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'updates audit changelog'
        },
        {
          ancestorTitles: ['data/db/audit-changelog', 'clearAuditChangelogAgent'],
          duration: 8,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/audit-changelog clearAuditChangelogAgent clears agent from audit changelog',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'clears agent from audit changelog'
        },
        {
          ancestorTitles: ['data/db/audit-changelog', 'clearAuditChangelogData'],
          duration: 7,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/audit-changelog clearAuditChangelogData clears data from audit changelog',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'clears data from audit changelog'
        }
      ],
      endTime: 1714132442159,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/data/db/audit-changelog.it.test.ts',
      startTime: 1714132441933,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['jobs/run-audit-changelog-cleanup', 'runAuditChangelogCleanup'],
          duration: 39,
          failureDetails: [],
          failureMessages: [],
          fullName: 'jobs/run-audit-changelog-cleanup runAuditChangelogCleanup runs archived user cleanup',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'runs archived user cleanup'
        },
        {
          ancestorTitles: ['jobs/run-audit-changelog-cleanup', 'runAuditChangelogCleanup'],
          duration: 12,
          failureDetails: [],
          failureMessages: [],
          fullName: 'jobs/run-audit-changelog-cleanup runAuditChangelogCleanup skips cleanup without users',
          invocations: 1,
          location: null,
          numPassingAsserts: 2,
          retryReasons: [],
          status: 'passed',
          title: 'skips cleanup without users'
        }
      ],
      endTime: 1714132442464,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/jobs/run-audit-changelog-cleanup.it.test.ts',
      startTime: 1714132442160,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['data/db/subscriber-consents', 'deleteSubscriberConsentsByVehicles'],
          duration: 43,
          failureDetails: [],
          failureMessages: [],
          fullName:
            'data/db/subscriber-consents deleteSubscriberConsentsByVehicles deletes subscriber consents by vehicles',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'deletes subscriber consents by vehicles'
        },
        {
          ancestorTitles: ['data/db/subscriber-consents', 'deleteSubscriberConsentsByVehicles'],
          duration: 14,
          failureDetails: [],
          failureMessages: [],
          fullName:
            'data/db/subscriber-consents deleteSubscriberConsentsByVehicles deletes subscriber consents by vehicles with period',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'deletes subscriber consents by vehicles with period'
        },
        {
          ancestorTitles: ['data/db/subscriber-consents', 'deleteSubscriberConsentsByUsers'],
          duration: 11,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/subscriber-consents deleteSubscriberConsentsByUsers deletes subscriber consents by users',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'deletes subscriber consents by users'
        }
      ],
      endTime: 1714132442710,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/data/db/subscriber-consents.it.test.ts',
      startTime: 1714132442465,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['data/db/message-queue', 'deleteMessageQueueLogsOlderThanThreeMonths'],
          duration: 36,
          failureDetails: [],
          failureMessages: [],
          fullName:
            'data/db/message-queue deleteMessageQueueLogsOlderThanThreeMonths deletes Message Queue Logs that are older than 3 months',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'deletes Message Queue Logs that are older than 3 months'
        }
      ],
      endTime: 1714132442997,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/data/db/message-queue.it.test.ts',
      startTime: 1714132442711,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['jobs/run-firebase-cleanup', 'runFirebaseCleanup'],
          duration: 5,
          failureDetails: [],
          failureMessages: [],
          fullName: 'jobs/run-firebase-cleanup runFirebaseCleanup runs Firebase cleanup',
          invocations: 1,
          location: null,
          numPassingAsserts: 16,
          retryReasons: [],
          status: 'passed',
          title: 'runs Firebase cleanup'
        },
        {
          ancestorTitles: ['jobs/run-firebase-cleanup', 'runFirebaseCleanup'],
          duration: 1,
          failureDetails: [],
          failureMessages: [],
          fullName: 'jobs/run-firebase-cleanup runFirebaseCleanup skips cleanup with higher process index',
          invocations: 1,
          location: null,
          numPassingAsserts: 8,
          retryReasons: [],
          status: 'passed',
          title: 'skips cleanup with higher process index'
        },
        {
          ancestorTitles: ['jobs/run-firebase-cleanup', 'runFirebaseCleanup'],
          duration: 1,
          failureDetails: [],
          failureMessages: [],
          fullName: 'jobs/run-firebase-cleanup runFirebaseCleanup skips cleanup without users',
          invocations: 1,
          location: null,
          numPassingAsserts: 8,
          retryReasons: [],
          status: 'passed',
          title: 'skips cleanup without users'
        },
        {
          ancestorTitles: ['jobs/run-firebase-cleanup', 'runFirebaseCleanup'],
          duration: 0,
          failureDetails: [],
          failureMessages: [],
          fullName: 'jobs/run-firebase-cleanup runFirebaseCleanup does not run in staging',
          invocations: 1,
          location: null,
          numPassingAsserts: 6,
          retryReasons: [],
          status: 'passed',
          title: 'does not run in staging'
        }
      ],
      endTime: 1714132443187,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/jobs/run-firebase-cleanup.test.ts',
      startTime: 1714132442998,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['jobs/run-archived-vehicle-cleanup', 'runArchivedVehicleCleanup'],
          duration: 10,
          failureDetails: [],
          failureMessages: [],
          fullName: 'jobs/run-archived-vehicle-cleanup runArchivedVehicleCleanup runs archived vehicle cleanup queries',
          invocations: 1,
          location: null,
          numPassingAsserts: 75,
          retryReasons: [],
          status: 'passed',
          title: 'runs archived vehicle cleanup queries'
        },
        {
          ancestorTitles: ['jobs/run-archived-vehicle-cleanup', 'runArchivedVehicleCleanup'],
          duration: 2,
          failureDetails: [],
          failureMessages: [],
          fullName:
            'jobs/run-archived-vehicle-cleanup runArchivedVehicleCleanup runs no cleanup queries without vehicles',
          invocations: 1,
          location: null,
          numPassingAsserts: 9,
          retryReasons: [],
          status: 'passed',
          title: 'runs no cleanup queries without vehicles'
        }
      ],
      endTime: 1714132443384,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/jobs/run-archived-vehicle-cleanup.test.ts',
      startTime: 1714132443189,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['data/db/incident-main-power-disconnect', 'clearIncidentMainPowerDisconnect'],
          duration: 35,
          failureDetails: [],
          failureMessages: [],
          fullName:
            'data/db/incident-main-power-disconnect clearIncidentMainPowerDisconnect clears incident main power disconnect',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'clears incident main power disconnect'
        },
        {
          ancestorTitles: ['data/db/incident-main-power-disconnect', 'clearIncidentMainPowerDisconnect'],
          duration: 10,
          failureDetails: [],
          failureMessages: [],
          fullName:
            'data/db/incident-main-power-disconnect clearIncidentMainPowerDisconnect clears incident main power disconnect with period',
          invocations: 1,
          location: null,
          numPassingAsserts: 4,
          retryReasons: [],
          status: 'passed',
          title: 'clears incident main power disconnect with period'
        }
      ],
      endTime: 1714132443719,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/data/db/incident-main-power-disconnect.it.test.ts',
      startTime: 1714132443387,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['data/db/garage-vehicles', 'deleteGarageVehicles'],
          duration: 29,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/garage-vehicles deleteGarageVehicles deletes garage vehicles',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'deletes garage vehicles'
        }
      ],
      endTime: 1714132443951,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/data/db/garage-vehicles.it.test.ts',
      startTime: 1714132443720,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['data/db/unit-vins', 'deleteUnitVins'],
          duration: 40,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/unit-vins deleteUnitVins deletes data',
          invocations: 1,
          location: null,
          numPassingAsserts: 6,
          retryReasons: [],
          status: 'passed',
          title: 'deletes data'
        }
      ],
      endTime: 1714132444186,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/data/db/unit-vins.it.test.ts',
      startTime: 1714132443953,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['jobs/run-validation-of-gdpr-cleanup', 'runValidationOfGdprCleanup'],
          duration: 26,
          failureDetails: [],
          failureMessages: [],
          fullName: 'jobs/run-validation-of-gdpr-cleanup runValidationOfGdprCleanup runs validation of GDPR cleanup',
          invocations: 1,
          location: null,
          numPassingAsserts: 242,
          retryReasons: [],
          status: 'passed',
          title: 'runs validation of GDPR cleanup'
        },
        {
          ancestorTitles: ['jobs/run-validation-of-gdpr-cleanup', 'runValidationOfGdprCleanup'],
          duration: 20,
          failureDetails: [],
          failureMessages: [],
          fullName:
            'jobs/run-validation-of-gdpr-cleanup runValidationOfGdprCleanup runs validation of GDPR cleanup and confirms delay',
          invocations: 1,
          location: null,
          numPassingAsserts: 242,
          retryReasons: [],
          status: 'passed',
          title: 'runs validation of GDPR cleanup and confirms delay'
        },
        {
          ancestorTitles: ['jobs/run-validation-of-gdpr-cleanup', 'runValidationOfGdprCleanup'],
          duration: 2,
          failureDetails: [],
          failureMessages: [],
          fullName:
            'jobs/run-validation-of-gdpr-cleanup runValidationOfGdprCleanup only runs validation of GDPR cleanup once per day',
          invocations: 1,
          location: null,
          numPassingAsserts: 5,
          retryReasons: [],
          status: 'passed',
          title: 'only runs validation of GDPR cleanup once per day'
        }
      ],
      endTime: 1714132444438,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/jobs/run-validation-of-gdpr-cleanup.test.ts',
      startTime: 1714132444187,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['data/db/feeder-batch-events', 'deleteFeederBatchEventsOlderThanTwoMonths'],
          duration: 29,
          failureDetails: [],
          failureMessages: [],
          fullName:
            'data/db/feeder-batch-events deleteFeederBatchEventsOlderThanTwoMonths deletes feeder batch events that are older than 3 months',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'deletes feeder batch events that are older than 3 months'
        }
      ],
      endTime: 1714132444645,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/data/db/feeder-batch-events.it.test.ts',
      startTime: 1714132444439,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['data/db/car-purges', 'get7DayOldCarPurges'],
          duration: 32,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/car-purges get7DayOldCarPurges gets 7 day old car purges',
          invocations: 1,
          location: null,
          numPassingAsserts: 1,
          retryReasons: [],
          status: 'passed',
          title: 'gets 7 day old car purges'
        },
        {
          ancestorTitles: ['data/db/car-purges', 'get7DayOldCarPurges'],
          duration: 8,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/car-purges get7DayOldCarPurges gets 7 day old car purges after date',
          invocations: 1,
          location: null,
          numPassingAsserts: 1,
          retryReasons: [],
          status: 'passed',
          title: 'gets 7 day old car purges after date'
        }
      ],
      endTime: 1714132444988,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/data/db/car-purges.it.test.ts',
      startTime: 1714132444646,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['data/db/unit-data-cleanup', 'getFirstRecordTime'],
          duration: 28,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/unit-data-cleanup getFirstRecordTime gets first record time for unit communications',
          invocations: 1,
          location: null,
          numPassingAsserts: 5,
          retryReasons: [],
          status: 'passed',
          title: 'gets first record time for unit communications'
        },
        {
          ancestorTitles: ['data/db/unit-data-cleanup', 'getFirstRecordTime'],
          duration: 6,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/unit-data-cleanup getFirstRecordTime gets no first record time for unit communications',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'gets no first record time for unit communications'
        },
        {
          ancestorTitles: ['data/db/unit-data-cleanup', 'getFirstRecordTime'],
          duration: 6,
          failureDetails: [],
          failureMessages: [],
          fullName:
            'data/db/unit-data-cleanup getFirstRecordTime gets first record time for unit communications with offset',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'gets first record time for unit communications with offset'
        },
        {
          ancestorTitles: ['data/db/unit-data-cleanup', 'deleteOldUnitData'],
          duration: 6,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/unit-data-cleanup deleteOldUnitData deletes unit communications',
          invocations: 1,
          location: null,
          numPassingAsserts: 4,
          retryReasons: [],
          status: 'passed',
          title: 'deletes unit communications'
        }
      ],
      endTime: 1714132445225,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/data/db/unit-data-cleanup.it.test.ts',
      startTime: 1714132444989,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['data/db/messages', 'clearMessages'],
          duration: 28,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/messages clearMessages clears messages',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'clears messages'
        }
      ],
      endTime: 1714132445431,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/data/db/messages.it.test.ts',
      startTime: 1714132445226,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['data/db/email-tokens', 'deleteEmailTokens'],
          duration: 38,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/email-tokens deleteEmailTokens deletes email tokens',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'deletes email tokens'
        }
      ],
      endTime: 1714132445641,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/data/db/email-tokens.it.test.ts',
      startTime: 1714132445432,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['data/db/vehicle-trip-tags', 'deleteVehicleTripTagsByVehicles'],
          duration: 29,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/vehicle-trip-tags deleteVehicleTripTagsByVehicles deletes vehicle trip tags by vehicles',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'deletes vehicle trip tags by vehicles'
        },
        {
          ancestorTitles: ['data/db/vehicle-trip-tags', 'deleteVehicleTripTagsByVehicles'],
          duration: 7,
          failureDetails: [],
          failureMessages: [],
          fullName:
            'data/db/vehicle-trip-tags deleteVehicleTripTagsByVehicles deletes vehicle trip tags by vehicles with period',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'deletes vehicle trip tags by vehicles with period'
        },
        {
          ancestorTitles: ['data/db/vehicle-trip-tags', 'deleteVehicleTripTagsByUsers'],
          duration: 8,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/vehicle-trip-tags deleteVehicleTripTagsByUsers deletes vehicle trip tags by users',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'deletes vehicle trip tags by users'
        }
      ],
      endTime: 1714132445868,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/data/db/vehicle-trip-tags.it.test.ts',
      startTime: 1714132445643,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['data/db/user-push-tokens', 'deleteUserPushTokens'],
          duration: 33,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/user-push-tokens deleteUserPushTokens deletes user push tokens',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'deletes user push tokens'
        }
      ],
      endTime: 1714132446171,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/data/db/user-push-tokens.it.test.ts',
      startTime: 1714132445869,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['data/db/conversation-attachments', 'deleteConversationAttachments'],
          duration: 28,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/conversation-attachments deleteConversationAttachments deletes conversation attachments',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'deletes conversation attachments'
        }
      ],
      endTime: 1714132446368,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/data/db/conversation-attachments.it.test.ts',
      startTime: 1714132446173,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['data/db/service-resets', 'clearServiceResets'],
          duration: 28,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/service-resets clearServiceResets clears service resets',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'clears service resets'
        },
        {
          ancestorTitles: ['data/db/service-resets', 'clearServiceResets'],
          duration: 8,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/service-resets clearServiceResets clears service resets with period',
          invocations: 1,
          location: null,
          numPassingAsserts: 4,
          retryReasons: [],
          status: 'passed',
          title: 'clears service resets with period'
        }
      ],
      endTime: 1714132446573,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/data/db/service-resets.it.test.ts',
      startTime: 1714132446369,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['data/db/fleet-vehicle-utilization', 'clearFleetVehicleUtilization'],
          duration: 31,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/fleet-vehicle-utilization clearFleetVehicleUtilization clears fleet vehicle utilization',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'clears fleet vehicle utilization'
        }
      ],
      endTime: 1714132446776,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/data/db/fleet-vehicle-utilization.it.test.ts',
      startTime: 1714132446574,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['data/db/job-runs', 'deleteOldJobRuns'],
          duration: 30,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/job-runs deleteOldJobRuns deletes job runs',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'deletes job runs'
        }
      ],
      endTime: 1714132446977,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/data/db/job-runs.it.test.ts',
      startTime: 1714132446777,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['data/db/addresses', 'deleteAddresses'],
          duration: 28,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/addresses deleteAddresses deletes addresses',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'deletes addresses'
        }
      ],
      endTime: 1714132447282,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/data/db/addresses.it.test.ts',
      startTime: 1714132446979,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['jobs/run-purged-vehicle-cleanup', 'runPurgedVehicleCleanup'],
          duration: 15,
          failureDetails: [],
          failureMessages: [],
          fullName: 'jobs/run-purged-vehicle-cleanup runPurgedVehicleCleanup runs archived vehicle cleanup queries',
          invocations: 1,
          location: null,
          numPassingAsserts: 134,
          retryReasons: [],
          status: 'passed',
          title: 'runs archived vehicle cleanup queries'
        },
        {
          ancestorTitles: ['jobs/run-purged-vehicle-cleanup', 'runPurgedVehicleCleanup'],
          duration: 2,
          failureDetails: [],
          failureMessages: [],
          fullName: 'jobs/run-purged-vehicle-cleanup runPurgedVehicleCleanup runs no cleanup queries without vehicles',
          invocations: 1,
          location: null,
          numPassingAsserts: 9,
          retryReasons: [],
          status: 'passed',
          title: 'runs no cleanup queries without vehicles'
        }
      ],
      endTime: 1714132447476,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/jobs/run-purged-vehicle-cleanup.test.ts',
      startTime: 1714132447284,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['data/db/vehicle-service-data-history', 'deleteVehicleServiceDataHistory'],
          duration: 30,
          failureDetails: [],
          failureMessages: [],
          fullName:
            'data/db/vehicle-service-data-history deleteVehicleServiceDataHistory deletes vehicle service data history',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'deletes vehicle service data history'
        }
      ],
      endTime: 1714132447677,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/data/db/vehicle-service-data-history.it.test.ts',
      startTime: 1714132447477,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['data/db/fleet-vehicle-nighttime-locations', 'deleteFleetVehicleNighttimeLocations'],
          duration: 27,
          failureDetails: [],
          failureMessages: [],
          fullName:
            'data/db/fleet-vehicle-nighttime-locations deleteFleetVehicleNighttimeLocations deletes fleet vehicle nighttime locations',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'deletes fleet vehicle nighttime locations'
        }
      ],
      endTime: 1714132447877,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/data/db/fleet-vehicle-nighttime-locations.it.test.ts',
      startTime: 1714132447678,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['data/db/feeder-batches', 'deleteFeederBatchesOlderThanTwoMonths'],
          duration: 22,
          failureDetails: [],
          failureMessages: [],
          fullName:
            'data/db/feeder-batches deleteFeederBatchesOlderThanTwoMonths deletes feeder batches that are older than 3 months',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'deletes feeder batches that are older than 3 months'
        }
      ],
      endTime: 1714132448071,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/data/db/feeder-batches.it.test.ts',
      startTime: 1714132447878,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: [
            'jobs/run-vehicle-cleanup-for-failed-self-activations',
            'runVehicleCleanupForFailedSelfActivations'
          ],
          duration: 18,
          failureDetails: [],
          failureMessages: [],
          fullName:
            'jobs/run-vehicle-cleanup-for-failed-self-activations runVehicleCleanupForFailedSelfActivations runs vehicle cleanup for failed self activations',
          invocations: 1,
          location: null,
          numPassingAsserts: 107,
          retryReasons: [],
          status: 'passed',
          title: 'runs vehicle cleanup for failed self activations'
        },
        {
          ancestorTitles: [
            'jobs/run-vehicle-cleanup-for-failed-self-activations',
            'runVehicleCleanupForFailedSelfActivations'
          ],
          duration: 2,
          failureDetails: [],
          failureMessages: [],
          fullName:
            'jobs/run-vehicle-cleanup-for-failed-self-activations runVehicleCleanupForFailedSelfActivations runs no cleanup queries without vehicles',
          invocations: 1,
          location: null,
          numPassingAsserts: 9,
          retryReasons: [],
          status: 'passed',
          title: 'runs no cleanup queries without vehicles'
        }
      ],
      endTime: 1714132448386,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/jobs/run-vehicle-cleanup-for-failed-self-activations.test.ts',
      startTime: 1714132448073,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['data/db/sync-semler-permissions', 'deleteSyncSemlerPermissions'],
          duration: 28,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/db/sync-semler-permissions deleteSyncSemlerPermissions deletes sync Semler permissions',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'deletes sync Semler permissions'
        }
      ],
      endTime: 1714132448586,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/data/db/sync-semler-permissions.it.test.ts',
      startTime: 1714132448388,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['data/db/vehicles', 'deleteCarUpdatesByVehicles'],
          duration: 28,
          failureDetails: [],
          failureMessages: [],
          fullName:
            'data/db/vehicles deleteCarUpdatesByVehicles delete archived vehicles by checking for license plate or vin',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'delete archived vehicles by checking for license plate or vin'
        }
      ],
      endTime: 1714132448808,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/data/db/delete-car-updates-by-vehicles.it.test.ts',
      startTime: 1714132448587,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['jobs/run-inactive-user-cleanup', 'runInactiveUserCleanup'],
          duration: 3,
          failureDetails: [],
          failureMessages: [],
          fullName: 'jobs/run-inactive-user-cleanup runInactiveUserCleanup runs inactive user cleanup job',
          invocations: 1,
          location: null,
          numPassingAsserts: 8,
          retryReasons: [],
          status: 'passed',
          title: 'runs inactive user cleanup job'
        },
        {
          ancestorTitles: ['jobs/run-inactive-user-cleanup', 'runInactiveUserCleanup'],
          duration: 3,
          failureDetails: [],
          failureMessages: [],
          fullName:
            'jobs/run-inactive-user-cleanup runInactiveUserCleanup runs no inactive user cleanup job if no inactive users',
          invocations: 1,
          location: null,
          numPassingAsserts: 1,
          retryReasons: [],
          status: 'passed',
          title: 'runs no inactive user cleanup job if no inactive users'
        }
      ],
      endTime: 1714132448993,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/jobs/run-inactive-user-cleanup.test.ts',
      startTime: 1714132448810,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['jobs/run-vehicle-cleanup-for-archived-users', 'runVehicleCleanupForArchivedUsers'],
          duration: 11,
          failureDetails: [],
          failureMessages: [],
          fullName:
            'jobs/run-vehicle-cleanup-for-archived-users runVehicleCleanupForArchivedUsers runs vehicle cleanup for archived users queries',
          invocations: 1,
          location: null,
          numPassingAsserts: 61,
          retryReasons: [],
          status: 'passed',
          title: 'runs vehicle cleanup for archived users queries'
        },
        {
          ancestorTitles: ['jobs/run-vehicle-cleanup-for-archived-users', 'runVehicleCleanupForArchivedUsers'],
          duration: 2,
          failureDetails: [],
          failureMessages: [],
          fullName:
            'jobs/run-vehicle-cleanup-for-archived-users runVehicleCleanupForArchivedUsers runs no cleanup queries without users',
          invocations: 1,
          location: null,
          numPassingAsserts: 9,
          retryReasons: [],
          status: 'passed',
          title: 'runs no cleanup queries without users'
        }
      ],
      endTime: 1714132449192,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/jobs/run-vehicle-cleanup-for-archived-users.test.ts',
      startTime: 1714132448994,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['init-runner'],
          duration: 1,
          failureDetails: [],
          failureMessages: [],
          fullName: 'init-runner starts the runner without issues',
          invocations: 1,
          location: null,
          numPassingAsserts: 4,
          retryReasons: [],
          status: 'passed',
          title: 'starts the runner without issues'
        },
        {
          ancestorTitles: ['init-runner'],
          duration: 2,
          failureDetails: [],
          failureMessages: [],
          fullName: 'init-runner starts the runner but fails',
          invocations: 1,
          location: null,
          numPassingAsserts: 4,
          retryReasons: [],
          status: 'passed',
          title: 'starts the runner but fails'
        }
      ],
      endTime: 1714132449500,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/init-runner.test.ts',
      startTime: 1714132449193,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['jobs/run-unit-cleanup', 'runUnitCleanup'],
          duration: 1,
          failureDetails: [],
          failureMessages: [],
          fullName: 'jobs/run-unit-cleanup runUnitCleanup runs unit cleanup of unit communications once',
          invocations: 1,
          location: null,
          numPassingAsserts: 4,
          retryReasons: [],
          status: 'passed',
          title: 'runs unit cleanup of unit communications once'
        },
        {
          ancestorTitles: ['jobs/run-unit-cleanup', 'runUnitCleanup'],
          duration: 1,
          failureDetails: [],
          failureMessages: [],
          fullName: 'jobs/run-unit-cleanup runUnitCleanup runs unit cleanup of unit communications twice',
          invocations: 1,
          location: null,
          numPassingAsserts: 6,
          retryReasons: [],
          status: 'passed',
          title: 'runs unit cleanup of unit communications twice'
        },
        {
          ancestorTitles: ['jobs/run-unit-cleanup', 'runUnitCleanup'],
          duration: 1,
          failureDetails: [],
          failureMessages: [],
          fullName: 'jobs/run-unit-cleanup runUnitCleanup runs unit cleanup with reset after a day',
          invocations: 1,
          location: null,
          numPassingAsserts: 2,
          retryReasons: [],
          status: 'passed',
          title: 'runs unit cleanup with reset after a day'
        },
        {
          ancestorTitles: ['jobs/run-unit-cleanup', 'getUnitCleanupJobs'],
          duration: 4,
          failureDetails: [],
          failureMessages: [],
          fullName: 'jobs/run-unit-cleanup getUnitCleanupJobs gets unit cleanup jobs',
          invocations: 1,
          location: null,
          numPassingAsserts: 21,
          retryReasons: [],
          status: 'passed',
          title: 'gets unit cleanup jobs'
        }
      ],
      endTime: 1714132449687,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/jobs/run-unit-cleanup.test.ts',
      startTime: 1714132449509,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['jobs/run-message-queue-cleanup', 'runMessageQueueCleanup'],
          duration: 1,
          failureDetails: [],
          failureMessages: [],
          fullName: 'jobs/run-message-queue-cleanup runMessageQueueCleanup runs GDPR cleanup of message queue',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'runs GDPR cleanup of message queue'
        }
      ],
      endTime: 1714132449857,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/jobs/run-message-queue-cleanup.test.ts',
      startTime: 1714132449689,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['jobs/run-gdpr-cleanup-email-tokens', 'runGdprCleanupEmailTokens'],
          duration: 0,
          failureDetails: [],
          failureMessages: [],
          fullName: 'jobs/run-gdpr-cleanup-email-tokens runGdprCleanupEmailTokens runs GDPR cleanup of email tokens',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'runs GDPR cleanup of email tokens'
        }
      ],
      endTime: 1714132450030,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/jobs/run-gdpr-cleanup-email-tokens.test.ts',
      startTime: 1714132449862,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['jobs/run-gdpr-cleanup-data-science', 'runGdprCleanupDataScience'],
          duration: 1,
          failureDetails: [],
          failureMessages: [],
          fullName: 'jobs/run-gdpr-cleanup-data-science runGdprCleanupDataScience runs GDPR cleanup of data science',
          invocations: 1,
          location: null,
          numPassingAsserts: 3,
          retryReasons: [],
          status: 'passed',
          title: 'runs GDPR cleanup of data science'
        }
      ],
      endTime: 1714132450208,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/jobs/run-gdpr-cleanup-data-science.test.ts',
      startTime: 1714132450031,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['jobs/run-feeder-cleanup', 'runFeederCleanup'],
          duration: 1,
          failureDetails: [],
          failureMessages: [],
          fullName: 'jobs/run-feeder-cleanup runFeederCleanup runs GDPR cleanup of feeder tables',
          invocations: 1,
          location: null,
          numPassingAsserts: 5,
          retryReasons: [],
          status: 'passed',
          title: 'runs GDPR cleanup of feeder tables'
        }
      ],
      endTime: 1714132450748,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/jobs/run-feeder-cleanup.test.ts',
      startTime: 1714132450209,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['data/intercom/intercom-client', 'IntercomClient'],
          duration: 4,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/intercom/intercom-client IntercomClient gets contacts',
          invocations: 1,
          location: null,
          numPassingAsserts: 2,
          retryReasons: [],
          status: 'passed',
          title: 'gets contacts'
        },
        {
          ancestorTitles: ['data/intercom/intercom-client', 'IntercomClient'],
          duration: 1,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/intercom/intercom-client IntercomClient gets contacts with paging',
          invocations: 1,
          location: null,
          numPassingAsserts: 2,
          retryReasons: [],
          status: 'passed',
          title: 'gets contacts with paging'
        },
        {
          ancestorTitles: ['data/intercom/intercom-client', 'IntercomClient'],
          duration: 1,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/intercom/intercom-client IntercomClient gets contacts with no more pages',
          invocations: 1,
          location: null,
          numPassingAsserts: 2,
          retryReasons: [],
          status: 'passed',
          title: 'gets contacts with no more pages'
        },
        {
          ancestorTitles: ['data/intercom/intercom-client', 'IntercomClient'],
          duration: 26,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/intercom/intercom-client IntercomClient fails getting contacts with invalid access token',
          invocations: 1,
          location: null,
          numPassingAsserts: 4,
          retryReasons: [],
          status: 'passed',
          title: 'fails getting contacts with invalid access token'
        },
        {
          ancestorTitles: ['data/intercom/intercom-client', 'IntercomClient'],
          duration: 3,
          failureDetails: [],
          failureMessages: [],
          fullName: 'data/intercom/intercom-client IntercomClient deletes contact',
          invocations: 1,
          location: null,
          numPassingAsserts: 2,
          retryReasons: [],
          status: 'passed',
          title: 'deletes contact'
        }
      ],
      endTime: 1714132450815,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/data/intercom/intercom-client.test.ts',
      startTime: 1714132450749,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['utils/resolve-delayed', 'resolvedDelayed'],
          duration: 12,
          failureDetails: [],
          failureMessages: [],
          fullName: 'utils/resolve-delayed resolvedDelayed waits for 10 ms before resolving',
          invocations: 1,
          location: null,
          numPassingAsserts: 1,
          retryReasons: [],
          status: 'passed',
          title: 'waits for 10 ms before resolving'
        },
        {
          ancestorTitles: ['utils/resolve-delayed', 'resolvedDelayed'],
          duration: 15,
          failureDetails: [],
          failureMessages: [],
          fullName: 'utils/resolve-delayed resolvedDelayed spends more than 10 ms resolving',
          invocations: 1,
          location: null,
          numPassingAsserts: 1,
          retryReasons: [],
          status: 'passed',
          title: 'spends more than 10 ms resolving'
        },
        {
          ancestorTitles: ['utils/resolve-delayed', 'resolvedDelayed'],
          duration: 1,
          failureDetails: [],
          failureMessages: [],
          fullName: 'utils/resolve-delayed resolvedDelayed rejects promise immediately',
          invocations: 1,
          location: null,
          numPassingAsserts: 2,
          retryReasons: [],
          status: 'passed',
          title: 'rejects promise immediately'
        }
      ],
      endTime: 1714132450854,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/utils/resolve-delayed.test.ts',
      startTime: 1714132450816,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['utils/config', 'getFirebaseProjectId'],
          duration: 0,
          failureDetails: [],
          failureMessages: [],
          fullName: 'utils/config getFirebaseProjectId gets value',
          invocations: 1,
          location: null,
          numPassingAsserts: 1,
          retryReasons: [],
          status: 'passed',
          title: 'gets value'
        },
        {
          ancestorTitles: ['utils/config', 'getFirebaseProjectId'],
          duration: 1,
          failureDetails: [],
          failureMessages: [],
          fullName: 'utils/config getFirebaseProjectId fails to get value',
          invocations: 1,
          location: null,
          numPassingAsserts: 1,
          retryReasons: [],
          status: 'passed',
          title: 'fails to get value'
        },
        {
          ancestorTitles: ['utils/config', 'getGoogleCloudBucketsUploads'],
          duration: 0,
          failureDetails: [],
          failureMessages: [],
          fullName: 'utils/config getGoogleCloudBucketsUploads gets value',
          invocations: 1,
          location: null,
          numPassingAsserts: 1,
          retryReasons: [],
          status: 'passed',
          title: 'gets value'
        },
        {
          ancestorTitles: ['utils/config', 'getGoogleCloudBucketsUploads'],
          duration: 0,
          failureDetails: [],
          failureMessages: [],
          fullName: 'utils/config getGoogleCloudBucketsUploads does not fail when getting value',
          invocations: 1,
          location: null,
          numPassingAsserts: 1,
          retryReasons: [],
          status: 'passed',
          title: 'does not fail when getting value'
        }
      ],
      endTime: 1714132450875,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/utils/config.test.ts',
      startTime: 1714132450856,
      status: 'passed',
      summary: ''
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['consants/jobs'],
          duration: 3,
          failureDetails: [],
          failureMessages: [],
          fullName: 'consants/jobs length of each job name prefixed is not longer than 64',
          invocations: 1,
          location: null,
          numPassingAsserts: 22,
          retryReasons: [],
          status: 'passed',
          title: 'length of each job name prefixed is not longer than 64'
        }
      ],
      endTime: 1714132450888,
      message: '',
      name: '/Users/michaelstorgaard/Sites/job-runner-cleanup/src/constants/jobs.test.ts',
      startTime: 1714132450876,
      status: 'passed',
      summary: ''
    }
  ],
  wasInterrupted: false
}
