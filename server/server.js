const express = require('express')
const path = require('path')

const app = express()
const PORT = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`))