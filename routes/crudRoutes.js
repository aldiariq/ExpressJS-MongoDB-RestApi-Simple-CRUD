//import express dan inisialisasi router
const express = require("express");
const router = express.Router();

//import middleware authentikasi
const middleware = require("../middleware/middleware");

//inisialisasi controller akun
const akunController = require('../controller/akunController');

//inisialisasi controller mahasiswa
const mahasiswaController = require('../controller/mahasiswaController');

//route daftar dan masuk
router.post("/daftarakun", akunController.daftarakun);
router.post("/masuk", akunController.masuk);

//route crud data mahasiswa
router.post("/tambahmahasiswa", middleware, mahasiswaController.tambahmahasiswa);
router.get("/tampilmahasiswa", middleware, mahasiswaController.tampilmahasiswa);
router.get("/tampilsatumahasiswa/:id", middleware, mahasiswaController.tampilsatumahasiswa)
router.put("/ubahmahasiswa/:id", middleware, mahasiswaController.ubahmahasiswa);
router.delete("/hapussatumahasiswa/:id", middleware, mahasiswaController.hapussatumahasiswa);

//export route crud
module.exports = router;