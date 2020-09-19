var Sequelize = require('sequelize');
var dbConfig = require('../../config/config.js').dbConfig;
var mysql = require('mysql2');
var db = new Sequelize(...dbConfig);

db
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

var Cows = db.define('cows', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false
  }
});

Cows.sync({ alter: true });

exports.Cows = Cows;