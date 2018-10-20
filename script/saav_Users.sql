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
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `photo` longblob,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (2,NULL,'teste','$2a$08$GOA7LABzhnen4J8iyorIuOq2VKioErP1oYKQvmPAqjowRQMh66hw.','2018-07-28 02:56:55','2018-07-28 02:56:55',NULL),(3,NULL,NULL,'$2a$08$gdUkhwublKWCO4swtXn33uqYBkxkbRmxIwUBcPwufyRRYG0OWun/q','2018-10-20 06:21:53','2018-10-20 06:21:53',NULL),(4,NULL,NULL,'$2a$08$AaFNgrKdZwvxssz6iaq.NO/lYsWHteQxZet7fmhk/nRXx2P3gZ9.y','2018-10-20 06:22:36','2018-10-20 06:22:36',NULL),(5,NULL,NULL,'$2a$08$taTQNA9wTvfSc42f8jZ0mOsLqTh5WD7pQVyHT99pKZ4gs.7bP.ZQS','2018-10-20 06:22:42','2018-10-20 06:22:42',NULL),(6,'beto','robertoolvs@gmail.com','$2a$08$Oxj3jIb2J03weinBeCkBsO.oclizAzmC.EK4HJRGsZcOvbn4btVTe','2018-10-20 06:24:47','2018-10-20 06:24:47',''),(7,'beto','robertoolvss@gmail.com','$2a$08$scmTMm1TC0Q4mFx.k/E5HO7JYq46OHGebxVfNfjbXap3xVXHPkuwG','2018-10-20 06:25:07','2018-10-20 06:25:07',''),(8,'beto','robertoolvsss@gmail.com','$2a$08$Rp/xuw17dgQsx0JzmgniHelmaqwFm/dW2UGlOgfQGpCWycahdbvSa','2018-10-20 06:25:22','2018-10-20 06:25:23',''),(9,'betao','robertoolvssdds@gmail.com','$2a$08$fBkVCdWWWzgEzSYqq0B/yOdhPdK5m8icxsG.JQrRcpaG495OzMWU2','2018-10-20 06:36:17','2018-10-20 06:36:18',''),(10,'betaoaaa','robertoolvsddsdds@gmail.com','$2a$08$ljCbKxl48q3LS1cSReqVkeZRWLBclmsACuodm6IkXnxX/rzfFeSKO','2018-10-20 06:37:08','2018-10-20 06:37:08',''),(11,'dddd','robertoolvsddsdddds@gmail.com','$2a$08$BSORCDCPIZXSF.BZBJ3CAes15itCSMi3NS.W7/eaxUa9kEEnJtVJW','2018-10-20 06:38:50','2018-10-20 06:38:50',''),(12,'oiiii','robertoolvsssddsdddds@gmail.com','$2a$08$cXBvdYPeZVm42Ir6HLFbOOadcJF9ALUTYySRns8uE9grqf2Kqg5VG','2018-10-20 06:40:41','2018-10-20 06:40:41',''),(13,'beto','sucesso@gmail.com','$2a$08$J98VCSNR9Aj.4h4gazO2Au8TK/GzniGgCZ9raNBR1RxC9DewsND0u','2018-10-20 06:41:09','2018-10-20 06:41:09','');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-10-20  5:34:03