var userService = require('./user_service');

let UserController = {

  getUsers: async (request, response, next) => {
    try {
      let users = await userService.getUsers();
      response.status(200).json({
        status: "success",
        data: users,
        message: "Users retrieved successfully."
      });
    } catch (error) {
      return next(error);
    }
  },

  getUser: async (request, response, next) => {
    try {
      let user = await userService.getUser();
      response.status(200).json({
        status: "success",
        data: user,
        message: "User retrieved successfully."
      });
    } catch (error) {
      return next(error);
    }
  },

  createUser: async (request, response, next) => {
    try {
      let user = await userService.createUser();
      response.status(200).json({
        status: "success",
        data: user,
        message: "User created successfully."
      });
    } catch (error) {
      return next(error);
    }
  },

  updateUser: async (request, response, next) => {
    try {
      let user = await userService.updateUser();
      response.status(200).json({
        status: "success",
        data: user,
        message: "User updated successfully."
      });
    } catch (error) {
      return next(error);
    }
  },

  deleteUser: async (request, response, next) => {
    try {
      let user = await userService.deleteUser();
      response.status(200).json({
        status: "success",
        data: user,
        message: "User deleted successfully."
      });
    } catch (error) {
      return next(error);
    }
  }

};

module.exports = UserController;
