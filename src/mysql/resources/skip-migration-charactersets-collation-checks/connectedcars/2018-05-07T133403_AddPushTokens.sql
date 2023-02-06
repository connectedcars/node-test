CREATE TABLE UserPushTokens
(
    id INT PRIMARY KEY AUTO_INCREMENT,
    userId INT NOT NULL,
    token VARCHAR(162) COLLATE utf8_bin NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
);
CREATE UNIQUE INDEX UserPushTokens_token_uindex ON UserPushTokens (token);
CREATE INDEX UserPushTokens_userId_index ON UserPushTokens (userId);

EXIT -- ROLLBACK

DROP TABLE UserPushTokens;

