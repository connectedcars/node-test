function parseUntil(idx: number, value: string, until: string[]): [boolean, number] {
  while (idx < value.length && !until.includes(value[idx])) {
    ++idx
  }

  return [idx < value.length, idx]
}

export function parseCreateTableStatements(sql: string): [number, number, number] {
  let idx = 0
  let createTableStatementCount = 0
  let hasCharacterSetCount = 0
  let hasCollationCount = 0

  while (idx < sql.length) {
    const match = sql.slice(idx).match(/create\s+table/i)
    let foundCreateTableStatement = false

    if (match && match.index != null) {
      idx = idx + match.index + match[0].length
      foundCreateTableStatement = true
      ++createTableStatementCount
    }

    if (!foundCreateTableStatement) {
      break
    }

    let parenthesisStack = 0

    while (idx < sql.length) {
      const result = parseUntil(idx, sql, ['(', ')'])

      if (result[0] === false) {
        break
      }

      idx = result[1]

      if (sql[idx] === '(') {
        parenthesisStack += 1
      } else if (sql[idx] === ')') {
        parenthesisStack -= 1
      }

      ++idx

      if (parenthesisStack === 0) {
        break
      }
    }

    if (idx >= sql.length) {
      break
    }

    const afterClosingParenthesis = idx + 1
    const result = parseUntil(idx, sql, [';'])
    idx = result[1]

    const tableOptions = sql.slice(afterClosingParenthesis, idx)
    const charSetMatch1 = tableOptions.match(/(charset|character set)\s*=\s*(\w+)/i)
    const charSetMatch2 = tableOptions.match(/(charset|character set)\s+(\w+)/i)
    const collationMatch1 = tableOptions.match(/collate\s*=\s*(\w+)/i)
    const collationMatch2 = tableOptions.match(/collate\s+(\w+)/i)

    if (charSetMatch1 || charSetMatch2) {
      hasCharacterSetCount += 1
    }

    if (collationMatch1 || collationMatch2) {
      hasCollationCount += 1
    }

    ++idx
  }

  return [createTableStatementCount, hasCharacterSetCount, hasCollationCount]
}
