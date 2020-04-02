const userDataProvider = require('./user_dataprovider');

let UserService = {

  getUsers: async(dbKey) => {
    let users = await userDataProvider.getUsers(dbKey);
    return users;
  },

  getUser: async(userId, dbKey) => {
    let user = await userDataProvider.getUser(userId, dbKey);
    return user;
  },

  createUser: async(body, dbKey) => {
    let user = await userDataProvider.createUser(body, dbKey);
    return user;
  },

  updateUser: async(dbKey) => {
    let user = await userDataProvider.updateUser();
    return user;
  },

  deleteUser: async(userId, dbKey) => {
    let user = await userDataProvider.deleteUser(userId, dbKey);
    return user;
  }

};

module.exports = UserService;
