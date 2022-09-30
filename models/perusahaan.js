const { Sequelize } = require("sequelize");
const db = require("../config/database");

const { DataTypes } = Sequelize;

const Perusahaan = db.define(
  "kendaraan perusahaan",
  {
    tipe: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    warna: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tglBeli: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    jmlRoda: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);
module.exports = Perusahaan;
