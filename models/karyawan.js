const { Sequelize } = require("sequelize");
const db = require("../config/database");

const { DataTypes } = Sequelize;

const Karyawan = db.define(
  "karyawan",
  {
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tglLahir: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    umur: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    jmlAnak: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Karyawan;
