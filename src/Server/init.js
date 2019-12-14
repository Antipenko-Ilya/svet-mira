const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', 'qwerty123', {
    host: '127.0.0.1',
    port: '5432',
    dialect: 'postgres',
  
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
  });

  module.exports = {
    sequelize
  };