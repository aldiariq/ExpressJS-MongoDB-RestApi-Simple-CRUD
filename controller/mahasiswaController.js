//inisialisasi dan import model mahasiswa
const Mahasiswa = require("../model/mahasiswaModel");

exports.tambahmahasiswa = function(req, res) {
    //definisi inputan mahasiswa
    let mahasiswa = new Mahasiswa({
        nim: req.body.nim,
        nama: req.body.nama,
        jurusan: req.body.jurusan
    });

    //menyimpan data ke mongodb
    mahasiswa.save(function(err) {
        if (err) {
            return res.status(201).json({
                STATUS: "GAGAL",
                KETERANGAN: "Gagal menyimpan data mahasiswa"
            });
        }
        return res.status(201).json({
            STATUS: "BERHASIL",
            KETERANGAN: "Berhasil menyimpan data mahasiswa"
        });
    });
};

exports.tampilmahasiswa = function(req, res){
    //mencari semua data mahasiswa dan mereturnnya
    Mahasiswa.find({}, function(err, mahasiswa){
        if (err) {
            return next(err);
        }
        res.send(mahasiswa);
    });
}

exports.tampilsatumahasiswa = function(req, res){
    //mencari mahasiswa dengan id tersebut dan mereturnnya
    Mahasiswa.findById(req.params.id, function(err, mahasiswa){
        if (err) {
            return next(err);
        }
        res.send(mahasiswa);
    });
}

exports.ubahmahasiswa = function(req, res){
    //mencari mahasiswa dengan id tersebut dan mengubahnya
    //$set: req.body berarti meng-set semua key dengan value yang di request
    Mahasiswa.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, mahasiswa){
        if (err) {
            return res.status(201).json({
                STATUS: "GAGAL",
                KETERANGAN: "Gagal mengubah data mahasiswa"
            });
        }
        return res.status(201).json({
            STATUS: "BERHASIL",
            KETERANGAN: "Berhasil mengubah data mahasiswa"
        });
    });
}

exports.hapussatumahasiswa = function(req, res){
    //mencari mahasiswa dengan id tersebut dan menghapusnya
    Mahasiswa.findByIdAndRemove(req.params.id, function(err, mahasiswa){
        if (err) {
            return res.status(201).json({
                STATUS: "GAGAL",
                KETERANGAN: "Gagal menghapus data mahasiswa"
            });
        }
        return res.status(201).json({
            STATUS: "BERHASIL",
            KETERANGAN: "Berhasil menghapus data mahasiswa"
        });
    });
}