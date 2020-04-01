var organizationDataProvider = require('./organization_dataprovider');

let OrganizationService = {

  getOrganizations: async() => {
    let organizations = await organizationDataProvider.getOrganizations();
    return organizations;
  },

  getOrganization: async() => {
    let organization = await organizationDataProvider.getOrganization();
    return organization;
  },

  createOrganization: async() => {
    let organization = await organizationDataProvider.createOrganization();
    return organization;
  },

  updateOrganization: async() => {
    let organization = await organizationDataProvider.updateOrganization();
    return organization;
  },

  deleteOrganization: async() => {
    let organization = await organizationDataProvider.deleteOrganization();
    return organization;
  }

};

module.exports = OrganizationService;