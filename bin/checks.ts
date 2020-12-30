#!/usr/bin/env node

import yargs from 'yargs'

import { CheckConversionError, printSummary } from '../src/checks/checks-common'
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

process.env.PATH = `./node_modules/.bin:${process.env.PATH}`

async function main(argv: string[]) {
  const COMMIT_SHA = process.env.COMMIT_SHA
  if (!COMMIT_SHA) {
    console.error('Missing environment variable "COMMIT_SHA"')
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

  switch (command) {
    case 'jest': {
      printSummary(
        {
          name: 'jest',
          head_sha: COMMIT_SHA,
          status: 'in_progress',
          started_at: new Date().toISOString()
        },
        flags.ci
      )
      const output = await runJest('jest', args)
      const checkOutput = jestCheck({
        data: output,
        sha: COMMIT_SHA
      })
      printSummary(checkOutput, flags.ci)
      break
    }
    case 'eslint': {
      printSummary(
        {
          name: 'eslint',
          head_sha: COMMIT_SHA,
          status: 'in_progress',
          started_at: new Date().toISOString()
        },
        flags.ci
      )
      const output = await runEslint()
      const checkOutput = eslintCheck({
        data: output,
        sha: COMMIT_SHA
      })
      printSummary(checkOutput, flags.ci)
      break
    }
    case 'jest-cra': {
      const output = await runReactScriptsTest()
      const checkOutput = jestCheck({
        data: output,
        sha: COMMIT_SHA
      })
      printSummary(checkOutput, flags.ci)
      break
    }
    case 'mocha': {
      const output = await runMocha()
      const checkOutput = mochaCheck({
        data: output,
        sha: COMMIT_SHA
      })
      printSummary(checkOutput, flags.ci)
      break
    }
    case 'audit': {
      const output = await runNpmAudit(args)
      const checkOutput = auditCheck({
        data: output,
        sha: COMMIT_SHA
      })
      printSummary(checkOutput, flags.ci)
      break
    }
    case 'tsc': {
      const output = await runTsc()
      const checkOutput = tscCheck({
        data: output,
        sha: COMMIT_SHA
      })
      printSummary(checkOutput, flags.ci)
      break
    }
    default: {
      throw new Error(`Unknown command '${command}'`)
    }
  }

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
    } else {
      console.error(e)
    }
    process.exit(255)
  })
