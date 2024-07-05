CREATE TABLE AppStoreReviewsGlobal
(
    id              BIGINT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    reviewId        CHAR(36)                          NOT NULL COMMENT 'UUID key provided by the app store',
    rating          INT                               NOT NULL COMMENT 'Rating of the app (integer)',
    title           VARCHAR(255)                      NOT NULL COMMENT 'Title of the review',
    body            TEXT                              NOT NULL COMMENT 'Body content of the review',
    countryCode     CHAR(3)                           NOT NULL COMMENT '3-letter country code of the reviewer',
    reviewCreatedAt DATETIME                          NOT NULL COMMENT 'UTC time the review was created in the app store',
    appName         VARCHAR(255)                      NOT NULL COMMENT 'Name of the app being reviewed',
    createdAt       TIMESTAMP                         NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt       TIMESTAMP                         NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE INDEX (reviewId),
    INDEX `reviewCreatedAt` (reviewCreatedAt)
)
    COMMENT = 'Table containing app store reviews globally'
    ENGINE = InnoDB
    DEFAULT CHARSET = utf8mb4
    COLLATE = utf8mb4_general_ci;

EXIT -- Rollback

DROP TABLE AppStoreReviewsGlobal;
