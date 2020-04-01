const db = require("../../models");
const User = db.User;

let UserDataProvider = {

  getUsers: async() => {
    return new Promise(function(resolve, reject) {
      User.findAll()
        .then(data => {
          resolve(data);
        }).catch(err => {
          reject(err);
        });
    });
  },

  getUser: async(userId) => {
    return new Promise(function(resolve, reject) {
      User.findByPk(userId)
        .then(data => {
          resolve(data);
        }).catch(err => {
          reject(err);
        });
    });
  },

  createUser: async() => {
    return {"name": "user 4"};
  },

  updateUser: async() => {
    return {"name": "user 5"};
  },

  deleteUser: async() => {
    return {"name": "user 6"};
  }

};

module.exports = UserDataProvider;
