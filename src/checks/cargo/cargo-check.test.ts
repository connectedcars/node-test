import { cargoCheckCheck } from './cargo-check'
import { cargoCheckFailedOutput } from './resources/cargo-check-text'

describe('checks/cargo-check', () => {
  it('converts successful cargo check', () => {
    const result = cargoCheckCheck({ data: [], sha: '11963e3cb7ecbb9247f638cc0fb047173a62cf7a' })
    expect(result).toMatchSnapshot({
      completed_at: expect.any(String)
    })
  })
  it('converts failed cargo check', () => {
    const result = cargoCheckCheck({ data: cargoCheckFailedOutput, sha: '11963e3cb7ecbb9247f638cc0fb047173a62cf7a' })
    expect(result).toMatchSnapshot({
      completed_at: expect.any(String)
    })
  })
  it('converts buggy cargo check', () => {
    const result = cargoCheckCheck({
      data: {} as any,
      sha: '11963e3cb7ecbb9247f638cc0fb047173a62cf7a'
    })
    expect(result).toMatchSnapshot({
      completed_at: expect.any(String)
    })
  })
})
