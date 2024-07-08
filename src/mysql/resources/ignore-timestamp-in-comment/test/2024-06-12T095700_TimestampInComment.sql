CREATE TABLE `SomeTable` (
    `myColumn` VARCHAR(255) NULL
        COMMENT 'If the estimated timestamp was unknown,
          this field will be NULL.'
) CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

EXIT -- ROLLBACK

DROP TABLE `SomeTable`;
