const signupDataProvider = require('./signup_dataprovider');

let SignupService = {

  newAccountSignup: async(body) => {

    let account = await signupDataProvider.createAccount({"name": body.name, "domain": body.domain, "owner": body.email});

    return account;
  }
};

module.exports = SignupService;
