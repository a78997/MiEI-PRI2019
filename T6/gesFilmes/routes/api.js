const express = require('express')
const router = express.Router()

var Filmes = require('../controllers/filmes')

/*GET da lista de filmes*/
router.get('/filmes', function(req, res) {
    Filmes.listar()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

/* GET: Informação do Filme*/
router.get('/filmes/:idFilme', function(req, res) {
    Filmes.consultar(req.params.idFilme)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

/*POST: inserir um filme */
router.post('/filmes',function(req, res){
    Filmes.inserir(req.body)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

module.exports = router