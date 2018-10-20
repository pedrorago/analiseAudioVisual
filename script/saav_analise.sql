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
-- Table structure for table `analise`
--

DROP TABLE IF EXISTS `analise`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `analise` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `nome_programa` varchar(255) DEFAULT NULL,
  `nome_emissora` varchar(255) DEFAULT NULL,
  `dia_transmissao` varchar(255) DEFAULT NULL,
  `data_transmissao` datetime DEFAULT NULL,
  `genero` varchar(255) DEFAULT NULL,
  `idioma` varchar(255) DEFAULT NULL,
  `nacionalidade_producao` varchar(255) DEFAULT NULL,
  `conteudo` text,
  `classificacao_indicativa` varchar(255) DEFAULT NULL,
  `enredo_conteudo` varchar(255) DEFAULT NULL,
  `conteudo_violento` varchar(255) DEFAULT NULL,
  `relevancia_conteudo_trama` varchar(255) DEFAULT NULL,
  `referencia_conteudo_violento` varchar(255) DEFAULT NULL,
  `tipo_violencia` varchar(255) DEFAULT NULL,
  `cena_nudes` varchar(255) DEFAULT NULL,
  `cena_sexuais` varchar(255) DEFAULT NULL,
  `proprocao_conteudo_sexual` varchar(255) DEFAULT NULL,
  `relevancia_conteudo_sexual` varchar(255) DEFAULT NULL,
  `referencia_conteudo_sexual` varchar(255) DEFAULT NULL,
  `conteudo_narcoticos` varchar(255) DEFAULT NULL,
  `relevancia_conteudo_narcotico` varchar(255) DEFAULT NULL,
  `referencia_conteudo_drogas` varchar(255) DEFAULT NULL,
  `tipo_linguagem` varchar(255) DEFAULT NULL,
  `tipo_descriminacao` varchar(255) DEFAULT NULL,
  `vinculacao_esteriotipo` varchar(255) DEFAULT NULL,
  `comportamento_descriminatorio` varchar(255) DEFAULT NULL,
  `data_created` datetime DEFAULT NULL,
  `data_updated` datetime DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_programacao` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `analise`
--

LOCK TABLES `analise` WRITE;
/*!40000 ALTER TABLE `analise` DISABLE KEYS */;
INSERT INTO `analise` VALUES (1,'Program-DE23D2','nome_emissora','',NULL,'','','','Informe qual é o tipo de leitura','Selecione a classificação','','','O conteúdo violento não é relevante para a compreensão da trama.','Referências ao conteúdo violento:','Assassinato/homicídio.','Sim','Sim','Completamente pontual','O conteúdo sexual não é relevante para a compreensão da trama.','Apresenta nudez frontal, porém sem a exibição de nus frontais (pênis, vagina) seios e','Sim. lícitas - que ou o que é conforme à lei, aos princípios do direito.','O conteúdo não é relevante para a compreensão da trama.','Apresenta descrições, a partir das imagens exibidas, pormenorizadas do consumo/produção / venda de drogas (incluindo o modus operandi e a reação das pessoas.','Apresenta linguagem chula, de baixo calão, palavrões.','De gênero','Sim','É condenado.','2018-10-20 04:59:13',NULL,NULL,2,4),(2,'Program-DE23D2','nome_emissora','Terça-feira',NULL,'','','','Informe qual é o tipo de leitura','Selecione a classificação','','','O conteúdo violento não é relevante para a compreensão da trama.','Referências ao conteúdo violento:','Assassinato/homicídio.','Sim','Sim','Completamente pontual','O conteúdo sexual não é relevante para a compreensão da trama.','Apresenta nudez frontal, porém sem a exibição de nus frontais (pênis, vagina) seios e','Sim. lícitas - que ou o que é conforme à lei, aos princípios do direito.','O conteúdo não é relevante para a compreensão da trama.','Apresenta descrições, a partir das imagens exibidas, pormenorizadas do consumo/produção / venda de drogas (incluindo o modus operandi e a reação das pessoas.','Apresenta linguagem chula, de baixo calão, palavrões.','De gênero','Sim','É condenado.','2018-10-20 05:00:45',NULL,NULL,2,4),(3,'Program-DE23D2','nome_emissora','',NULL,'','','','Informe qual é o tipo de leitura','Selecione a classificação','','','O conteúdo violento não é relevante para a compreensão da trama.','Referências ao conteúdo violento:','Assassinato/homicídio.','Sim','Sim','Completamente pontual','O conteúdo sexual não é relevante para a compreensão da trama.','Apresenta nudez frontal, porém sem a exibição de nus frontais (pênis, vagina) seios e','Sim. lícitas - que ou o que é conforme à lei, aos princípios do direito.','O conteúdo não é relevante para a compreensão da trama.','Apresenta descrições, a partir das imagens exibidas, pormenorizadas do consumo/produção / venda de drogas (incluindo o modus operandi e a reação das pessoas.','Apresenta linguagem chula, de baixo calão, palavrões.','De gênero','Sim','É condenado.','2018-10-20 05:01:58',NULL,NULL,3,4),(4,'Program-DE23D2','nome_emissora','',NULL,'','','','Informe qual é o tipo de leitura','Selecione a classificação','','','O conteúdo violento não é relevante para a compreensão da trama.','Referências ao conteúdo violento:','Assassinato/homicídio.','Sim','Sim','Completamente pontual','O conteúdo sexual não é relevante para a compreensão da trama.','Apresenta nudez frontal, porém sem a exibição de nus frontais (pênis, vagina) seios e','Sim. lícitas - que ou o que é conforme à lei, aos princípios do direito.','O conteúdo não é relevante para a compreensão da trama.','Apresenta descrições, a partir das imagens exibidas, pormenorizadas do consumo/produção / venda de drogas (incluindo o modus operandi e a reação das pessoas.','Apresenta linguagem chula, de baixo calão, palavrões.','De gênero','Sim','É condenado.','2018-10-20 05:02:12',NULL,NULL,6,4),(5,'Program-DE23D2','nome_emissora','',NULL,'','','','Informe qual é o tipo de leitura','Selecione a classificação','','','O conteúdo violento não é relevante para a compreensão da trama.','Referências ao conteúdo violento:','Assassinato/homicídio.','Sim','Sim','Completamente pontual','O conteúdo sexual não é relevante para a compreensão da trama.','Apresenta nudez frontal, porém sem a exibição de nus frontais (pênis, vagina) seios e','Sim. lícitas - que ou o que é conforme à lei, aos princípios do direito.','O conteúdo não é relevante para a compreensão da trama.','Apresenta descrições, a partir das imagens exibidas, pormenorizadas do consumo/produção / venda de drogas (incluindo o modus operandi e a reação das pessoas.','Apresenta linguagem chula, de baixo calão, palavrões.','De gênero','Sim','É condenado.','2018-10-20 05:24:58',NULL,NULL,6,4),(6,'Program-DE23D2','nome_emissora','',NULL,'','','','Informe qual é o tipo de leitura','Selecione a classificação','','','O conteúdo violento não é relevante para a compreensão da trama.','Referências ao conteúdo violento:','Assassinato/homicídio.','Sim','Sim','Completamente pontual','O conteúdo sexual não é relevante para a compreensão da trama.','Apresenta nudez frontal, porém sem a exibição de nus frontais (pênis, vagina) seios e','Sim. lícitas - que ou o que é conforme à lei, aos princípios do direito.','O conteúdo não é relevante para a compreensão da trama.','Apresenta descrições, a partir das imagens exibidas, pormenorizadas do consumo/produção / venda de drogas (incluindo o modus operandi e a reação das pessoas.','Apresenta linguagem chula, de baixo calão, palavrões.','De gênero','Sim','É condenado.','2018-10-20 05:45:18',NULL,NULL,6,4),(7,'Program-DE23D2','nome_emissora','',NULL,'','','','Informe qual é o tipo de leitura','Selecione a classificação','','','O conteúdo violento não é relevante para a compreensão da trama.','Referências ao conteúdo violento:','Assassinato/homicídio.','Sim','Sim','Completamente pontual','O conteúdo sexual não é relevante para a compreensão da trama.','Apresenta nudez frontal, porém sem a exibição de nus frontais (pênis, vagina) seios e','Sim. lícitas - que ou o que é conforme à lei, aos princípios do direito.','O conteúdo não é relevante para a compreensão da trama.','Apresenta descrições, a partir das imagens exibidas, pormenorizadas do consumo/produção / venda de drogas (incluindo o modus operandi e a reação das pessoas.','Apresenta linguagem chula, de baixo calão, palavrões.','De gênero','Sim','É condenado.','2018-10-20 05:46:22',NULL,NULL,2,4),(8,'Program-DE23D2','nome_emissora','',NULL,'','','','Informe qual é o tipo de leitura','Selecione a classificação','','','O conteúdo violento não é relevante para a compreensão da trama.','Referências ao conteúdo violento:','Assassinato/homicídio.','Sim','Sim','Completamente pontual','O conteúdo sexual não é relevante para a compreensão da trama.','Apresenta nudez frontal, porém sem a exibição de nus frontais (pênis, vagina) seios e','Sim. lícitas - que ou o que é conforme à lei, aos princípios do direito.','O conteúdo não é relevante para a compreensão da trama.','Apresenta descrições, a partir das imagens exibidas, pormenorizadas do consumo/produção / venda de drogas (incluindo o modus operandi e a reação das pessoas.','Apresenta linguagem chula, de baixo calão, palavrões.','De gênero','Sim','É condenado.','2018-10-20 05:47:22',NULL,NULL,3,4),(9,'Program-DE23D2','nome_emissora','',NULL,'','','','Informe qual é o tipo de leitura','Selecione a classificação','','','O conteúdo violento não é relevante para a compreensão da trama.','Referências ao conteúdo violento:','Assassinato/homicídio.','Sim','Sim','Completamente pontual','O conteúdo sexual não é relevante para a compreensão da trama.','Apresenta nudez frontal, porém sem a exibição de nus frontais (pênis, vagina) seios e','Sim. lícitas - que ou o que é conforme à lei, aos princípios do direito.','O conteúdo não é relevante para a compreensão da trama.','Apresenta descrições, a partir das imagens exibidas, pormenorizadas do consumo/produção / venda de drogas (incluindo o modus operandi e a reação das pessoas.','Apresenta linguagem chula, de baixo calão, palavrões.','De gênero','Sim','É condenado.','2018-10-20 05:48:02',NULL,NULL,6,4),(10,'Program-DE23D2','nome_emissora','',NULL,'','','','Informe qual é o tipo de leitura','Selecione a classificação','','','O conteúdo violento não é relevante para a compreensão da trama.','Referências ao conteúdo violento:','Assassinato/homicídio.','Sim','Sim','Completamente pontual','O conteúdo sexual não é relevante para a compreensão da trama.','Apresenta nudez frontal, porém sem a exibição de nus frontais (pênis, vagina) seios e','Sim. lícitas - que ou o que é conforme à lei, aos princípios do direito.','O conteúdo não é relevante para a compreensão da trama.','Apresenta descrições, a partir das imagens exibidas, pormenorizadas do consumo/produção / venda de drogas (incluindo o modus operandi e a reação das pessoas.','Apresenta linguagem chula, de baixo calão, palavrões.','De gênero','Sim','É condenado.','2018-10-20 05:48:42',NULL,NULL,2,4),(11,'Program-DE23D2','nome_emissora','',NULL,'','','','Informe qual é o tipo de leitura','Selecione a classificação','','','O conteúdo violento não é relevante para a compreensão da trama.','Referências ao conteúdo violento:','Assassinato/homicídio.','Sim','Sim','Completamente pontual','O conteúdo sexual não é relevante para a compreensão da trama.','Apresenta nudez frontal, porém sem a exibição de nus frontais (pênis, vagina) seios e','Sim. lícitas - que ou o que é conforme à lei, aos princípios do direito.','O conteúdo não é relevante para a compreensão da trama.','Apresenta descrições, a partir das imagens exibidas, pormenorizadas do consumo/produção / venda de drogas (incluindo o modus operandi e a reação das pessoas.','Apresenta linguagem chula, de baixo calão, palavrões.','De gênero','Sim','É condenado.','2018-10-20 05:50:09',NULL,NULL,6,4),(12,'Program-DE23D2','nome_emissora','',NULL,'','','','Informe qual é o tipo de leitura','Selecione a classificação','','','O conteúdo violento não é relevante para a compreensão da trama.','Referências ao conteúdo violento:','Assassinato/homicídio.','Sim','Sim','Completamente pontual','O conteúdo sexual não é relevante para a compreensão da trama.','Apresenta nudez frontal, porém sem a exibição de nus frontais (pênis, vagina) seios e','Sim. lícitas - que ou o que é conforme à lei, aos princípios do direito.','O conteúdo não é relevante para a compreensão da trama.','Apresenta descrições, a partir das imagens exibidas, pormenorizadas do consumo/produção / venda de drogas (incluindo o modus operandi e a reação das pessoas.','Apresenta linguagem chula, de baixo calão, palavrões.','De gênero','Sim','É condenado.','2018-10-20 05:52:39',NULL,NULL,2,4),(13,'Program-DE23D2','nome_emissora','',NULL,'','','','Informe qual é o tipo de leitura','Selecione a classificação','','','O conteúdo violento não é relevante para a compreensão da trama.','Referências ao conteúdo violento:','Assassinato/homicídio.','Sim','Sim','Completamente pontual','O conteúdo sexual não é relevante para a compreensão da trama.','Apresenta nudez frontal, porém sem a exibição de nus frontais (pênis, vagina) seios e','Sim. lícitas - que ou o que é conforme à lei, aos princípios do direito.','O conteúdo não é relevante para a compreensão da trama.','Apresenta descrições, a partir das imagens exibidas, pormenorizadas do consumo/produção / venda de drogas (incluindo o modus operandi e a reação das pessoas.','Apresenta linguagem chula, de baixo calão, palavrões.','De gênero','Sim','É condenado.','2018-10-20 05:52:57',NULL,NULL,3,4),(14,'Program-DE23D2','nome_emissora','',NULL,'','','','Informe qual é o tipo de leitura','Selecione a classificação','','','O conteúdo violento não é relevante para a compreensão da trama.','Referências ao conteúdo violento:','Assassinato/homicídio.','Sim','Sim','Completamente pontual','O conteúdo sexual não é relevante para a compreensão da trama.','Apresenta nudez frontal, porém sem a exibição de nus frontais (pênis, vagina) seios e','Sim. lícitas - que ou o que é conforme à lei, aos princípios do direito.','O conteúdo não é relevante para a compreensão da trama.','Apresenta descrições, a partir das imagens exibidas, pormenorizadas do consumo/produção / venda de drogas (incluindo o modus operandi e a reação das pessoas.','Apresenta linguagem chula, de baixo calão, palavrões.','De gênero','Sim','É condenado.','2018-10-20 05:54:03',NULL,NULL,1,4),(15,'Program-DE23D2','nome_emissora','',NULL,'','','','Informe qual é o tipo de leitura','Selecione a classificação','','','O conteúdo violento não é relevante para a compreensão da trama.','Referências ao conteúdo violento:','Assassinato/homicídio.','Sim','Sim','Completamente pontual','O conteúdo sexual não é relevante para a compreensão da trama.','Apresenta nudez frontal, porém sem a exibição de nus frontais (pênis, vagina) seios e','Sim. lícitas - que ou o que é conforme à lei, aos princípios do direito.','O conteúdo não é relevante para a compreensão da trama.','Apresenta descrições, a partir das imagens exibidas, pormenorizadas do consumo/produção / venda de drogas (incluindo o modus operandi e a reação das pessoas.','Apresenta linguagem chula, de baixo calão, palavrões.','De gênero','Sim','É condenado.','2018-10-20 05:54:42',NULL,NULL,1,4),(16,'Program-DE23D2','nome_emissora','',NULL,'','','','Informe qual é o tipo de leitura','Selecione a classificação','','','O conteúdo violento não é relevante para a compreensão da trama.','Referências ao conteúdo violento:','Assassinato/homicídio.','Sim','Sim','Completamente pontual','O conteúdo sexual não é relevante para a compreensão da trama.','Apresenta nudez frontal, porém sem a exibição de nus frontais (pênis, vagina) seios e','Sim. lícitas - que ou o que é conforme à lei, aos princípios do direito.','O conteúdo não é relevante para a compreensão da trama.','Apresenta descrições, a partir das imagens exibidas, pormenorizadas do consumo/produção / venda de drogas (incluindo o modus operandi e a reação das pessoas.','Apresenta linguagem chula, de baixo calão, palavrões.','De gênero','Sim','É condenado.','2018-10-20 05:58:04',NULL,NULL,1,1),(17,'Program-DE23D2','nome_emissora','',NULL,'','','','Dublado','Selecione a classificação','','','O conteúdo violento não é relevante para a compreensão da trama.','Referências ao conteúdo violento:','Assassinato/homicídio.','Sim','Sim','Completamente pontual','O conteúdo sexual não é relevante para a compreensão da trama.','Apresenta nudez frontal, porém sem a exibição de nus frontais (pênis, vagina) seios e','Sim. lícitas - que ou o que é conforme à lei, aos princípios do direito.','O conteúdo não é relevante para a compreensão da trama.','Apresenta descrições, a partir das imagens exibidas, pormenorizadas do consumo/produção / venda de drogas (incluindo o modus operandi e a reação das pessoas.','Apresenta linguagem chula, de baixo calão, palavrões.','De gênero','Sim','É condenado.','2018-10-20 05:58:47',NULL,NULL,1,7),(18,'Program-DE23D2','nome_emissora','',NULL,'','','','Informe qual é o tipo de leitura','Selecione a classificação','','','O conteúdo violento não é relevante para a compreensão da trama.','Referências ao conteúdo violento:','Assassinato/homicídio.','Sim','Sim','Completamente pontual','O conteúdo sexual não é relevante para a compreensão da trama.','Apresenta nudez frontal, porém sem a exibição de nus frontais (pênis, vagina) seios e','Sim. lícitas - que ou o que é conforme à lei, aos princípios do direito.','O conteúdo não é relevante para a compreensão da trama.','Apresenta descrições, a partir das imagens exibidas, pormenorizadas do consumo/produção / venda de drogas (incluindo o modus operandi e a reação das pessoas.','Apresenta linguagem chula, de baixo calão, palavrões.','De gênero','Sim','É condenado.','2018-10-20 06:41:29',NULL,NULL,1,1),(19,'Program-DE23D2','nome_emissora','',NULL,'','','','Informe qual é o tipo de leitura','Selecione a classificação','','','O conteúdo violento não é relevante para a compreensão da trama.','Referências ao conteúdo violento:','Assassinato/homicídio.','Sim','Sim','Completamente pontual','O conteúdo sexual não é relevante para a compreensão da trama.','Apresenta nudez frontal, porém sem a exibição de nus frontais (pênis, vagina) seios e','Sim. lícitas - que ou o que é conforme à lei, aos princípios do direito.','O conteúdo não é relevante para a compreensão da trama.','Apresenta descrições, a partir das imagens exibidas, pormenorizadas do consumo/produção / venda de drogas (incluindo o modus operandi e a reação das pessoas.','Apresenta linguagem chula, de baixo calão, palavrões.','De gênero','Sim','É condenado.','2018-10-20 06:44:31',NULL,NULL,1,1),(20,'Program-DE23D2','nome_emissora','',NULL,'','','','Informe qual é o tipo de leitura','Selecione a classificação','','','O conteúdo violento não é relevante para a compreensão da trama.','Referências ao conteúdo violento:','Assassinato/homicídio.','Sim','Sim','Completamente pontual','O conteúdo sexual não é relevante para a compreensão da trama.','Apresenta nudez frontal, porém sem a exibição de nus frontais (pênis, vagina) seios e','Sim. lícitas - que ou o que é conforme à lei, aos princípios do direito.','O conteúdo não é relevante para a compreensão da trama.','Apresenta descrições, a partir das imagens exibidas, pormenorizadas do consumo/produção / venda de drogas (incluindo o modus operandi e a reação das pessoas.','Apresenta linguagem chula, de baixo calão, palavrões.','De gênero','Sim','É condenado.','2018-10-20 07:09:56',NULL,NULL,1,2),(21,'Program-DE23D2','nome_emissora','',NULL,'','','','Informe qual é o tipo de leitura','Selecione a classificação','','','O conteúdo violento não é relevante para a compreensão da trama.','Referências ao conteúdo violento:','Assassinato/homicídio.','Sim','Sim','Completamente pontual','O conteúdo sexual não é relevante para a compreensão da trama.','Apresenta nudez frontal, porém sem a exibição de nus frontais (pênis, vagina) seios e','Sim. lícitas - que ou o que é conforme à lei, aos princípios do direito.','O conteúdo não é relevante para a compreensão da trama.','Apresenta descrições, a partir das imagens exibidas, pormenorizadas do consumo/produção / venda de drogas (incluindo o modus operandi e a reação das pessoas.','Apresenta linguagem chula, de baixo calão, palavrões.','De gênero','Sim','É condenado.','2018-10-20 07:12:32',NULL,NULL,13,5),(22,'Program-DE23D2','nome_emissora','',NULL,'','','','Informe qual é o tipo de leitura','Selecione a classificação','','','O conteúdo violento não é relevante para a compreensão da trama.','Referências ao conteúdo violento:','Assassinato/homicídio.','Sim','Sim','Completamente pontual','O conteúdo sexual não é relevante para a compreensão da trama.','Apresenta nudez frontal, porém sem a exibição de nus frontais (pênis, vagina) seios e','Sim. lícitas - que ou o que é conforme à lei, aos princípios do direito.','O conteúdo não é relevante para a compreensão da trama.','Apresenta descrições, a partir das imagens exibidas, pormenorizadas do consumo/produção / venda de drogas (incluindo o modus operandi e a reação das pessoas.','Apresenta linguagem chula, de baixo calão, palavrões.','De gênero','Sim','É condenado.','2018-10-20 07:20:04',NULL,NULL,13,3),(23,'Program-DE23D2','nome_emissora','',NULL,'','','','Informe qual é o tipo de leitura','Selecione a classificação','','','O conteúdo violento não é relevante para a compreensão da trama.','Referências ao conteúdo violento:','Assassinato/homicídio.','Sim','Sim','Completamente pontual','O conteúdo sexual não é relevante para a compreensão da trama.','Apresenta nudez frontal, porém sem a exibição de nus frontais (pênis, vagina) seios e','Sim. lícitas - que ou o que é conforme à lei, aos princípios do direito.','O conteúdo não é relevante para a compreensão da trama.','Apresenta descrições, a partir das imagens exibidas, pormenorizadas do consumo/produção / venda de drogas (incluindo o modus operandi e a reação das pessoas.','Apresenta linguagem chula, de baixo calão, palavrões.','De gênero','Sim','É condenado.','2018-10-20 07:32:00',NULL,NULL,14,6),(24,'Program-DE23D2','nome_emissora','',NULL,'','','','Informe qual é o tipo de leitura','Selecione a classificação','','','O conteúdo violento não é relevante para a compreensão da trama.','Referências ao conteúdo violento:','Assassinato/homicídio.','Sim','Sim','Completamente pontual','O conteúdo sexual não é relevante para a compreensão da trama.','Apresenta nudez frontal, porém sem a exibição de nus frontais (pênis, vagina) seios e','Sim. lícitas - que ou o que é conforme à lei, aos princípios do direito.','O conteúdo não é relevante para a compreensão da trama.','Apresenta descrições, a partir das imagens exibidas, pormenorizadas do consumo/produção / venda de drogas (incluindo o modus operandi e a reação das pessoas.','Apresenta linguagem chula, de baixo calão, palavrões.','De gênero','Sim','É condenado.','2018-10-20 07:58:20',NULL,NULL,14,8);
/*!40000 ALTER TABLE `analise` ENABLE KEYS */;
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