const Sequelize = require('sequelize');

const db = new Sequelize('uptasknode','root','#Root1e_', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  operatorAliases: false,
  define: {
    timestamps: false
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = db;