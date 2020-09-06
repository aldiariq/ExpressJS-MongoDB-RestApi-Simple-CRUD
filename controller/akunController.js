//inisialisasi dan import model akun
const Akun = require("../model/akunModel");
//inisialisasi dan import bycrpt untuk enkripsi password
const bcrypt = require('bcrypt');
const saltbcrypt = bcrypt.genSaltSync(10);

exports.daftarakun = async function(req, res){
    const hashpasswordakun = await bcrypt.hash(req.body.password, saltbcrypt);

    //definisi inputan akun
    let akun = new Akun({
        username: req.body.username,
        password: hashpasswordakun
    });

    //menyimpan data ke mongodb
    akun.save(function(err){
        if (err) {
            return res.status(201).json({
                STATUS: "GAGAL",
                KETERANGAN: "Gagal mendaftarkan akun"
            });
        }
        return res.status(201).json({
            STATUS: "BERHASIL",
            KETERANGAN: "Berhasil mendaftarkan akun"
        });
    });
}

exports.lihatdaftarakun = function(req, res){
    //mencari semua data akun dan mereturnnya
    Akun.find({}, function(err, akun){
        if (err) {
            return next(err);
        }
        res.send(akun);
    });
}

