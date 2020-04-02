const dbRepo = require('../../models');
const dbConnector = require('./dbconnector');
const signupDataProvider = require('../signup/signup_dataprovider');

let Common = {

  getDBKeyFromRequest: async (request) => {
    let tenant_id = request.headers['x-tenant-id'];
    let dbKey = 'default';
    if(tenant_id) {
      dbKey = `tenant_${tenant_id}`;
    }
    if(!dbRepo[dbKey]) {
      let account = await signupDataProvider.getAccount(tenant_id);
      if(account) {
        dbConnector.addSequelizeConnectionToRepo(dbRepo, dbKey);
      } else {
        dbKey = 'default';
      }
    }
    return dbKey;
  }
};

module.exports = Common;
