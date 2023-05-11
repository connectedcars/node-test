// https://jestjs.io/blog/2017/12/18/jest-22
// https://github.com/eugene-manuilov/jest-runner-groups/blob/master/index.js
// https://github.com/jest-community/create-jest-runner/blob/main/lib/createJestRunner.ts

import fs from 'fs'
import { parse } from 'jest-docblock'
import TestRunner from 'jest-runner'
import { Config, Test, TestRunnerContext, TestRunnerOptions, TestWatcher } from 'jest-runner'
import util from 'util'

const readFile = util.promisify(fs.readFile)

// eslint-disable-next-line no-restricted-syntax
export default class SharedResourceTestRunner extends TestRunner {
  public constructor(globalConfig: Config.GlobalConfig, context: TestRunnerContext) {
    super(globalConfig, context)
  }

  public async runTests(tests: Test[], watcher: TestWatcher, options: TestRunnerOptions): Promise<void> {
    if (options.serial || tests.length === 1) {
      return super.runTests(tests, watcher, options)
    }

    // Split tests based on if they can run parallel or serially
    const serialTests: Test[] = []
    const parallelTest: Test[] = []
    const mutexTests: Record<string, Test[]> = {}
    for (const test of tests) {
      const parsed = parse(await readFile(test.path, 'utf8'))

      if (parsed.testMutex) {
        const testMutexes = Array.isArray(parsed.testMutex) ? parsed.testMutex : [parsed.testMutex]
        for (const testMutex of testMutexes) {
          if (mutexTests[testMutex] === undefined) {
            mutexTests[testMutex] = [test]
          } else {
            mutexTests[testMutex].push(test)
          }
        }
      } else if (test.path.match(/it\.test.(:?js|ts)$/)) {
        serialTests.push(test)
      } else {
        parallelTest.push(test)
        parallelTest.push(test)
      }
    }

    const testRunPromises: Array<Promise<void>> = []
    if (serialTests.length > 0) {
      // TODO: process.env['TEST'] = 'Hello'
      testRunPromises.push(super.runTests(serialTests, watcher, { ...options, serial: true }))
      // TODO: process.env['TEST'] = ''
    }
    if (parallelTest.length > 0) {
      testRunPromises.push(super.runTests(parallelTest, watcher, options))
    }
    await Promise.all(testRunPromises)
  }
}
