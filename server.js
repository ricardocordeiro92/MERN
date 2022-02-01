const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./src/routes');

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb://127.0.0.1:27017/curso-basico-mern', function (error) {
    if(error) {
        console.log(error)
    } else {
        console.log('MongoDB CONECTADO com sucesso')
    }
});

app.use(cors()); // Para saber quais domínios podem estar consumindo os dados desta API
app.use(cookieParser());
app.use(express.json()); // Para quando precisarmos enviar json do front para o back
app.use(routes);

app.listen(port, function() { // Rodar o servidor
    console.log(`Server runing on port ${port}`)
});