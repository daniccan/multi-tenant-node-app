'use strict';
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    static associate(models) { }
  }
  Account.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      domain: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      owner: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      }
    },
    {
      sequelize,
      modelName: "Account",
    }
  );
  return Account;
};