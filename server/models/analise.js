'use strict';
module.exports = (sequelize, DataTypes) => {
  const Analise = sequelize.define('Analise', {
    id : { type: DataTypes.STRING, primaryKey: true,autoIncrement: true,},
	  nome_programa : DataTypes.STRING,
    nome_emissora : DataTypes.STRING,
    dia_transmissao : DataTypes.STRING,
    data_transmissao : DataTypes.STRING,
    genero : DataTypes.STRING,
    idioma : DataTypes.STRING,
    nacionalidade_producao : DataTypes.STRING,
    conteudo : DataTypes.STRING,
    classificacao_indicativa : DataTypes.STRING,
    enredo_conteudo  : DataTypes.STRING,
    conteudo_violento : DataTypes.STRING,
	  relevancia_conteudo_trama : DataTypes.STRING,
	  referencia_conteudo_violento : DataTypes.STRING,
	  tipo_violencia : DataTypes.STRING,
	  cena_nudes : DataTypes.STRING,
	  cena_sexuais : DataTypes.STRING,
	  proprocao_conteudo_sexual : DataTypes.STRING,
    relevancia_conteudo_sexual : DataTypes.STRING,
    referencia_conteudo_sexual : DataTypes.STRING,
    conteudo_narcoticos : DataTypes.STRING,
    relevancia_conteudo_narcotico : DataTypes.STRING,
    referencia_conteudo_drogas : DataTypes.STRING,
    tipo_linguagem : DataTypes.STRING,
	  tipo_descriminacao : DataTypes.STRING,
	  vinculacao_esteriotipo : DataTypes.STRING,
	  comportamento_descriminatorio : DataTypes.STRING,
    data_created : DataTypes.DATE,
    data_updated : DataTypes.DATE,
    status : DataTypes.STRING,
    id_user : DataTypes.STRING,
    id_programacao : DataTypes.STRING
    
  },{
    freezeTableName: true,
    tableName   : 'analise',
    createdAt    : false,
    updatedAt    : false,
    operatorsAliases: false
  });

  return Analise;
};