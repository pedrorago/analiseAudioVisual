'use strict';
module.exports = (sequelize, DataTypes) => {
  const Analise = sequelize.define('Analise', {
    id              : { type: DataTypes.STRING, primaryKey: true,autoIncrement: true,},
    programacao_id  : DataTypes.STRING,
    subcategoria_id : DataTypes.STRING,
    categoria_id    : DataTypes.STRING,
    data_criacao    : DataTypes.DATE,
    usuario_id      : DataTypes.STRING
  },{
    freezeTableName: true,
    tableName   : 'analise',
    createdAt    : false,
    updatedAt    : false,
  });

  return Analise;
};