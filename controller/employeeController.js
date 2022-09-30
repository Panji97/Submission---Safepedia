const Karyawan = require("../models/karyawan");

exports.getAllKaryawan = async (req, res) => {
  try {
    const data = await Karyawan.findAll();

    res.render("employee", {
      title: "Data Karyawan",
      data,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
