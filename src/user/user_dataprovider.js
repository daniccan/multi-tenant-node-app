const db = require("../../models");
const User = db.User;

let UserDataProvider = {

  getUsers: async() => {
    return new Promise(function(resolve, reject) {
      User.findAll({ attributes: { exclude: ['password'] } })
        .then(data => {
          resolve(data);
        }).catch(err => {
          reject(err);
        });
    });
  },

  getUser: async(userId) => {
    return new Promise(function(resolve, reject) {
      User.findOne({ where: { id: userId }, attributes: { exclude: ['password'] } })
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
    return null;
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
