const userService = require('./user_service');
const responder = require('../utils/responder');
const common = require('../utils/common');

let UserController = {

  getUsers: async (request, response, next) => {
    try {
      let dbKey = await common.getDBKeyFromRequest(request);
      let users = await userService.getUsers(dbKey);
      responder.sendResponse(response, 200, "success", users, "Users retrieved successfully.");
    } catch (error) {
      return next(error);
    }
  },

  getUser: async (request, response, next) => {
    try {
      let dbKey = await common.getDBKeyFromRequest(request);
      let userId = request.params.userId;
      let user = await userService.getUser(userId, dbKey);
      responder.sendResponse(response, 200, "success", user, "User retrieved successfully.");
    } catch (error) {
      return next(error);
    }
  },

  createUser: async (request, response, next) => {
    try {
      let dbKey = await common.getDBKeyFromRequest(request);
      let body = request.body;
      let user = await userService.createUser(body, dbKey);
      responder.sendResponse(response, 200, "success", user, "User created successfully.");
    } catch (error) {
      return next(error);
    }
  },

  updateUser: async (request, response, next) => {
    try {
      let dbKey = await common.getDBKeyFromRequest(request);
      let user = await userService.updateUser(dbKey);
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
      let dbKey = await common.getDBKeyFromRequest(request);
      let userId = request.params.userId;
      let user = await userService.deleteUser(userId, dbKey);
      responder.sendResponse(response, 200, "success", user, "User deleted successfully.");
    } catch (error) {
      return next(error);
    }
  }

};

module.exports = UserController;
