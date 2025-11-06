# node-test

Connected Cars JavaScript/TypeScript testing utilities

## Install

``` bash
npm install --save-dev @connectedcars/test
```

## Use

### EnvStub
Stubs all environment variable keys passed into the constructor. This allows you to set the variables in a test case (for example `process.env.LOG_LEVEL = 'ERROR'`) without those changes persisting between test cases.

```typescript
describe('database/config', () => {
  let envStub: EnvStub
  beforeEach(() => {
    envStub = new EnvStub(['CORE_DB', 'LOG_LEVEL'])
  })
  afterEach(() => {
    envStub.restore()
  })
  test('some test', () => {
    // CORE_DB and LOG_LEVEL are always undefined until explicitly defined in a test case
  })
})
```
