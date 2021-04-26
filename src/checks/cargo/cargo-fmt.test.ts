import { cargoFmtCheck } from './cargo-fmt'
import { cargoFmtFailedOutput } from './resources/cargo-fmt-text'

describe('checks/cargo-fmt', () => {
  it('converts successful cargo fmt', () => {
    const result = cargoFmtCheck({ data: [], sha: '11963e3cb7ecbb9247f638cc0fb047173a62cf7a' })
    expect(result).toMatchSnapshot({
      completed_at: expect.any(String)
    })
  })
  it('converts failed cargo fmt', () => {
    const result = cargoFmtCheck({ data: cargoFmtFailedOutput, sha: '11963e3cb7ecbb9247f638cc0fb047173a62cf7a' })
    expect(result).toMatchSnapshot({
      completed_at: expect.any(String)
    })
  })
  it('converts buggy cargo fmt', () => {
    const result = cargoFmtCheck({
      data: {} as any,
      sha: '11963e3cb7ecbb9247f638cc0fb047173a62cf7a'
    })
    expect(result).toMatchSnapshot({
      completed_at: expect.any(String)
    })
  })
})
