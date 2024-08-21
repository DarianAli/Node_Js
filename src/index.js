const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library body-parser
const cors = require("cors") // memanggil library cors
const app = express()
const PraktikumController = require (`./controller/PraktikumControllers`)

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())
// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))
// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

// import routes
const praktikum = require (`./routes/PraktikumRoute`)

// implementasi routes
app.use(`./basic_nodejs`, praktikum)

app.get("/test", PraktikumController.test)
app.get("/profil/:name/:age", PraktikumController.profil)
app.post("/bujurSangkar", PraktikumController.bujurSangkar)

app.listen(4000, () => {
    console.log("Server run on port 4000");
})