//import mongoose
const mongoose = require("mongoose");

//inisialisasi schema
const Schema = mongoose.Schema;

//inisialisasi schema akun
let AkunSchema = Schema({
    username: {type:String},
    password: {type:String},
});

//export model akun
module.exports = mongoose.model("Akun", AkunSchema);