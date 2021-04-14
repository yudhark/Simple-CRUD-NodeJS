const express = require('express');
const router = express.Router()
const Pendidikan = require('../models/Pendidikan')

router.get('/', async (req, res) => {
    try {
        const pend = await Pendidikan.find()
        res.json(pend)
    } catch (error) {
        res.json({ message: "Error Geting Data", data: error })
    }
})

router.post('/', async (req, res) => {
    const findExistData = await Pendidikan.exists({
        Kelurahan: req.body.kelurahan,
        kecamatan: req.body.kecamatan,
        tahun: parseInt(req.body.tahun),
        semester: parseInt(req.body.semester)
    })
    try {
        if (findExistData) {
            res.status(409).json({
                message: "Data is already exist"
            })
        } else {
            const pend = new Pendidikan({
                kelurahan: req.body.kelurahan,
                kecamatan: req.body.kecamatan,
                tahun: parseInt(req.body.tahun),
                semester: parseInt(req.body.semester),
                tidakDanBelumSekolah: parseInt(req.body.tidakDanBelumSekolah),
                tidakDanBelumTamatSD: parseInt(req.body.tidakDanBelumSekolah),
                tamatSD: parseInt(req.body.tamatSD),
                tamatSMP: parseInt(req.body.tamatSMP),
                tamatSMA: parseInt(req.body.tamatSMA),
                diploma1: parseInt(req.body.diploma1),
                diploma3: parseInt(req.body.diploma3),
                diploma4_s1: parseInt(req.body.diploma4_s1),
                strata2: parseInt(req.body.strata2),
                strata3: parseInt(req.body.strata3)
            })
            const savePend = await pend.save()
            res.status(200).json(savePend)
        }
    } catch (error) {
        res.json({ message: "Error Submitting Data", data: error })
    }
})

router.get('/:kecName?/:kelName?', async (req, res) => {
    try {
        const findpendidikan = await Pendidikan.find({ kcamatan: req.params.kecName, kelurahan: req.params.kelName })
        res.json(findpendidikan)
    } catch (error) {
        res.json({ message: "Error Getting Data", data: error })
    }
})

router.delete('/:pendId', async (req, res) => {
    try {
        const deletedData = await Pendidikan.deleteOne({ _id: req.params.pendId })
        res.json(deletedData)
    } catch (error) {
        res.json({ message: "Error Deleting Data", data: error })
    }
})

router.patch('/:pendId', async (req, res) => {
    try {
        const updatedData = await Pendidikan.updateOne({ _id: req.params.pendId }, {
            $set: {
                kelurahan: req.body.kelurahan,
                kecamatan: req.body.kecamatan,
                tahun: parseInt(req.body.tahun),
                semester: parseInt(req.body.semester),
                tidakDanBelumSekolah: parseInt(req.body.tidakDanBelumSekolah),
                tidakDanBelumTamatSD: parseInt(req.body.tidakDanBelumSekolah),
                tamatSD: parseInt(req.body.tamatSD),
                tamatSMP: parseInt(req.body.tamatSMP),
                tamatSMA: parseInt(req.body.tamatSMA),
                diploma1: parseInt(req.body.diploma1),
                diploma3: parseInt(req.body.diploma3),
                diploma4_s1: parseInt(req.body.diploma4_s1),
                strata2: parseInt(req.body.strata2),
                strata3: parseInt(req.body.strata3)
            }
        })
        res.json(updatedData)
    } catch (error) {
        res.json({ message: "Error Deleting Data", data: error })
    }
})

module.exports = router