const path = require('path');
const env = process.env.NODE_ENV || 'development';
const config = require('../../config/config.json')[env];
const migrationPath = path.resolve(__dirname + '/../../migrations');

const dbRepo = require('../../models');
const Account = dbRepo['default'].Account;

const cli = require('../utils/cli');
const logger = require('../utils/logger');
const dbConnector = require('../utils/dbconnector');

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

    logger.info(`Create Database for Tenant[Name: tenant_${accountId}]`);
    await cli.executeCommand(`npx sequelize db:create --url ${connectionString}`);

    logger.info(`Run Migrations on Tenant Database[Name: tenant_${accountId}]`);
    await cli.executeCommand(`npx sequelize db:migrate --url ${connectionString} --migrations-path=${migrationPath}`);
  
    dbConnector.addSequelizeConnectionToRepo(dbRepo, `tenant_${accountId}`);
  },

  getAccount: async(accountId) => {
    return new Promise(function(resolve, reject) {
      Account.findOne({ where: { id: accountId } })
        .then(data => {
          resolve(data);
        }).catch(err => {
          reject(err);
        });
    });
  }
};

module.exports = SignupDataProvider;
