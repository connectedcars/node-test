CREATE TABLE `CarVinLicensePlates` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `vin` varchar(17) NOT NULL,
  `licensePlate` varchar(50) NOT NULL DEFAULT '',
  `status` varchar(50) NOT NULL DEFAULT '',
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `vinLicenseplateStatus` (`vin`,`licensePlate`,`status`),
  KEY `vinUpdatedAt` (`vin`,`updatedAt`),
  KEY `licensePlateUpdatedAt` (`licensePlate`,`updatedAt`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

EXIT -- ROLLBACK

DROP TABLE `CarVinLicensePlates`;
