var express = require('express');
var router = express.Router();

var Api = require('../controllers/api')

router.get('/pubs', function(req, res, next) {
    if(req.query.type){
        //Consultar por tipo
        Api.consultarTipo(req.query.type)
            .then(dados=> res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
    else if(req.query.type && req.query.year){
        //Consultar por tipo e ano superior a X
        Api.consultarTipoAno(req.query.type, req.query.year)
            .then(dados=> res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
    else if(req.query.autor){
        //Consultar publicações de um autor
        Api.consultarAutor(req.query.autor)
            .then(dados=> res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
    else{
        //Listar todas as publicações
        Api.listarPubs()
            .then(dados=> res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
    })

//Consultar publicação por ID
router.get('/pubs/:id', function(req, res, next) {
    Api.consultarID(req.params.id)
        .then(dados=> res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
    })

//Listar todos os tipos
router.get('/types', function(req, res, next) {
    Api.listarTipos()
        .then(dados=> res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
    })

//Listar autores por ordem alfabética  
router.get('/autores', function(req, res, next) {
    Api.listarAutores()
        .then(dados=> res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
    })



module.exports = router;
