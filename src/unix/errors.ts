export interface SysCallError extends Error {
  code: string
  errno: number | string
  syscall: string
}

export function isSysCallError(value: unknown): value is SysCallError {
  return (
    typeof value === 'object' &&
    value !== null &&
    'code' in value &&
    typeof value.code === 'string' &&
    'errno' in value &&
    (typeof value.errno === 'number' || typeof value.errno === 'string') &&
    'syscall' in value &&
    typeof value.syscall === 'string'
  )
}

export function isFileNotFoundError(error: unknown): boolean {
  return isSysCallError(error) && !!error.syscall && error.code == 'ENOENT'
}

export function isNoProcessForPidError(error: Error): boolean {
  return isSysCallError(error) && error.syscall === 'kill' && error.code == 'ESRCH'
}
