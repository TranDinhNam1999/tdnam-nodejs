"use strict";

var Sequelize = require('sequelize');

var connectionString = process.env.DATABASE_URL || 'postgres://postgres:0981045832@localhost:5432/todo';
var db = new Sequelize(connectionString);
module.exports = db;