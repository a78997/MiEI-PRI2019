var express = require('express');
var router = express.Router();

var Obras = require('../controllers/obras')

router.get('/', function(req, res, next) {
  if(req.query.periodo){
    Obras.listarPeriodo(req.query.periodo)
      .then(dados=> res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
  }
  else if(req.query.anoCriacao){
    Obras.listarAno(req.query.anoCriacao)
      .then(dados=> res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
  }
  else if(req.query.compositor){
    Obras.listarCompositor(req.query.compositor)
      .then(dados=> res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
  }
  else{
  /*Lista de Obras */
    Obras.listar()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
  }
  }    
)


module.exports = router;
