exports.desimal = (req,res) => {
    let bDesimal = Number(req.params.bDesimal)

    let bBiner = bDesimal.toString(2)
    let bOktal = bDesimal.toString(8)
    let bHexa = bDesimal.toString(16)

    let response = {
        Desimal : bDesimal,
        convert : {
            Biner : bBiner,
            Octal : bOktal,
            Hexa : bHexa
        }    
    }
    return res.json(response)
}

exports.biner = (req,res) => {
    let bBiner = Number(req.params.bBiner)

    let bDesimal = parseInt(bBiner, 2)
    let bOktal = parseInt(bBiner, 2).toString(8)
    let bHexa = parseInt(bBiner, 2).toString(16)

    let response = {
        Binary : bBiner,
        convert : {
            Decimal : bDesimal,
            Octal : bOktal,
            Hexa : bHexa
        }
    }
    return res.json(response)
}

exports.octal = (req,res) => {
    let bOktal = Number(req.params.bOktal)

    let bDesimal = parseInt(bOktal, 8)
    let bBiner = bDesimal.toString(2)
    let bHexa = bDesimal.toString(16)

    let response = {
        Octal : bOktal,
        convert : {
            Desimal : bDesimal,
            Biner : bBiner,
            Hexa : bHexa
        }
    }
    return res.json(response)
}   

exports.hexa = (req,res) => {
    let bHexa = Number(req.params.bHexa)

    let bDesimal = parseInt(bHexa, 16)
    let bBiner = bDesimal.toString(2)
    let bOktal = bDesimal.toString(8)

    let response = {
        Hexa : bHexa,
        convert : {
            Desimal : bDesimal,
            Biner : bBiner,
            Octal : bOktal
        }
    }
    return res.json(response)
}