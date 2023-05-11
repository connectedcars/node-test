/**
 * @testMutex integrationStuff
 */

describe('Second Integration', () => {
  it('should pass the test', async () => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    expect(process.env.INTEGRATION_STUFF).toEqual('Hello')
  })
})
