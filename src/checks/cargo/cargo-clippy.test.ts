import { cargoClippyCheck } from './cargo-clippy'
import { cargoClippyFailedOutput } from './resources/cargo-clippy-text'

describe('checks/cargo-clippy', () => {
  it('converts successful cargo-clippy', () => {
    const result = cargoClippyCheck({ data: [], sha: '11963e3cb7ecbb9247f638cc0fb047173a62cf7a' })
    expect(result).toMatchSnapshot({
      completed_at: expect.any(String)
    })
  })
  it('converts failed cargo-clippy', () => {
    const result = cargoClippyCheck({ data: cargoClippyFailedOutput, sha: '11963e3cb7ecbb9247f638cc0fb047173a62cf7a' })
    expect(result).toMatchSnapshot({
      completed_at: expect.any(String)
    })
  })
  it('converts buggy cargo-clippy', () => {
    const result = cargoClippyCheck({
      data: {} as any,
      sha: '11963e3cb7ecbb9247f638cc0fb047173a62cf7a'
    })
    expect(result).toMatchSnapshot({
      completed_at: expect.any(String)
    })
  })
})
