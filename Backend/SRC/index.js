'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app=express();

const port= 3900;

var url = 'mongodb://127.0.0.1:27017/api_rest_reactformulario'
mongoose.Promise = global.Promise;

var Formulario_router = require('./ROUTER/Formulario');


// cargamos un body-parser, es un mmidelaure para analizar cuerpo atrves de URL
app.use(bodyParser.urlencoded({extended: false}));
// cualquier petecion la cambiamos a .json
app.use(bodyParser.json());
//Activamos el cost 
app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-allow-Methods','GET, POST, OPTIONS, PUT, DELATE');
    res.header ('Allow', 'GET, POST, OPTIONS, PUT, DELATE');
    next();

})
app.use('/api', Formulario_router);

mongoose.connect(url).then(() => {
    console.log('Conexión a la base de datos exitosa');
    app.listen(port, () => {
        console.log('Aplicación lanzada en el puerto ' + port);
    });
}).catch(error => {
    console.error('Error al conectar a la base de datos:', error);
});