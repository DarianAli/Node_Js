const express = require("express") //memanggil libary express
const bodyParser = require("body-parser") //memanggil libary body-parser
const cors = require("cors") //memanggil libary cors
const app = express() 

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())

// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))

//penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

// endpoint "/test" dengan method GET
app.get("/test", (req,res) => {
    // req merupakan variabel yang berisi data request
    // res merupakan variabel yang berisi data response dari end-point
    // membuat objek yang berisi data yang akan dijadikan response

let response = {
    message: "Ini end-point pertama ku",
    method: req.method,
    code: res.statusCode
    }
   
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)

})

// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");

})

// endpoint "/profil/nama/umur" dengan method GET
app.get("/profil/:name/:age", (req,res) => {
    
    // :name dan :age à diberikan titik dua didepan menunjukkan "name" dan
    "age"
    
    // bersifat dinamis yang dapat diganti nilai nya saat melakukan request
    // menampung data yang dikirimkan
    let name = req.params.name // mengambil nilai pada parameter name
    let age = req.params.age // mengambil nilai pada parameter age
    
    // membuat objek yang berisi data yang akan dijadikan response
    // response berisi data nama dan umur sesuai dengan nilai parameter
    let response = {
    nama: name,
    umur: age
    }
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})
   

