const db = require("../../models");
const Organization = db.Organization;

let OrganizationDataProvider = {

  getOrganizations: async() => {
    return new Promise(function(resolve, reject) {
      Organization.findAll()
        .then(data => {
          resolve(data);
        }).catch(err => {
          reject(err);
        });
    });
  },

  getOrganization: async(organizationId) => {
    return new Promise(function(resolve, reject) {
      Organization.findByPk(organizationId)
        .then(data => {
          resolve(data);
        }).catch(err => {
          reject(err);
        });
    });
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
