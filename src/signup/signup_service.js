const signupDataProvider = require('./signup_dataprovider');
const userDataProvider = require('../user/user_dataprovider');
const logger = require('../utils/logger');

let SignupService = {

  newAccountSignup: async(body) => {

    logger.info(`Create Account in DB[Name: ${body.name}, Domain: ${body.domain}]`);
    let account = await signupDataProvider.createAccount({"name": body.name, "domain": body.domain, "owner": body.email});
    
    logger.info(`Create Tenant for Account[ID: ${account.id}]`);
    await signupDataProvider.createTenantDB(account.id);

    logger.info(`Add User to Tenant DB[Email: ${body.email}]`);
    await userDataProvider.createUser({
      "firstName": body.firstName,
      "lastName": body.lastName,
      "email": body.email,
      "password": body.password,
      "isSuperAdmin": true
    }, `tenant_${account.id}`);

    return account;
  }
};

module.exports = SignupService;
