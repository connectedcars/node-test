CREATE TABLE `SomeTable` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `val` varchar(17) NOT NULL,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `valUpdatedAt` (`val`,`updatedAt`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

EXIT -- ROLLBACK

DROP TABLE `SomeTable`;
