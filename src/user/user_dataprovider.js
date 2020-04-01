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

  createUser: async(body) => {
    return new Promise(function(resolve, reject) {
      User.create(body)
        .then(data => {
          resolve(data);
        }).catch(err => {
          reject(err);
        });
    });
  },

  updateUser: async() => {
    return {"name": "user 5"};
  },

  deleteUser: async(userId) => {
    return new Promise(function(resolve, reject) {
      User.destroy({ where: { id: userId } })
        .then(data => {
          resolve(data);
        }).catch(err => {
          reject(err);
        });
    });
  }

};

module.exports = UserDataProvider;
