'use strict';

const Formulario = require('../MODELOS/Formulario.js');

const Controler = {
    save: (req, res) => {
        const params = req.body;

        const formulario = new Formulario();
        formulario.nombre = params.nombre;
        formulario.placa = params.placa;
        formulario.tel = params.tel;
        formulario.cel = params.cel;
        formulario.ficha = params.ficha;
        formulario.carro = params.carro;
        formulario.permiso = params.permiso;

        formulario.save()
            .then(formularioStored => {
                return res.status(200).send({
                    status: 'success',
                    formularioStored
                });
            })
            .catch(error => {
                return res.status(404).send({
                    status: 'error',
                    message: 'El formulario no se pudo guardar'
                });
            });
    },

    getAllFormularios: (req, res) => {
        formulario.find()
            .then(formularios => {
                return res.status(200).send({
                    status: 'success',
                    data: formularios
                });
            })
            .catch(error => {
                console.error('Error al obtener los formularios:', error);
                return res.status(500).send({
                    status: 'error',
                    message: 'Error interno del servidor al obtener los formularios'
                });
            });
    },
    deleteFormularioById: (req, res) => {
        const { id } = req.params;

        formulario.findByIdAndDelete(id)
            .then(formulario => {
                if (!formulario) {
                    return res.status(404).json({
                        status: 'error',
                        message: 'Formulario no encontrado'
                    });
                }

                res.status(200).json({
                    status: 'success',
                    message: 'Formulario eliminado correctamente',
                    formulario
                });
            })
            .catch(error => {
                res.status(500).json({
                    status: 'error',
                    message: 'Error al eliminar el formulario',
                    error
                });
            });
    }
};

module.exports = Controler;
