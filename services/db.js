const Sequelize = require('sequelize');

const connectionString = 'postgres://postgres:0981045832@localhost:5432/todo';
// process.env.DATABASE_URL || 

const db = new Sequelize(connectionString);

module.exports = db;