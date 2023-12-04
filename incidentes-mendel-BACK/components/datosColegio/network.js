const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const response = require('../../network/response')
const controller = require('./controller');
const multer = require('multer')
const path = require('path');

const app = express();
app.use(bodyParser.json())
app.use(router);



router.get('/alumnos',function (req,res){
    controller.obtenerAlumnos()
    .then((mensaje)=> {
        response.success(req,res,mensaje, 200)
    })
    .catch(e =>{
        response.error(req,res, 'Error inesperado', 500, e)
    })
})

router.get('/alumnos/:id',function (req,res){
    controller.obtenerAlumno(req.params.id)
    .then((mensaje)=> {
        response.success(req,res,mensaje, 200)
    })
    .catch(e =>{
        response.error(req,res, 'Error inesperado', 500, e)
    })
})

router.get('/alumnos/sede/:id/:id2?',function (req,res){
    const id = req.params.id;
    const id2 = req.params.id2 || null;
    controller.obtenerAlumnosSede(id,id2)
    .then((mensaje)=> {
        response.success(req,res,mensaje, 200)
    })
    .catch(e =>{
        response.error(req,res, 'Error inesperado', 500, e)
    })
})

router.get('/alumnos/sede/:id/pag/:id3/:id4/:id2?',function (req,res){
    const id = req.params.id;
    const id2 = req.params.id2 || null;
    controller.obtenerAlumnosSedePagina(id,id2,req.params.id3,req.params.id4)
    .then((mensaje)=> {
        response.success(req,res,mensaje, 200)
    })
    .catch(e =>{
        response.error(req,res, 'Error inesperado', 500, e)
    })
})

router.get('/docentes',function (req,res){
    controller.obtenerDocentes()
    .then((mensaje)=> {
        response.success(req,res,mensaje, 200)
    })
    .catch(e =>{
        response.error(req,res, 'Error inesperado', 500, e)
    })
})

router.get('/docentes/:id',function (req,res){
    controller.obtenerDocente(req.params.id)
    .then((mensaje)=> {
        response.success(req,res,mensaje, 200)
    })
    .catch(e =>{
        response.error(req,res, 'Error inesperado', 500, e)
    })
})

module.exports = router;