"use strict";var Sequelize=require("sequelize"),connectionString=process.env.DATABASE_URL||"postgres://postgres:0981045832@localhost:5432/todo",db=new Sequelize(connectionString);module.exports=db;