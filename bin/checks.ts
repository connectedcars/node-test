#!/usr/bin/env node

import yargs from 'yargs'

import { CheckConversionError, CheckRunResult, printSummary } from '../src/checks/checks-common'
import { eslintCheck } from '../src/checks/eslint/eslint'
import { runEslint } from '../src/checks/eslint/run-eslint'
import { jestCheck } from '../src/checks/jest/jest'
import { runJest, runReactScriptsTest } from '../src/checks/jest/run-jest'
import { mochaCheck } from '../src/checks/mocha/mocha'
import { runMocha } from '../src/checks/mocha/run-mocha'
import { auditCheck } from '../src/checks/npm-audit/audit'
import { runNpmAudit } from '../src/checks/npm-audit/run-audit'
import { runTsc } from '../src/checks/tsc/run-tsc'
import { tscCheck } from '../src/checks/tsc/tsc'
const { REPO_NAME, COMMIT_SHA, ORG_NAME } = process.env

process.env.PATH = `./node_modules/.bin:${process.env.PATH}`

async function main(argv: string[]) {
  if (!REPO_NAME) {
    console.error('Missing environment variable "REPO_NAME"')
    return 1
  }
  if (!COMMIT_SHA) {
    console.error('Missing environment variable "COMMIT_SHA"')
    return 1
  }
  if (!ORG_NAME) {
    console.error('Missing environment variable "ORG_NAME"')
    return 1
  }

  const { _: commandAndArgs, ...flags } = yargs
    .options({
      ci: {
        describe: 'Only output json',
        boolean: true
      }
    })
    .command('jest', 'Runs Jest with CI output')
    .command('eslint', 'Runs Eslint with CI output')
    .command('jest-cra', 'Runs react-scripts test with CI output')
    .command('mocha', 'Runs Mocha with CI output')
    .command('audit', 'Runs audit with CI output')
    .command('tsc', 'Runs tsc with CI output')
    .strict()
    .help()
    .parse(argv.slice(2))

  const [command, ...args] = commandAndArgs

  let checkOutput: CheckRunResult
  switch (command) {
    case 'jest': {
      const output = await runJest('jest', args)
      checkOutput = jestCheck({
        data: output,
        org: ORG_NAME,
        repo: REPO_NAME,
        sha: COMMIT_SHA
      })
      break
    }
    case 'eslint': {
      const output = await runEslint()
      checkOutput = eslintCheck({
        data: output,
        org: ORG_NAME,
        repo: REPO_NAME,
        sha: COMMIT_SHA
      })
      break
    }
    case 'jest-cra': {
      const output = await runReactScriptsTest()
      checkOutput = jestCheck({
        data: output,
        org: ORG_NAME,
        repo: REPO_NAME,
        sha: COMMIT_SHA
      })
      break
    }
    case 'mocha': {
      const output = await runMocha()
      checkOutput = mochaCheck({
        data: output,
        org: ORG_NAME,
        repo: REPO_NAME,
        sha: COMMIT_SHA
      })
      break
    }
    case 'audit': {
      const output = await runNpmAudit(args)
      checkOutput = auditCheck({
        data: output,
        sha: COMMIT_SHA
      })
      break
    }
    case 'tsc': {
      const output = await runTsc()
      checkOutput = tscCheck({
        data: output,
        sha: COMMIT_SHA
      })
      break
    }
    default: {
      throw new Error(`Unknown command '${command}'`)
    }
  }
  printSummary(checkOutput, flags.ci)

  return 0
}

main(process.argv)
  .then(exitCode => {
    process.exit(exitCode)
  })
  .catch(e => {
    if (e instanceof CheckConversionError) {
      // TODO: format in github format
      console.error(
        JSON.stringify(
          {
            error: e.message,
            input: e.input
          },
          null,
          2
        )
      )
    }
    //console.error(e)
    process.exit(255)
  })
