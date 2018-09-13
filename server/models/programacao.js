'use strict';
module.exports = (sequelize, DataTypes) => {
  const Programacao = sequelize.define('Programacao', {
    id              : { type: DataTypes.STRING, primaryKey: true,autoIncrement: true,},
    nome            : DataTypes.STRING,
    dia_emissao     : DataTypes.DATE,
    emissora        : DataTypes.STRING,
    hora_inicio     : DataTypes.DATE,
    hora_fim        : DataTypes.DATE,
    link_video      : DataTypes.STRING,
    nome_video      : DataTypes.STRING,
    usuario_id      : DataTypes.STRING,
    criacao         : DataTypes.DATE,
    status          : DataTypes.STRING,
  },{
    freezeTableName: true,
    tableName   : 'programacao',
    createdAt    : false,
    updatedAt    : false,
  });

  return Programacao;
};