const express = require('express')
const app = express()

app.use(express.json)

const controller = require('../controller/controller-S1')

app.post("/kubus", controller.kubus)
app.post("/balok", controller.balok)
app.post("/tabung", controller.tabung)
app.post("/bola", controller.bola)

module.exports = app