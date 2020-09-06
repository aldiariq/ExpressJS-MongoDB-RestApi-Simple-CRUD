//import express dan inisialisasi router
const express = require("express");
const router = express.Router();

//inisialisasi controller mahasiswa
const mahasiswaController = require('../controller/mahasiswaController');

//route crud data mahasiswa
router.post("/tambahmahasiswa", mahasiswaController.tambahmahasiswa);
router.get("/tampilmahasiswa", mahasiswaController.tampilmahasiswa);
router.get("/tampilsatumahasiswa/:id", mahasiswaController.tampilsatumahasiswa)
router.post("/ubahmahasiswa/:id", mahasiswaController.ubahmahasiswa);
router.get("/hapussatumahasiswa/:id", mahasiswaController.hapussatumahasiswa);

//export route mahasiswa
module.exports = router;