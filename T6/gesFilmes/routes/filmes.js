var express = require('express');
var router = express.Router();
const axios = require('axios')

/*GET: Página c/lista de filmes*/
router.get('/', function(req,res){
    axios.get('http://localhost:3008/api/filmes')
        .then(dados => {
            res.render('lista-filmes', { lista: dados.data });
        })
        .catch(erro => {
            res.render('error', {error: erro})
        })
})

/*GET: Formulário para inserir filme*/
router.get('/inserir', function(req, res){
    res.render('form-filme')
})

/*GET: Página individual do filme */
router.get('/:idFilme', function(req, res) {
    var id = req.params.idFilme
    axios.get(`http://localhost:3008/api/filmes/${id}`)
        .then(dados => {
            res.render('pag-filme', {filme:dados.data})
        })
        .catch(erro => {
            res.render('error', {error: erro})
        })
})

/*POST: inserir filme*/
router.post('/', function(req, res){
    axios.post('http://localhost:3008/api/filmes', req.body)
        .then(dados => {
            res.redirect('/')
        })
        .catch(erro => {
            res.render('error', {error: erro})
        })
})

module.exports = router

