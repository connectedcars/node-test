describe('Second Integration', () => {
  it('should pass the test', async () => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    expect(1).toEqual(1)
  })
})
