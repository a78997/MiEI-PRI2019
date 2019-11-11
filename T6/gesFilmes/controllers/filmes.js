var Filme = require('../models/filmes')

//Devolve a lista de alunos
module.exports.listar = () => {
    return Filme
        .find()
        .exec()
}

//Devolve informação de um filme
module.exports.consultar = id => {
    return Filme
        .findOne({_id: id})
        .exec()
}

//Insere um novo filme
module.exports.inserir = filme => {
    var novo = new Filme(filme)
    return novo.save()
}
