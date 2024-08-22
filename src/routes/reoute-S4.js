const express = require ('express')
const app = express()

app.use(express.json)

const controllerS4 = require('../controller/controller-S4')

app.post("/bmi", controllerS4.bmi)

module.exports = app