const organizationService = require('./organization_service');
const responder = require('../utils/responder');

let OrganizationController = {

  getOrganizations: async (request, response, next) => {
    try {
      let organizations = await organizationService.getOrganizations();
      responder.sendResponse(response, 200, "success", organizations, "Organizations retrieved successfully.");
    } catch (error) {
      return next(error);
    }
  },

  getOrganization: async (request, response, next) => {
    try {
      let organizationId = request.params.organizationId;
      let organization = await organizationService.getOrganization(organizationId);
      responder.sendResponse(response, 200, "success", organization, "Organization retrieved successfully.");
    } catch (error) {
      return next(error);
    }
  },

  createOrganization: async (request, response, next) => {
    try {
      let body = request.body;
      let organization = await organizationService.createOrganization(body);
      responder.sendResponse(response, 200, "success", organization, "Organization created successfully.");
    } catch (error) {
      return next(error);
    }
  },

  updateOrganization: async (request, response, next) => {
    try {
      let organization = await organizationService.updateOrganization();
      response.status(200).json({
        status: "success",
        data: organization,
        message: "Organization updated successfully."
      });
    } catch (error) {
      return next(error);
    }
  },

  deleteOrganization: async (request, response, next) => {
    try {
      let organizationId = request.params.organizationId;
      let organization = await organizationService.deleteOrganization(organizationId);
      responder.sendResponse(response, 200, "success", organization, "Organization deleted successfully.");
    } catch (error) {
      return next(error);
    }
  }

};

module.exports = OrganizationController;
