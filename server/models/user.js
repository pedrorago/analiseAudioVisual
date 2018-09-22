'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id              : { type: DataTypes.INTEGER, primaryKey: true,autoIncrement: true,},
    name            : DataTypes.STRING,
    email           : DataTypes.STRING,
    password        : DataTypes.STRING,
    photo        : DataTypes.STRING,
  },{
    freezeTableName: true,
    tableName   : 'users',
    createdAt    : false,
    updatedAt    : false,
  });

  return User;
};