const db = require('../../models');
const Account = db.Account;
const cli = require('../utils/cli');

const env = process.env.NODE_ENV || 'development';
const config = require('../../config/config.json')[env];

const path = require('path');
const migrationPath = path.resolve(__dirname + '/../../migrations');

let SignupDataProvider = {

  createAccount: async(account) => {
    return new Promise(function(resolve, reject) {
      Account.create(account)
        .then(data => {
          resolve(data);
        }).catch(err => {
          reject(err);
        });
    });
  },

  createTenantDB: async(accountId) => {
    let connectionString = `${config.dialect}://${config.username}:${config.password}@${config.host}/tenant_${accountId}`;

    console.log("Create Database");
    await cli.executeCommand(`node_modules/.bin/sequelize db:create --url ${connectionString}`);

    console.log("Run Migrations");
    await cli.executeCommand(`node_modules/.bin/sequelize db:migrate --url ${connectionString} --migrations-path=${migrationPath}`);
  }
};

module.exports = SignupDataProvider;
