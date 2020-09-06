//inisialisasi dan import model akun
const Akun = require("../model/akunModel");
//inisialisasi dan import bycrpt untuk enkripsi password
const bcrypt = require('bcrypt');
const saltbcrypt = bcrypt.genSaltSync(10);

exports.daftarakun = function(req, res){
    // const {username, password} = req.body;
    // //definisi inputan akun

    //menyimpan data ke mongodb
    bcrypt.hash("aldi", saltbcrypt, function(err, hash){
        if(err){
            return next(err);
        }
        
        let akun = new Akun({
            username: req.body.username,
            password: hash
        });

        akun.save(function(err){
            if (err) {
                return next(err);
            }
            res.send("Berhasil mendaftarkan akun");
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

