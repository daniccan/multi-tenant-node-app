'use strict';
const dbConnector = require('../src/utils/dbconnector');

let dbRepo = {};

dbConnector.addSequelizeConnectionToRepo(dbRepo, 'default');

module.exports = dbRepo;
