CREATE TABLE `VehicleInfo` (
    `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
    `vin` VARCHAR(17) NOT NULL,
    `createdAt` tImEsTaMp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` TIMESTAMP,

    PRIMARY KEY (`id`),
    UNIQUE KEY `vin` (`vin`)
)
ENGINE=InnoDB DEFAULT COLLATE utf8mb4_general_ci cHaRsEt= utf8mb4 COMMENT 'Basic vehicle information';

EXIT -- ROLLBACK

DROP TABLE `VehicleInfo`;
