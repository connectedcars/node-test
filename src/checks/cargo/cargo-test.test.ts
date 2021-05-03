import { cargoTestCheck } from './cargo-test'
import { cargoTestFailedOutput } from './resources/cargo-test-text'

describe('checks/cargo-test', () => {
  it('converts no failed cargo-test', () => {
    const result = cargoTestCheck({ data: [], sha: '11963e3cb7ecbb9247f638cc0fb047173a62cf7a' })
    expect(result).toMatchSnapshot({
      completed_at: expect.any(String)
    })
  })

  it('converts invalid input', () => {
    const result = cargoTestCheck({ data: {} as any, sha: '11963e3cb7ecbb9247f638cc0fb047173a62cf7a' })
    expect(result).toMatchSnapshot({
      completed_at: expect.any(String)
    })
  })

  it('converts failed compilation and tests', () => {
    const result = cargoTestCheck({ data: cargoTestFailedOutput, sha: '11963e3cb7ecbb9247f638cc0fb047173a62cf7a' })
    expect(result).toMatchSnapshot({
      completed_at: expect.any(String)
    })
  })
})
