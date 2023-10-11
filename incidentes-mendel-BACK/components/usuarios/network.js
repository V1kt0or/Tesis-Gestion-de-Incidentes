const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const response = require('../../network/response')
const controller = require('./controller');

const app = express();
app.use(bodyParser.json())
app.use(router);


router.get('/',function (req,res){
    controller.obtenerUsuarios()
    .then((mensaje)=> {
        response.success(req,res,mensaje, 200)
    })
    .catch(e =>{
        response.error(req,res, 'Error inesperado', 500, e)
    })
})

router.get('/:id',function (req,res){
    controller.obtenerUsuario(req.params.id)
    .then((mensaje)=> {
        response.success(req,res,mensaje, 200)
    })
    .catch(e =>{
        response.error(req,res, 'Error inesperado', 500, e)
    })
})

router.post('/', function (req, res) {
    controller.crearUsuario(req.body.nombre, req.body.correo, req.body.contrasena, req.body.sede)
        .then((contenido) => { 
            response.success(req, res, contenido, 201)
        })
        .catch(e => {
            response.error(req, res, 'Error inesperado', 400, e);
        });    
  
}); 

router.patch('/:id', function (req, res) {
    controller.actualizarUsuario(req.params.id, req.body.nombre, req.body.correo, req.body.contrasena, req.body.sede)
        .then((data) =>{ 
            response.success(req, res, data, 200)
        })
        .catch(e => {
            response.error(req,res, 'Error interno', 500, e);
        })
});

module.exports = router;