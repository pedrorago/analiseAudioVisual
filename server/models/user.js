'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id              : { type: DataTypes.INTEGER, primaryKey: true,autoIncrement: true,},
    name            : DataTypes.STRING,
    email           : DataTypes.STRING,
    password        : DataTypes.STRING,
    photo        : DataTypes.STRING,
    admin: DataTypes.STRING
  },{
    freezeTableName: true,
    tableName   : 'Users',
    operatorsAliases: false
  });

  return User;
};