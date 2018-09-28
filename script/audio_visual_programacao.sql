-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: audio_visual
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.32-MariaDB

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
  `criacao` datetime DEFAULT NULL,
  `excluido` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `programacao`
--

LOCK TABLES `programacao` WRITE;
/*!40000 ALTER TABLE `programacao` DISABLE KEYS */;
INSERT INTO `programacao` VALUES (1,'gfegeg','2008-12-12 10:00:00',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0),(2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0),(3,NULL,'2018-09-15 16:06:27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0),(4,'beto','2018-09-15 16:07:57',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0),(5,'rua das rosas','2018-09-15 16:09:56',NULL,'2018-09-13 17:50:00',NULL,NULL,NULL,NULL,NULL,NULL,0),(6,'rua das rosas','2018-09-15 16:16:34',NULL,'2018-09-13 01:19:00',NULL,NULL,NULL,NULL,NULL,NULL,0),(7,'rua das rosas','2018-09-15 16:20:48',NULL,'2018-09-13 01:19:00',NULL,NULL,'teste/Sat Sep 15 2018 13:20:46 GMT-0300 (Hora oficial do Brasil)-teste.pdf',NULL,NULL,NULL,0),(8,'rua das rosas','2018-09-15 16:21:43',NULL,'2018-09-13 01:19:00',NULL,NULL,'teste/1537028501442-fatura.pdf',NULL,NULL,NULL,0),(9,'rua das rosas','2018-09-15 16:22:25',NULL,'2018-09-13 01:19:00',NULL,NULL,'teste/1537028542420-fatura.pdf',NULL,NULL,NULL,0),(10,'rua das rosas','2018-09-15 16:22:51',NULL,'2018-09-13 01:19:00',NULL,'https://s3.sa-east-1.amazonaws.com/imagens.ne10.uol.com.br/teste/1537028568330-fatura.pdf','teste/1537028568330-fatura.pdf',NULL,NULL,NULL,0),(11,'rua das rosas','2018-09-15 16:26:52',NULL,'2018-09-13 01:19:00',NULL,'https://s3.sa-east-1.amazonaws.com/imagens.ne10.uol.com.br/teste/1537028809423-radiojornal%20%281%29.rar','teste/1537028809423-radiojornal (1).rar',NULL,NULL,NULL,0);
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

-- Dump completed on 2018-09-28 20:45:34
