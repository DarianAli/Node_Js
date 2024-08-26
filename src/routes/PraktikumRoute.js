const express = require('express')
const app = express()

app.use(express.json())

const PraktikumController = require ('../controller/PraktikumControllers')

app.get("/test", PraktikumController.test)
app.get("/profil/:name/:age", PraktikumController.profil)
app.post("/bujurSangkar", PraktikumController.bujurSangkar)

module.exports = app