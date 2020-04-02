const dbRepo = require('../../models');

let Common = {

  getDBKeyFromRequest: (request) => {
    let tenant_id = request.headers['x-tenant-id'];
    let dbKey = 'default';
    if(tenant_id) {
      dbKey = `tenant_${tenant_id}`;
    }
    if(!dbRepo[dbRepo]) {
      dbKey = 'default';
    }
    return dbKey;
  }
};

module.exports = Common;