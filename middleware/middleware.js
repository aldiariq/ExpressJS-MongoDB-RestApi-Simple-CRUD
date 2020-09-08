//import file .env
require('dotenv/config');

//inisialisasi jsonwebtoken
const jsonwebtoken = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    //menampung token yang dikirimkan melalui header
    const token = req.header('Authorization');

    //jika tidak ada token yang dikirimkan
    if(!token){
        return res.status(200).json({
            STATUS: "BERHASIL",
            KETERANGAN: "Token Tidak Ditemukan"
        });
    //jika ada token yang dikirimkan
    }else {
        //memeriksa token valid atau tidak
        jsonwebtoken.verify(token, process.env.JWT_TOKEN, (err, decoded) => {
            if(err){
                return res.status(200).json({
                    STATUS: "BERHASIL",
                    KETERANGAN: "Token Tidak Valid"
                });
            }else {
                next();
            }
        });
    }
};