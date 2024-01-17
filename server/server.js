const express = require('express')
const path = require('path')
const db = require('./config/connection')
const Task = require('./models/Task')

const app = express()
const PORT = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json())


app.get('/tasks', async(req, res) => {
    const tasks = await Task.find({});
    res.status(200).json(tasks)
})

db.once('open', () => {
    app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`))
})
