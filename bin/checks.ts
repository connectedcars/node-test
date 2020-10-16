#!/usr/bin/env node

import { exit } from 'process'
import yargs from 'yargs'

import { printSummary } from '../src/checks/checks-common'
import { eslintCheck, EslintInput } from '../src/checks/eslint/eslint'
import { runEslint } from '../src/checks/eslint/run-eslint'
import { jestCheck, JestInput } from '../src/checks/jest/jest'
import { runJest, runReactScriptsTest } from '../src/checks/jest/run-jest'
import { mochaCheck, MochaInput } from '../src/checks/mocha/mocha'
import { runMocha } from '../src/checks/mocha/run-mocha'
import { auditCheck, AuditInput } from '../src/checks/npm-audit/audit'
import { runNpmAudit } from '../src/checks/npm-audit/run-audit'
import { runTsc } from '../src/checks/tsc/run-tsc'
import { tscCheck } from '../src/checks/tsc/tsc'
const { REPO_NAME, COMMIT_SHA, ORG_NAME } = process.env

process.env.PATH = `./node_modules/.bin:${process.env.PATH}`

async function main() {
  if (!REPO_NAME) {
    console.error('Missing environment variable "REPO_NAME"')
    exit(1)
  }
  if (!COMMIT_SHA) {
    console.error('Missing environment variable "COMMIT_SHA"')
    exit(1)
  }
  if (!ORG_NAME) {
    console.error('Missing environment variable "ORG_NAME"')
    exit(1)
  }

  yargs
    .options({
      ci: {
        describe: 'Only output json',
        boolean: true
      }
    })
    .command({
      command: 'jest-ci',
      describe: 'Runs Jest with CI output',
      handler: async args => {
        try {
          const result = await runJest()
          const jestInput: JestInput = {
            data: result,
            org: ORG_NAME,
            repo: REPO_NAME,
            sha: COMMIT_SHA
          }
          const checkOutput = jestCheck(jestInput)
          console.log(JSON.stringify(checkOutput, null, 2))
          printSummary(checkOutput, args.ci as boolean)
        } catch (error) {
          console.error(error)
        }
      }
    })
    .command({
      command: 'eslint-ci',
      describe: 'Runs Eslint with CI output',
      handler: async args => {
        try {
          const result = await runEslint()
          const eslintInput: EslintInput = {
            data: result,
            org: ORG_NAME,
            repo: REPO_NAME,
            sha: COMMIT_SHA
          }
          const checkOutput = eslintCheck(eslintInput)
          console.log(JSON.stringify(checkOutput, null, 2))
          printSummary(checkOutput, args.ci as boolean)
        } catch (error) {
          console.error(error)
        }
      }
    })
    .command({
      command: 'jest-cra-ci',
      describe: 'Runs Jest with CI output',
      handler: async args => {
        try {
          const result = await runReactScriptsTest()
          const jestInput: JestInput = {
            data: result,
            org: ORG_NAME,
            repo: REPO_NAME,
            sha: COMMIT_SHA
          }
          console.log(result)
          const checkOutput = jestCheck(jestInput)
          console.log(JSON.stringify(checkOutput, null, 2))
          printSummary(checkOutput, args.ci as boolean)
        } catch (error) {
          console.error(error)
        }
      }
    })
    .command({
      command: 'mocha-ci',
      describe: 'Runs Mocha with CI output',
      handler: async args => {
        try {
          const result = await runMocha()
          const mochaInput: MochaInput = {
            data: result,
            org: ORG_NAME,
            repo: REPO_NAME,
            sha: COMMIT_SHA
          }
          console.log(result)
          const checkOutput = mochaCheck(mochaInput)
          console.log(JSON.stringify(checkOutput, null, 2))
          printSummary(checkOutput, args.ci as boolean)
        } catch (error) {
          console.error(error)
        }
      }
    })
    .command({
      command: 'audit-ci',
      describe: 'Runs audit with CI output',
      handler: async args => {
        try {
          const result = await runNpmAudit()
          const auditInput: AuditInput = {
            data: result
          }
          const checkOutput = auditCheck(auditInput)
          console.log(JSON.stringify(checkOutput, null, 2))
          printSummary(checkOutput, args.ci as boolean)
        } catch (error) {
          console.error(error)
        }
      }
    })
    .command({
      command: 'tsc-ci',
      describe: 'Runs tsc with CI output',
      handler: async args => {
        try {
          const result = await runTsc()
          const checkOutput = tscCheck({ data: result })
          console.log(JSON.stringify(checkOutput, null, 2))
          printSummary(checkOutput, args.ci as boolean)
        } catch (error) {
          console.error(error)
        }
      }
    })
    .help().argv
}

main().catch(e => {
  console.error(e)
  process.exit(255)
})
