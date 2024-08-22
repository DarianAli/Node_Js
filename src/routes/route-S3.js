const express = require('express')
const app = express()

app.use(express.json)

const controllerS3 = require('../controller/controller-S3')

app.get("/desimal/:bDesimal", controllerS3.desimal)
app.get("/biner/:bBiner", controllerS3.biner)
app.get("/octal/:bOktal", controllerS3.octal)
app.get("/hexa/:bHexa", controllerS3.hexa)
 
module.exports = app