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
          location: null,
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
