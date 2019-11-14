var express = require('express');
var router = express.Router();

var Obras = require('../controllers/obras')

router.get('/:nome', function(req, res, next) {
    Obras.listarCompositor(req.params.nome)
        .then(dados=> res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
    })
    
router.get('/', function(req, res, next) {
    Obras.listarCompositores()
        .then(dados=> res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
    })

module.exports = router