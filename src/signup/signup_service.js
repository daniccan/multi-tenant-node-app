const signupDataProvider = require('./signup_dataprovider');

let SignupService = {

  newAccountSignup: async(body) => {

    let account = await signupDataProvider.createAccount({"name": body.name, "domain": body.domain, "owner": body.email});
    
    await signupDataProvider.createTenantDB(account.id);

    return account;
  }
};

module.exports = SignupService;
