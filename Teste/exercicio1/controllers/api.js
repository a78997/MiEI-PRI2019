var Pub = require('../models/pub.js')

//Lista de todas as publicações
module.exports.listarPubs = () => {
    return Pub
        .find({},{id:1, title:1, year:1, type:1})
        .exec()
}

//Devolver publicação por id
module.exports.consultarID = i => {
    return Pub 
        .find({id: i})
        .exec()
}

//Devolver publicações de um determinado tipo
module.exports.consultarTipo = tipo => {
    return Pub 
        .find({type: tipo})
        .exec()
}

//Devolver publicações de um determinado tipo
module.exports.consultarTipoAno = (tipo, ano) => {
    return Pub 
        .find({type: tipo, year: {$gt: ano}})
        .exec()
}

module.exports.consultarAutor = autor => {
    return Pub
        .find({authors: autor})
        .exec()
}

module.exports.listarTipos = () => {
    return Pub
        .aggregate([{$group: {_id: "$type"}}])
        .exec()
}

module.exports.listarAutores = () => {
    return Pub
        .aggregate([{$group: {_id : "$authors"}}])
        .exec()
}