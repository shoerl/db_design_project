-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: db_design_project
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `song`
--

DROP TABLE IF EXISTS `song`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `song` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) DEFAULT NULL,
  `length` decimal(8,2) DEFAULT NULL,
  `genre` varchar(45) NOT NULL,
  `explicit` tinyint(1) DEFAULT NULL,
  `album_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_album` (`album_id`),
  KEY `song_ibfk_1` (`genre`),
  CONSTRAINT `fk_album` FOREIGN KEY (`album_id`) REFERENCES `album` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `song_ibfk_1` FOREIGN KEY (`genre`) REFERENCES `genre` (`genre`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `song`
--

LOCK TABLES `song` WRITE;
/*!40000 ALTER TABLE `song` DISABLE KEYS */;
INSERT INTO `song` VALUES (6,'Smells Like Teen Spirit',5.01,'ROCK',0,2),(7,'In Bloom',4.15,'ROCK',0,2),(8,'Come As You Are',3.38,'ROCK',0,2),(9,'Breed',3.04,'ROCK',0,2),(10,'Lithium',4.17,'ROCK',0,2),(11,'BLOOD.',1.58,'HIPHOP',1,3),(12,'DNA.',3.05,'HIPHOP',1,3),(13,'YAH.',2.40,'HIPHOP',1,3),(14,'ELEMENT.',3.28,'HIPHOP',1,3),(15,'FEEL.',3.34,'HIPHOP',1,3),(17,'Polly',2.53,'ROCK',0,2),(18,'Territorial Pissings',2.22,'ROCK',0,2),(19,'Drain You',3.43,'ROCK',0,2),(20,'Lounge Act',2.36,'ROCK',0,2),(21,'Stay Away',3.31,'ROCK',0,2),(22,'On A Plain',3.14,'ROCK',0,2),(23,'Something In The Way',3.52,'ROCK',0,2),(24,'Endless, Nameless',6.43,'ROCK',0,2),(25,'BUSY / SIRENS',5.29,'HIPHOP',1,4),(26,'BROKEN GIRLS',4.37,'HIPHOP',1,4),(27,'LIFE',2.42,'HIPHOP',1,4),(28,'CALLIGRAPHY',3.04,'HIPHOP',1,4),(29,'FIGHTER',4.42,'HIPHOP',1,4),(30,'SMILE',3.28,'HIPHOP',1,4),(31,'LOGOUT',2.30,'HIPHOP',1,4),(32,'GREY',4.00,'HIPHOP',1,4),(33,'PROM / KING',7.31,'HIPHOP',1,4),(34,'HEAVEN ALL AROUND ME',3.32,'HIPHOP',1,4),(35,'Donuts (Outro)',0.12,'HIPHOP',0,5),(36,'Workinonit',2.57,'HIPHOP',0,5),(37,'Waves',1.38,'HIPHOP',0,5),(38,'Light My Fire',0.35,'HIPHOP',0,5),(39,'The New',0.49,'HIPHOP',0,5);
/*!40000 ALTER TABLE `song` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-26 13:29:50
