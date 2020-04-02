const express = require('express');
const router = express.Router();
const organizationController = require('../src/organization/organization_controller');

router.get('/', function (request, response, next) {
  organizationController.getOrganizations(request, response, next);
});

router.get('/:organizationId', function (request, response, next) {
  organizationController.getOrganization(request, response, next);
});

router.post('/', function (request, response, next) {
  organizationController.createOrganization(request, response, next);
});

router.put('/:organizationId', function (request, response, next) {
  organizationController.updateOrganization(request, response, next);
});

router.delete('/:organizationId', function (request, response, next) {
  organizationController.deleteOrganization(request, response, next);
});

module.exports = router;
