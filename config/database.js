const { Sequelize } = require("sequelize");

const db = new Sequelize("safepedia-db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
