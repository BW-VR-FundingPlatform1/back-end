const knex = require('knex');
const enviroment = process.env.NODE_ENV || "development"
const knexConfig = require('../knexfile.js');

module.exports = knex(knexConfig[enviroment]);
