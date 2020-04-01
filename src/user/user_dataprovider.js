
let UserDataProvider = {

  getUsers: async() => {
    return [{"name": "user 1"}, {"name": "user 2"}];
  },

  getUser: async() => {
    return {"name": "user 3"};
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
