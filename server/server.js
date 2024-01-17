const express = require('express')
const path = require('path')
const db = require('./config/connection')

const app = express()
const PORT = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json())


db.once('open', () => {
    app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`))
})
