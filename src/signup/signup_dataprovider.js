const db = require("../../models");
const Account = db.Account;

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
  }
};

module.exports = SignupDataProvider;
