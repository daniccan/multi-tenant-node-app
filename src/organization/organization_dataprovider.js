const dbRepo = require('../../models');

let OrganizationDataProvider = {

  getOrganizations: async() => {
    const Organization = dbRepo['default'].Organization;
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
    const Organization = dbRepo['default'].Organization;
    return new Promise(function(resolve, reject) {
      Organization.findOne({ where: { id: organizationId } })
        .then(data => {
          resolve(data);
        }).catch(err => {
          reject(err);
        });
    });
  },

  createOrganization: async(body) => {
    const Organization = dbRepo['default'].Organization;
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
    return null;
  },

  deleteOrganization: async(organizationId) => {
    const Organization = dbRepo['default'].Organization;
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
