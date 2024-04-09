'use strict'

const express = require('express');
const Formul = require('../COMTROLADORES/Controler');
// const Formul = require('../COMTROLADORES/Controler');


const router = express.Router();

router.post('/save', Formul.save);

router.get('/formularios', Formul.getAllFormularios);

router.delete('/formularios/:id', Formul.deleteFormularioById);
module.exports = router;
