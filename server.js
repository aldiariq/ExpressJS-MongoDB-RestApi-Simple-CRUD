//import express, body-parser, dan mongoose
const express = require('express');
var bodyParser = require('body-parser');
const mongoose = require("mongoose");
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
//inisialisasi dan import route mahasiswa
const mahasiswaRoute = require("./routes/mahasiswaRoutes");

//Koneksi database
let mongourl = "mongodb://localhost:27017/mahasiswaapi";
const mongoDB = mongourl;
mongoose.connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Koneksi Error"));

//inisialisasi app
const crudMahasiswa = express();
crudMahasiswa.use(bodyParser.urlencoded({extended: true}));
crudMahasiswa.use(bodyParser.json());
crudMahasiswa.use("/api", mahasiswaRoute);
const port = 3000;

//menjalankan server
crudMahasiswa.listen(port, () => {
    console.log(`Aplikasi sudah berjalan di port ${port}`);
});