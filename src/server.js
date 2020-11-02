//importar pacote/dependencia
const express = require('express');
const path = require('path')
const pages = require('./pages.js')

// iniciando o express
const server = express()
//utilizar body da requisição
server.use(express.urlencoded({ extended: true }))
//utilizando arquivos staticos
server.use(express.static('public'))

//configurar template engine
server.set('views', path.join(__dirname, 'views'))
server.set('view engine', 'hbs')

// criar uma rota
server.get('/', pages.index)
server.get('/orfanato', pages.orfanato)
server.get('/orfanatos', pages.orfanatos)
server.get('/create-orfanato', pages.createOrfanato)
server.post('/save-orfanato', pages.saveOrfanato)

// ligar o servidor
server.listen(5500)