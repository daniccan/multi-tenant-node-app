const signupDataProvider = require('./signup_dataprovider');
const logger = require('../utils/logger');

let SignupService = {

  newAccountSignup: async(body) => {

    logger.info(`Create Account in DB[Name: ${body.name}, Domain: ${body.domain}]`);
    let account = await signupDataProvider.createAccount({"name": body.name, "domain": body.domain, "owner": body.email});
    
    logger.info(`Create Tenant for Account[ID: ${account.id}]`);
    await signupDataProvider.createTenantDB(account.id);

    return account;
  }
};

module.exports = SignupService;
