const express = require('express');
const port = process.env.PORT || 5000
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config')
const pendidikan = require('./routes/pendidikan')

//midleware
const corsOptions = {
    methods: 'GET, POST, PATCH, DELETE, OPTIONS',
    optionsSuccessStatus: 200,
    origin: 'http://192.168.2.128:3000'
}
// app.use(corsMiddleware)
app.use(cors(corsOptions))
app.options('*', cors());
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())



//Routes
app.use('/data_penduduk', pendidikan)

mongoose.connect(
    process.env.MONGODB_URI, 
    { useNewUrlParser: true, useUnifiedTopology: true }, () => {
        console.log("Database connected...")
})

app.use((req, res, next) => {
    const error = new Error('Not Found!')
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    })
})

//Booting Up the Server
// app.listen(port, () => [
//     console.log(`Server is running ${port}...`)
// ])

module.exports = app