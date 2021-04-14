const mongoose = require('mongoose');

const Pendidikan = mongoose.Schema({
    kelurahan: {
        type: String,
        required: true
    },
    kecamatan: {
        type: String,
        required: true
    },
    tahun: {
        type: Number,
        required: true
    },
    semester: {
        type: Number,
        required: true
    },
    // golongan: {
    tidakDanBelumSekolah: Number,
    tidakDanBelumTamatSD: Number,
    tamatSD: Number,
    tamatSMP: Number,
    tamatSMA: Number,
    diploma1: Number,
    diploma3: Number,
    diploma4_s1: Number,
    strata2: Number,
    strata3: Number
// }

})

module.exports = mongoose.model('data_pendidikan', Pendidikan)
