const userDataProvider = require('./user_dataprovider');

let UserService = {

  getUsers: async() => {
    let users = await userDataProvider.getUsers();
    return users;
  },

  getUser: async(userId) => {
    let user = await userDataProvider.getUser(userId);
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
