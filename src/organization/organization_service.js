const organizationDataProvider = require('./organization_dataprovider');

let OrganizationService = {

  getOrganizations: async() => {
    let organizations = await organizationDataProvider.getOrganizations();
    return organizations;
  },

  getOrganization: async(organizationId) => {
    let organization = await organizationDataProvider.getOrganization(organizationId);
    return organization;
  },

  createOrganization: async(body) => {
    let organization = await organizationDataProvider.createOrganization(body);
    return organization;
  },

  updateOrganization: async() => {
    let organization = await organizationDataProvider.updateOrganization();
    return organization;
  },

  deleteOrganization: async(organizationId) => {
    let organization = await organizationDataProvider.deleteOrganization(organizationId);
    return organization;
  }

};

module.exports = OrganizationService;