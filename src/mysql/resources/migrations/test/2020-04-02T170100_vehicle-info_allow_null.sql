ALTER TABLE `VehicleInfo` ADD `model` VARCHAR(255) NULL AFTER `name`;
ALTER TABLE `VehicleInfo` ADD `fuelType` VARCHAR(255) NULL AFTER `model`;

EXIT -- ROLLBACK

ALTER TABLE `VehicleInfo` DROP COLUMN `model`;
ALTER TABLE `VehicleInfo` DROP COLUMN `fuelType`;