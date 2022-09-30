const Perusahaan = require("../models/perusahaan");

exports.getAllKendaraan = async (req, res) => {
  try {
    const data = await Perusahaan.findAll();
    res.render("company", {
      title: "Data Kendaraan Perusahaan",
      data,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
