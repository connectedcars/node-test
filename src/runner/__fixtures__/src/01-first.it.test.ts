/**
 * @requiresDatabase mysql-5.7:src/mysql/resources/migrations
 * @requiresDatabase mysql-8:src/mysql/resources/migrations
 */

describe('First Integration', () => {
  it('should pass the test', async () => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    expect(1).toEqual(1)
  })
})
