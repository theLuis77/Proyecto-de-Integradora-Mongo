'use strict';

const mongoose = require('mongoose');

const FormularioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    placa: {
        type: String,
        required: true
    },
    tel: {
        type: String,
        required: true,
        // validate: {
        //     validator: function(v) {
        //         // Validación básica de número de teléfono
        //         return /\d{3}-\d{3}-\d{4}/.test(v);
        //     },
        //     message: props => `${props.value} no es un número de teléfono válido`
        // }
    },
    cel: {
        type: String,
        required: true,
        // validate: {
        //     validator: function(v) {
        //         // Validación básica de número de celular
        //         return /\d{3}-\d{3}-\d{4}/.test(v);
        //     },
        //     message: props => `${props.value} no es un número de celular válido`
        // }
    },
    ficha: {
        type: String,
        required: true
    },
    carro: String,
    permiso: String
});

module.exports = mongoose.model('Formulario', FormularioSchema);
