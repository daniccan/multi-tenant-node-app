var organizationService = require('./organization_service'); 

let OrganizationController = {

  getOrganizations: async (request, response, next) => {
    try {
      let organizations = await organizationService.getOrganizations();
      response.status(200).json({
        status: "success",
        data: organizations,
        message: "Organizations retrieved successfully."
      });
    } catch (error) {
      return next(error);
    }
  },

  getOrganization: async (request, response, next) => {
    try {
      let organization = await organizationService.getOrganization();
      response.status(200).json({
        status: "success",
        data: organization,
        message: "Organization retrieved successfully."
      });
    } catch (error) {
      return next(error);
    }
  },

  createOrganization: async (request, response, next) => {
    try {
      let organization = await organizationService.createOrganization();
      response.status(200).json({
        status: "success",
        data: organization,
        message: "Organization created successfully."
      });
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
      let organization = await organizationService.deleteOrganization();
      response.status(200).json({
        status: "success",
        data: organization,
        message: "Organization deleted successfully."
      });
    } catch (error) {
      return next(error);
    }
  }

};

module.exports = OrganizationController;
