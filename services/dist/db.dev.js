"use strict";

var Sequelize = require('sequelize');

var connectionString = 'postgres://postgres:0981045832@localhost:5432/todo'; // process.env.DATABASE_URL || 

var db = new Sequelize(connectionString);
module.exports = db;