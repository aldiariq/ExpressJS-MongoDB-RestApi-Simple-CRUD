//inisialisasi dan import model akun
const Akun = require("../model/akunModel");
//inisialisasi dan import bycrpt untuk enkripsi password
const bcrypt = require('bcrypt');
const saltbcrypt = bcrypt.genSaltSync(10);
//inisialisasi jsonwebtoken
const jsonwebtoken = require('jsonwebtoken');

exports.daftarakun = async function(req, res){
    //inisialisasi username dan password dari inputan request
    const {username, password} = req.body;

    //hash password dengan bcrypt
    const hashpasswordakun = await bcrypt.hash(password, saltbcrypt);

    //definisi inputan akun
    let akun = new Akun({
        username: username,
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

exports.masuk = async function(req, res){
    //inisialisasi username dan password dari inputan request
    const {username, password} = req.body;

    //mencari data akun dengan username yang telah diinputkan
    const dataakun = await Akun.findOne({username: username});

    //jika data akun ada
    if(dataakun){
        //melakukan pembandingan password yang diinputkan dengan password sebenarnya
        const passwordakun = await bcrypt.compare(password, dataakun.password);
        //jika password benar
        if(passwordakun){
            const datatoken = {
                idakun: dataakun._id
            };
            const token = await jsonwebtoken.sign(datatoken, "12345678");
            return res.status(201).json({
                STATUS: "BERHASIL",
                KETERANGAN: "Berhasil Masuk",
                USERNAME: dataakun.username,
                TOKEN: token
            });
        //jika password salah
        }else{
            return res.status(201).json({
                STATUS: "BERHASIL",
                KETERANGAN: "Gagal Masuk",
                USERNAME: ""
            });
        }
    //jika akun tidak ditemukan
    }else{
        return res.status(201).json({
            STATUS: "BERHASIL",
            KETERANGAN: "Username Tidak Ada",
            USERNAME: ""
        });
    }
    
}