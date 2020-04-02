const express = require('express');
const router = express.Router();
const userController = require('../src/user/user_controller');

router.get('/', function (request, response, next) {
  userController.getUsers(request, response, next);
});

router.get('/:userId', function (request, response, next) {
  userController.getUser(request, response, next);
});

router.post('/', function (request, response, next) {
  userController.createUser(request, response, next);
});

router.put('/:userId', function (request, response, next) {
  userController.updateUser(request, response, next);
});

router.delete('/:userId', function (request, response, next) {
  userController.deleteUser(request, response, next);
});

module.exports = router;
