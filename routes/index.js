var express = require("express");
var router = express.Router();

const employeeController = require("../controller/employeeController");
const companyController = require("../controller/companyController");

/* GET home page. */

router.get("/employee", employeeController.getAllKaryawan);

router.get("/company", companyController.getAllKendaraan);

module.exports = router;
