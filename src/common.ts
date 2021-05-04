import deepEqual from 'deep-equal'
import sinon from 'sinon'

// https://github.com/microsoft/TypeScript/issues/1897
export type Json = null | boolean | number | string | Json[] | { [prop: string]: Json }

// Usage: let stub: TypedSinonStub<typeof fs.readFile>
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TypedSinonStub<A extends (...args: any) => any> = sinon.SinonStub<Parameters<A>, ReturnType<A>>

// Returns a new array of all unique items in `items`.
// Filters duplicates based on structural equality, i.e.
// it uses `deepEqual()`.
export function filterDuplicates<T>(items: T[]): T[] {
  const filtered: T[] = []
  for (const nextItem of items) {
    const isUnique = filtered.find(item => deepEqual(item, nextItem)) === undefined
    if (isUnique) {
      filtered.push(nextItem)
    }
  }
  return filtered
}
