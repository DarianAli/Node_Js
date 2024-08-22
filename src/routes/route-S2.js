const express = require ('express')
const app = express()

app.use(express.json)

const controllerS2 = require('../controller/controller-S2')

app.get("/celcius/:celcius", controllerS2.celcius)
app.get("/reamur/:reamur", controllerS2.reamur)
app.get("/fahrenheit/:fahrenheit", controllerS2.fahrenheit)
app.get("/kelvin/:kelvin", controllerS2.kelvin)
 
module.exports = app