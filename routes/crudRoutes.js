//import express dan inisialisasi router
const express = require("express");
const router = express.Router();

//inisialisasi controller akun
const akunController = require('../controller/akunController');

//inisialisasi controller mahasiswa
const mahasiswaController = require('../controller/mahasiswaController');

//route daftar dan masuk
router.post("/daftarakun", akunController.daftarakun);
router.post("/masuk", akunController.masuk);

//route crud data mahasiswa
router.post("/tambahmahasiswa", mahasiswaController.tambahmahasiswa);
router.get("/tampilmahasiswa", mahasiswaController.tampilmahasiswa);
router.get("/tampilsatumahasiswa/:id", mahasiswaController.tampilsatumahasiswa)
router.put("/ubahmahasiswa/:id", mahasiswaController.ubahmahasiswa);
router.delete("/hapussatumahasiswa/:id", mahasiswaController.hapussatumahasiswa);

//export route crud
module.exports = router;