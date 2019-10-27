var http = require('http')
var fs = require('fs')


var myserver = http.createServer(function (req, res) {
    console.log(req.method + ' ' + req.url)

    var arrayUrl = req.url.split('/')
    var id = arrayUrl[arrayUrl.length-1];
 
    if(req.method == 'GET'){
        if(req.url == '/w3.css'){
            fs.readFile('w3.css', (erro, dados)=>{
                if(!erro){
                    res.writeHead(200, {'Content-Type': 'text/css'})
                    res.write(dados)
                }    
                else {
                    res.writeHead(200, {'Content-Type': 'text/plain'})
                    res.write('Erro na leitura do w3.css...')
                }    
                res.end()
            })
        }
        else{
           if(parseInt(id,10) < 449){
            
            fs.readFile('data/doc'+ id +'.xml', (erro, dados) => {
                if(!erro){
                    res.writeHead(200, {'Content-Type': 'text/xml'})
                    res.write(dados)
                    res.end()
                }
                else{
                    res.writeHead(200, {'Content-Type': 'text/plain'})
                    res.write('Erro na leitura do doc'+ id + '.xml')
                    res.end('Erro: ' + erro)
                }   
            })
            }
            else if(id == "doc2html.xsl"){
                    fs.readFile('doc2html.xsl', (erro,dados)=>{
                        if(!erro){
                        res.writeHead(200, {'Content-type':'text/xml'})
                        res.write(dados)
                        res.end()
                        }
                        else{
                            res.writeHead(200, {'Content-Type': 'text/plain'})
                            res.write('Erro na leitura do doc2html.xsl')
                            res.end('Erro: ' + erro) 
                        }
                    })
            }
            else{
                   res.end('Erro: pedido não suportado [' + req.url + ']')
            }
        }
    }
    else{
        res.end('Erro: método não suportado [' + req.method + ']')
    }
})
   
myserver.listen(3021)
 
console.log('Servidor à escuta na porta 3021...')