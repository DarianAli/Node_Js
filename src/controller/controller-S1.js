// KUBUS

exports.kubus = (req, res) => {
    let sisi = Number(req.body.sisi)

    let volume = sisi * sisi * sisi
    let LuasPermukaan = 6 * (sisi * sisi)

    let response = {
        sisi: sisi,
        volume: volume,
        luasPermukaan: LuasPermukaan
    }
    return res.json(response)
}

// PersegiPanjang
exports.balok = (req, res) => {
    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    let tinggi = Number(req.body.tinggi)

    let volume = panjang * lebar * tinggi
    let luasPermukaan = 2 * (panjang * lebar) + 2 * (panjang * tinggi) + 2 * (lebar * tinggi)

    let response = {
        panjang: panjang,
        lebar: lebar,
        tinggi: tinggi,
        volume: volume,
        luasPermukaan: luasPermukaan
    }
    return res.json(response)
}

// tabung
exports.tabung = (req, res) => {
    let jariJari = Number(req.body.jariJari)
    let tinggi = Number(req.body.tinggi)

    let volume = Math.PI * jariJari * jariJari * tinggi
    let luasPermukaan = 2 * Math.PI * jariJari * (jariJari + tinggi)

    let response = {
        jariJari : jariJari,
        tinggi : tinggi,
        volume : volume,
        luasPermukaan : luasPermukaan
    }
    return res.json(response)
}

// BOLA
exports.bola = (req,res) => {
    let r = Number(req.body.r)

    let volume = 4/3 * Math.PI * r * r * r
    let luasPermukaan = 4 * Math.PI * r * r

    let response = {
        jariJari : r,
        volume : volume,
        luasPermukaan : luasPermukaan
    }
    return res.json(response)
}

