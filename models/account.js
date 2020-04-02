'use strict';
module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define('Account', {
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
  }, {});
  Account.associate = function(models) {
    // associations can be defined here
  };
  return Account;
};