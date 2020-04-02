const express = require('express');
const router = express.Router();
const signupController = require('../src/signup/signup_controller');

router.post('/', function (request, response, next) {
  signupController.newAccountSignup(request, response, next);
});

module.exports = router;
