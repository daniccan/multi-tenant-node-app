var userDataProvider = require('./user_dataprovider');

let UserService = {

  getUsers: async() => {
    let users = await userDataProvider.getUsers();
    return users;
  },

  getUser: async() => {
    let user = await userDataProvider.getUser();
    return user;
  },

  createUser: async() => {
    let user = await userDataProvider.createUser();
    return user;
  },

  updateUser: async() => {
    let user = await userDataProvider.updateUser();
    return user;
  },

  deleteUser: async() => {
    let user = await userDataProvider.deleteUser();
    return user;
  }

};

module.exports = UserService;
