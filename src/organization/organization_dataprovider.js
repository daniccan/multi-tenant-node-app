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

  createOrganization: async(body) => {
    return new Promise(function(resolve, reject) {
      Organization.create(body)
        .then(data => {
          resolve(data);
        }).catch(err => {
          reject(err);
        });
    });
  },

  updateOrganization: async() => {
    return {"name": "organization 5"};
  },

  deleteOrganization: async(organizationId) => {
    return new Promise(function(resolve, reject) {
      Organization.destroy({ where: { id: organizationId } })
        .then(data => {
          resolve(data);
        }).catch(err => {
          reject(err);
        });
    });
  }

};

module.exports = OrganizationDataProvider;
