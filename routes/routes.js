var express = require('express');
var router = express.Router();

var organizationController = require('../src/organization/organization_controller');
var userController = require('../src/user/user_controller');

// Organization Routes
router.get('/organizations', function (request, response, next) {
  organizationController.getOrganizations(request, response, next);
});

router.get('/organization/:organizationId', function (request, response, next) {
  organizationController.getOrganization(request, response, next);
});

router.post('/organizations', function (request, response, next) {
  organizationController.createOrganization(request, response, next);
});

router.put('/organizations/:organizationId', function (request, response, next) {
  organizationController.updateOrganization(request, response, next);
});

router.delete('/organizations/:organizationId', function (request, response, next) {
  organizationController.deleteOrganization(request, response, next);
});

// User Routes
router.get('/users', function (request, response, next) {
  userController.getUsers(request, response, next);
});

router.get('/users/:userId', function (request, response, next) {
  userController.getUser(request, response, next);
});

router.post('/users', function (request, response, next) {
  userController.createUser(request, response, next);
});

router.put('/users/:userId', function (request, response, next) {
  userController.updateUser(request, response, next);
});

router.delete('/users/:userId', function (request, response, next) {
  userController.deleteUser(request, response, next);
});

module.exports = router;
