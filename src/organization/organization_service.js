const organizationDataProvider = require('./organization_dataprovider');

let OrganizationService = {

  getOrganizations: async(dbKey) => {
    let organizations = await organizationDataProvider.getOrganizations(dbKey);
    return organizations;
  },

  getOrganization: async(organizationId, dbKey) => {
    let organization = await organizationDataProvider.getOrganization(organizationId, dbKey);
    return organization;
  },

  createOrganization: async(body, dbKey) => {
    let organization = await organizationDataProvider.createOrganization(body, dbKey);
    return organization;
  },

  updateOrganization: async(dbKey) => {
    let organization = await organizationDataProvider.updateOrganization();
    return organization;
  },

  deleteOrganization: async(organizationId, dbKey) => {
    let organization = await organizationDataProvider.deleteOrganization(organizationId, dbKey);
    return organization;
  }

};

module.exports = OrganizationService;