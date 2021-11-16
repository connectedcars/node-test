import { isTouchingWorkspaceRequired } from './cargo'
import { parseRustVersion, RustVersion } from './run-rustc-version'

describe('cargo-utils', () => {
  it('parse rust version', () => {
    expect(parseRustVersion('rustc 1.54.0 (a178d0322 2021-07-26)')).toEqual(ver(1, 54, 0))

    expect(parseRustVersion('rustc 1.54.0  ')).toEqual(ver(1, 54, 0))
    expect(parseRustVersion('  rustc 1.54.0')).toEqual(ver(1, 54, 0))
    expect(parseRustVersion('  rustc 1.54.0  ')).toEqual(ver(1, 54, 0))

    expect(parseRustVersion('rustc 1.49.0')).toEqual(ver(1, 49, 0))

    expect(parseRustVersion('rustc 1.49')).toEqual(null)
    expect(parseRustVersion('rustc 1')).toEqual(null)

    expect(parseRustVersion('rustc 1.a49.0')).toEqual(null)
    expect(parseRustVersion('rustc 1.49a.0')).toEqual(null)
  })

  it('requires touching workspace', () => {
    expect(isTouchingWorkspaceRequired(ver(2, 10, 3))).toBe(false)
    expect(isTouchingWorkspaceRequired(ver(1, 52, 2))).toBe(false)
    expect(isTouchingWorkspaceRequired(ver(1, 52, 0))).toBe(false)

    expect(isTouchingWorkspaceRequired(ver(1, 51, 14))).toBe(true)
    expect(isTouchingWorkspaceRequired(ver(1, 51, 8))).toBe(true)
    expect(isTouchingWorkspaceRequired(ver(1, 51, 0))).toBe(true)
    expect(isTouchingWorkspaceRequired(ver(1, 49, 0))).toBe(true)
    expect(isTouchingWorkspaceRequired(ver(1, 40, 0))).toBe(true)
    expect(isTouchingWorkspaceRequired(ver(0, 60, 0))).toBe(true)
    expect(isTouchingWorkspaceRequired(ver(0, 30, 5))).toBe(true)

    expect(isTouchingWorkspaceRequired(null)).toBe(true)
  })

  function ver(major: number, minor: number, patch: number): RustVersion {
    return {
      major,
      minor,
      patch
    }
  }
})
