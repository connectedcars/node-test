// ./node_modules/.bin/jest --verbose --useStderr --no-watchman --no-cache --projects /Users/tlb/git/connectedcars/node-test/src/runner/__fixtures__
module.exports = {
  runner: require.resolve('../../../build/dist/src/runner'),
  //runner: require.resolve('/Users/tlb/git/connectedcars/node-test/build/dist/src/runner/index.js'),
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testPathIgnorePatterns: ['^.+\\.helper\\.test\\.ts$'],
  collectCoverage: false,
  collectCoverageFrom: [
    '**/*.ts',
    '!**/node_modules/**',
    '!**/types/**',
    '!**/src/test/**',
    '!**/src/**.test.ts',
    '!**/bin/**.test.ts'
  ],
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  snapshotFormat: {
    escapeString: true,
    printBasicPrototype: true
  },
  globalSetup: './src/test-setup.ts',
  globalTeardown: './src/test-teardown.ts'
}
