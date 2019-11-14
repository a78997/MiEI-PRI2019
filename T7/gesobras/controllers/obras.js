var Obra = require('../models/obras.js')

//Lista de todas as obras
module.exports.listar = () => {
    return Obra
        .find()
        .exec()
}

//Informação sobre uma obra com um dado id
module.exports.consultar = id => {
    return Obra
        .findOne({_id: id})
        .exec()
}

//Lista de obras de um dado periodo p
module.exports.listarPeriodo = p => {
    return Obra
        .find({periodo: p})
        .exec()
}

//Lista de obras de um dado ano de criação a
module.exports.listarAno = a => {
    return Obra
        .find({anoCriacao: a})
        .exec()
}

//Lista de Obras de um compositor c
module.exports.listarCompositor = c => {
    return Obra
        .find({compositor: c})
        .exec()
}

//Lista de Compositores
module.exports.listarCompositores = () => {
    return Obra
        .aggregate([{$unwind: "$compositor"}, {$group: {_id: "$compositor"}}])
        .exec()
}

