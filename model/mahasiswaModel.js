//import mongoose
const mongoose = require("mongoose");

//inisialisasi schema
const Schema = mongoose.Schema;

//inisialisasi skema mahasiswa
let MahasiswaSchema = Schema({
    nim: {type:String},
    nama: {type:String},
    jurusan: {type:String}
});

//export model mahasiswa
module.exports = mongoose.model("Mahasiswa", MahasiswaSchema);