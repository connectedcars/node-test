import { parseCreateTableStatements } from './parse'

describe('parser', () => {
  describe('parseCreateTableStatements', () => {
    it('parses create table statements with missing collations', async () => {
      const sql = `CREATE TABLE UserPushTokens1 (
    id INT PRIMARY KEY AUTO_INCREMENT,
    userId INT NOT NULL,
    token VARCHAR(162) COLLATE utf8_bin NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
) CHARSET utf8mb4;

CREATE TABLE UserPushTokens2
(
    id INT PRIMARY KEY AUTO_INCREMENT,
    userId INT NOT NULL,
    token VARCHAR(162) COLLATE utf8_bin NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB
  DEFAULT CHARSET=utf8mb4;

ALTER TABLE UserPushTokens2 CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

CREATE TABLE UserPushTokens3
(
    id INT PRIMARY KEY AUTO_INCREMENT,
    userId INT NOT NULL,
    token VARCHAR(162) COLLATE utf8_bin NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;`

      const [createTableStatementCount, hasCharacterSetCount, hasCollationCount] = parseCreateTableStatements(sql)

      expect(createTableStatementCount).toEqual(3)
      expect(hasCharacterSetCount).toEqual(2)
      expect(hasCollationCount).toEqual(0)
    })

    it('parses create table statements with missing character sets', async () => {
      const sql = `CREATE TABLE UserPushTokens1 (
    id INT PRIMARY KEY AUTO_INCREMENT,
    userId INT NOT NULL,
    token VARCHAR(162) COLLATE utf8_bin NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE UserPushTokens1 CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

CREATE TABLE UserPushTokens2
(
    id INT PRIMARY KEY AUTO_INCREMENT,
    userId INT NOT NULL,
    token VARCHAR(162) COLLATE utf8_bin NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB
  DEFAULT COLLATE=utf8mb4_general_ci;

CREATE TABLE UserPushTokens3
(
    id INT PRIMARY KEY AUTO_INCREMENT,
    userId INT NOT NULL,
    token VARCHAR(162) COLLATE utf8_bin NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT COLLATE utf8mb4_general_ci;`

      const [createTableStatementCount, hasCharacterSetCount, hasCollationCount] = parseCreateTableStatements(sql)

      expect(createTableStatementCount).toEqual(3)
      expect(hasCharacterSetCount).toEqual(0)
      expect(hasCollationCount).toEqual(2)
    })

    it('parses create table statements with no create table statements', async () => {
      const sql = `ALTER TABLE UserPushTokens1 CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

ALTER TABLE UserPushTokens1 CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;`

      const [createTableStatementCount, hasCharacterSetCount, hasCollationCount] = parseCreateTableStatements(sql)

      expect(createTableStatementCount).toEqual(0)
      expect(hasCharacterSetCount).toEqual(0)
      expect(hasCollationCount).toEqual(0)
    })

    it('parses empty sql', async () => {
      const [createTableStatementCount, hasCharacterSetCount, hasCollationCount] = parseCreateTableStatements('')

      expect(createTableStatementCount).toEqual(0)
      expect(hasCharacterSetCount).toEqual(0)
      expect(hasCollationCount).toEqual(0)
    })
  })
})
