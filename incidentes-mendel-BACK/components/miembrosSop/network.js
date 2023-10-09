const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const response = require('../../network/response')
const controller = require('./controller');

var app = express();
app.use(bodyParser.json())
app.use(router);

/*const upload = multer({
    dest: 'public/files/',
})*/

router.get('/',function (req,res){
    controller.obtenerMiembros()
    .then((mensaje)=> {
        response.success(req,res,mensaje, 200)
    })
    .catch(e =>{
        response.error(req,res, 'Error inesperado', 500, e)
    })
})

router.get('/:id',function (req,res){
    controller.obtenerMiembro(req.params.id)
    .then((mensaje)=> {
        response.success(req,res,mensaje, 200)
    })
    .catch(e =>{
        response.error(req,res, 'Error inesperado', 500, e)
    })
})

router.post('/', function (req, res) {
    controller.crearMiembro(req.body.nombre, req.body.correo, req.body.contrasena)
        .then((contenido) => { 
            response.success(req, res, contenido, 201)
        })
        .catch(e => {
            response.error(req, res, 'Error inesperado', 400, e);
        });    
  
}); 

router.patch('/:id', function (req, res) {
    controller.actualizarMiembro(req.params.id, req.body.nombre, req.body.correo, req.body.contrasena)
        .then((data) =>{ 
            response.success(req, res, data, 200)
        })
        .catch(e => {
            response.error(req,res, 'Error interno', 500, e);
        })
});

module.exports = router;