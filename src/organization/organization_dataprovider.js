
let OrganizationDataProvider = {

  getOrganizations: async() => {
    return [{"name": "organization 1"}, {"name": "organization 2"}];
  },

  getOrganization: async() => {
    return {"name": "organization 3"};
  },

  createOrganization: async() => {
    return {"name": "organization 4"};
  },

  updateOrganization: async() => {
    return {"name": "organization 5"};
  },

  deleteOrganization: async() => {
    return {"name": "organization 6"};
  }

};

module.exports = OrganizationDataProvider;
