const dbRepo = require('../../models');

let UserDataProvider = {

  getUsers: async(dbKey) => {
    const User = dbRepo[dbKey].User;
    return new Promise(function(resolve, reject) {
      User.findAll({ attributes: { exclude: ['password'] } })
        .then(data => {
          resolve(data);
        }).catch(err => {
          reject(err);
        });
    });
  },

  getUser: async(userId, dbKey) => {
    const User = dbRepo[dbKey].User;
    return new Promise(function(resolve, reject) {
      User.findOne({ where: { id: userId }, attributes: { exclude: ['password'] } })
        .then(data => {
          resolve(data);
        }).catch(err => {
          reject(err);
        });
    });
  },

  createUser: async(body, dbKey) => {
    const User = dbRepo[dbKey].User;
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

  deleteUser: async(userId, dbKey) => {
    const User = dbRepo[dbKey].User;
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
