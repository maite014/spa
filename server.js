const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const path = require('path')
const app = express()

// Middleware para servir arquivos estáticos
app.use(express.static(__dirname))

// Body-parser para ler dados de formulários
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Inicializando servidor
const PORT = 8080
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})