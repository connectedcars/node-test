CREATE TABLE SomeTable
(
    id              BIGINT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    firstName       VARCHAR(255)                      NOT NULL COMMENT 'Name of the user',
    createdAt       TIMESTAMP                         NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt       TIMESTAMP                         NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE INDEX (firstName)
)
    COMMENT = 'Table containing something'
    ENGINE = InnoDB
    DEFAULT CHARSET = utf8mb4
    COLLATE = utf8mb4_general_ci;

EXIT -- Rollback

DROP TABLE SomeTable;
