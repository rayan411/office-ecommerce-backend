// sequelize.js

const { Sequelize } = require('sequelize');
const pool = require('./db'); // Assuming db.js is in the same directory

const sequelize = new Sequelize({
  dialect: 'postgres',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  dialectOptions: {
    connectionTimeoutMillis: 1000
  },
  logging: false, // Set to console.log to see the raw SQL queries
  define: {
    timestamps: true // Default for all models
  },
  sync: { force: false } // Set to true to drop existing tables and recreate them
});

module.exports = sequelize;
