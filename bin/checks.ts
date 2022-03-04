#!/usr/bin/env node

import fs from 'fs'
import util from 'util'
import yargs from 'yargs'

import { isCargoBuildSuccessful } from '../src/checks/cargo/cargo'
import { cargoCheckCheck } from '../src/checks/cargo/cargo-check'
import { cargoClippyCheck } from '../src/checks/cargo/cargo-clippy'
import { cargoFmtCheck } from '../src/checks/cargo/cargo-fmt'
import { cargoSortCheck } from '../src/checks/cargo/cargo-sort'
import { cargoTestCheck } from '../src/checks/cargo/cargo-test'
import { tryCargoRun } from '../src/checks/cargo/run-cargo'
import { runCargoCheck } from '../src/checks/cargo/run-cargo-check'
import { runCargoClippy } from '../src/checks/cargo/run-cargo-clippy'
import { runCargoFmt } from '../src/checks/cargo/run-cargo-fmt'
import { runCargoSort } from '../src/checks/cargo/run-cargo-sort'
import { runCargoDocTest, runCargoTest } from '../src/checks/cargo/run-cargo-test'
import { CheckConversionError, CheckRunCompleted, printSummary } from '../src/checks/checks-common'
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

const access = util.promisify(fs.access)

export async function isFileReadable(filePath: string): Promise<boolean> {
  const res = await access(filePath, fs.constants.R_OK)
    .then(() => true)
    .catch(() => false)
  return res
}

async function main(argv: string[]) {
  const { _: commandAndArgs, ...flags } = yargs
    .options({
      ci: {
        describe: 'Only output json',
        boolean: true
      },
      hardFail: {
        describe: 'Return non zero exit code when conclusion is not success, natural or skipped'
      }
    })
    .command('jest', 'Runs Jest with CI output')
    .command('eslint', 'Runs Eslint with CI output')
    .command('jest-cra', 'Runs react-scripts test with CI output')
    .command('mocha', 'Runs Mocha with CI output')
    .command('audit', 'Runs audit with CI output')
    .command('tsc', 'Runs tsc with CI output')
    .command('cargo-check', 'Runs cargo check with CI output')
    .command('cargo-clippy', 'Runs cargo clippy with CI output')
    .command('cargo-test', 'Runs cargo test with CI output')
    .command('cargo-fmt', 'Runs cargo fmt with CI output')
    .command('cargo-all', 'Runs all default installed cargo checks with CI output')
    .command('cargo-sort', 'Runs cargo sort with CI output')
    .command('auto', 'Runs all relevant checks')
    .strict()
    .help()
    .parse(argv.slice(2))

  // If flags are unset they are `undefined`, which results in issues
  // when default parameters are `true`, as then the argument becomes
  // `true` instead of `false`. To avoid issues, just set the flags
  // to `false` if undefined.
  flags.ci = flags.ci || false;
  flags.hardFail = flags.hardFail || false;

  const [command, ...args] = commandAndArgs.map(a => a.toString())

  const COMMIT_SHA = process.env.COMMIT_SHA || ''
  if (flags.ci && COMMIT_SHA.length == 0) {
    console.error('Missing environment variable "COMMIT_SHA"')
    return 1
  }

  const startedAt = new Date().toISOString()

  // `cargo-sort` is excluded as it requires being manually installed first
  const ALL_CARGO_COMMANDS = ['cargo-check', 'cargo-clippy', 'cargo-test', 'cargo-fmt']
  const ALL_COMMANDS = ['jest', 'eslint', 'jest-cra', 'mocha', 'audit', 'tsc', ...ALL_CARGO_COMMANDS]

  let commands
  if (command == 'auto') {
    commands = ALL_COMMANDS
  } else if (command == 'cargo-all') {
    commands = ALL_CARGO_COMMANDS
  } else {
    commands = [command]
  }

  let failure = false
  let skipRemainingChecks = false
  for (const cmd of commands) {
    if (skipRemainingChecks) {
      const summary = `Skipping ${cmd}`
      printSummary(
        {
          name: cmd,
          head_sha: COMMIT_SHA,
          status: 'completed',
          conclusion: 'skipped',
          completed_at: new Date().toISOString(),
          started_at: startedAt,
          output: {
            title: summary.slice(0, 255),
            summary: summary.slice(0, 255)
          }
        },
        flags.ci
      )
      continue
    }

    try {
      const convertFunction = await lookupConvertFunction(cmd, args, COMMIT_SHA, command === 'auto', flags.ci, command)
      if (convertFunction === null) {
        continue
      }
      printSummary(
        {
          name: cmd,
          head_sha: COMMIT_SHA,
          status: 'in_progress',
          started_at: startedAt
        },
        flags.ci
      )

      const [skipRest, checkOutput] = await convertFunction()
      skipRemainingChecks ||= skipRest

      printSummary({ ...checkOutput, started_at: startedAt }, flags.ci)
      if (
        flags.hardFail &&
        checkOutput.conclusion !== 'success' &&
        checkOutput.conclusion !== 'neutral' &&
        checkOutput.conclusion !== 'skipped'
      ) {
        failure = true
      }
    } catch (e) {
      if (e instanceof CheckConversionError) {
        printSummary({
          name: cmd,
          head_sha: COMMIT_SHA,
          status: 'completed',
          conclusion: 'failure',
          completed_at: new Date().toISOString(),
          started_at: startedAt,
          output: {
            title: `Failed converting check`,
            summary: e.message.slice(0, 255),
            text: '```json\n' + JSON.stringify(e, null, 2) + '```\n'
          }
        })
        if (flags.hardFail) {
          failure = true
        }
      }
      printSummary({
        name: cmd,
        head_sha: COMMIT_SHA,
        status: 'completed',
        conclusion: 'failure',
        completed_at: new Date().toISOString(),
        started_at: startedAt,
        output: {
          title: `Failed for unknown reason`,
          summary: e.message.slice(0, 255),
          text: '```json\n' + JSON.stringify(e, null, 2) + '```\n'
        }
      })
      if (flags.hardFail) {
        failure = true
      }
    }
  }

  return failure ? 1 : 0
}

async function lookupConvertFunction(
  command: string,
  args: string[],
  commitSha: string,
  detect = false,
  ci = true,
  cliCommand?: string
): Promise<(() => Promise<[boolean, CheckRunCompleted]>) | null> {
  switch (command) {
    case 'jest': {
      if (detect && !(await isFileReadable('jest.config.js'))) {
        return null
      }
      return async () => {
        const output = await runJest('jest', args)
        return [
          false,
          jestCheck({
            data: output,
            sha: commitSha
          })
        ]
      }
    }
    case 'eslint': {
      if (detect && !(await isFileReadable('.eslintrc'))) {
        return null
      }
      return async () => {
        const output = await runEslint(args)
        return [
          false,
          eslintCheck({
            data: output,
            sha: commitSha
          })
        ]
      }
    }
    case 'jest-cra': {
      if (detect) {
        // TODO: Detect react script somehow
        return null
      }
      return async () => {
        const output = await runReactScriptsTest()
        return [
          false,
          jestCheck({
            data: output,
            sha: commitSha,
            name: 'jest-cra'
          })
        ]
      }
    }
    case 'mocha': {
      if (detect) {
        // TODO: Detect mocha fx by looking in package.json
        return null
      }
      return async () => {
        const output = await runMocha(args)
        return [
          false,
          mochaCheck({
            data: output,
            sha: commitSha
          })
        ]
      }
    }
    case 'audit': {
      if (detect && !(await isFileReadable('package.json'))) {
        return null
      }
      return async () => {
        const output = await runNpmAudit(args)
        return [
          false,
          auditCheck({
            data: output,
            sha: commitSha
          })
        ]
      }
    }
    case 'tsc': {
      if (detect && !(await isFileReadable('tsconfig.json'))) {
        return null
      }
      return async () => {
        const output = await runTsc()
        return [
          false,
          tscCheck({
            data: output,
            sha: commitSha
          })
        ]
      }
    }
    case 'cargo-check': {
      if (detect && !(await isFileReadable('Cargo.toml'))) {
        return null
      }
      return async () => {
        // To maximize the amount of lints caught across features, then
        // then `cargo check` needs to be executed twice, both with and
        // without `--all-features`.
        // See more at https://github.com/connectedcars/node-test/pull/55
        const output = await tryCargoRun(async () => [
          // Debug build
          await runCargoCheck(args, false, ci),
          // Debug build - all features
          await runCargoCheck(args, true, ci),
          // Release build
          await runCargoCheck(args, false, ci, true),
          // Release build - all features
          await runCargoCheck(args, true, ci, true)
        ])
        const skipRest = !isCargoBuildSuccessful(output)
        return [
          skipRest,
          cargoCheckCheck(
            {
              data: output,
              sha: commitSha
            },
            command !== cliCommand
          )
        ]
      }
    }
    case 'cargo-clippy': {
      if (detect && !(await isFileReadable('Cargo.toml'))) {
        return null
      }
      return async () => {
        const output = await tryCargoRun(async () => [
          // Debug build
          await runCargoClippy(args, ci, false),
          // Release build
          await runCargoClippy(args, ci, true)
        ])
        return [
          false,
          cargoClippyCheck(
            {
              data: output,
              sha: commitSha
            },
            command !== cliCommand
          )
        ]
      }
    }
    case 'cargo-test': {
      if (detect && !(await isFileReadable('Cargo.toml'))) {
        return null
      }
      return async () => {
        const output = await tryCargoRun(async () => [
          // Run unit tests and integration tests
          await runCargoTest(args, ci),
          // Run doc tests
          await runCargoDocTest(args, ci)
        ])
        return [
          false,
          cargoTestCheck({
            data: output,
            sha: commitSha
          })
        ]
      }
    }
    case 'cargo-fmt': {
      if (detect && !(await isFileReadable('Cargo.toml'))) {
        return null
      }
      return async () => {
        const output = await tryCargoRun(async () => [await runCargoFmt(args, ci)])
        return [
          false,
          cargoFmtCheck({
            data: output,
            sha: commitSha
          })
        ]
      }
    }
    case 'cargo-sort': {
      if (detect && !(await isFileReadable('Cargo.toml'))) {
        return null
      }
      return async () => {
        const output = await tryCargoRun(async () => [await runCargoSort(args)])
        return [
          false,
          await cargoSortCheck({
            data: output,
            sha: commitSha
          })
        ]
      }
    }
    default: {
      throw new Error(`Unknown command '${command}'`)
    }
  }
}

main(process.argv)
  .then(exitCode => {
    process.exit(exitCode)
  })
  .catch(e => {
    console.error(e)
    process.exit(255)
  })
