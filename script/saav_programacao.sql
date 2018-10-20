-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: localhost    Database: saav
-- ------------------------------------------------------
-- Server version	8.0.11

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `programacao`
--

DROP TABLE IF EXISTS `programacao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `programacao` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `nome` text,
  `dia_emissao` datetime DEFAULT NULL,
  `emissora` text,
  `hora_inicio` datetime DEFAULT NULL,
  `hora_fim` datetime DEFAULT NULL,
  `link_video` text,
  `nome_video` text,
  `usuario_id` int(10) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `programacao`
--

LOCK TABLES `programacao` WRITE;
/*!40000 ALTER TABLE `programacao` DISABLE KEYS */;
INSERT INTO `programacao` VALUES (1,'','2018-09-18 02:26:59','','2018-10-19 03:00:00','2018-10-19 03:00:00','https://s3.sa-east-1.amazonaws.com/imagens.ne10.uol.com.br/teste/1537237572248-SampleVideo_1280x720_5mb.mp4',NULL,NULL,'Analisado'),(2,'','2018-09-18 02:27:13','','2018-10-19 03:00:00','2018-10-19 03:00:00','https://s3.sa-east-1.amazonaws.com/imagens.ne10.uol.com.br/teste/1537237571694-SampleVideo_1280x720_5mb.mp4',NULL,NULL,'Analisado'),(3,'','2018-09-18 02:27:27','','2018-10-19 03:00:00','2018-10-19 03:00:00','https://s3.sa-east-1.amazonaws.com/imagens.ne10.uol.com.br/teste/1537237571740-SampleVideo_1280x720_5mb.mp4',NULL,NULL,'Analisado'),(4,'Program-DE2ED','2018-10-18 02:16:29',NULL,'2018-10-19 03:00:00','2018-10-19 03:00:00','https://analise-audio-visual.s3.amazonaws.com/1539828947644-1537237571694-SampleVideo_1280x720_5mb.mp4',NULL,NULL,'Analisado'),(5,'Program-DE2ED','2018-10-18 02:21:44',NULL,'2018-10-19 03:00:00','2018-10-19 03:00:00','https://analise-audio-visual.s3.amazonaws.com/1539829234905-1537237571694-SampleVideo_1280x720_5mb.mp4',NULL,NULL,'Analisado'),(6,'Program-DE2ED','2018-10-18 02:26:30',NULL,'2018-10-19 03:00:00','2018-10-19 03:00:00','https://analise-audio-visual.s3.amazonaws.com/1539829523134-1537237571694-SampleVideo_1280x720_5mb.mp4',NULL,NULL,'Analisado'),(7,'Program-MQ0O6','2018-10-18 03:09:31',NULL,'2018-10-19 03:00:00','2018-10-19 03:00:00','https://analise-audio-visual.s3.amazonaws.com/1539832119150-SampleVideo_1280x720_5mb.mp4',NULL,NULL,'Analisado'),(8,'Program-5SOEP','2018-10-20 07:57:46',NULL,'2018-10-18 03:00:00','2018-10-18 03:00:00','https://analise-audio-visual.s3.amazonaws.com/1540022238219-SampleVideo_1280x720_5mb.mp4',NULL,NULL,'Analisado');
/*!40000 ALTER TABLE `programacao` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-10-20  5:34:02
