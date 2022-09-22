const signupService = require('./signup_service');
const responder = require('../utils/responder');

let SignupController = {
  newAccountSignup: async (request, response, next) => {
    try {
      let body = request.body;
      let account = await signupService.newAccountSignup(body);
      responder.sendResponse(response, 200, "success", account, "Account created successfully.");
    } catch (error) {
      return next(error);
    }
  }
};

module.exports = SignupController;
