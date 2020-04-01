'use strict';
module.exports = (sequelize, DataTypes) => {
  const Organization = sequelize.define('Organization', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }, 
    domain: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {});
  Organization.associate = function(models) {
    Organization.hasMany(models.User);
  };
  return Organization;
};
