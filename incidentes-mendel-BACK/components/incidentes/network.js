const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const response = require('../../network/response')
const controller = require('./controller');
const multer = require('multer')
var path = require('path');

var app = express();
app.use(bodyParser.json())
app.use(router);

var storage = multer.diskStorage({
    destination:function(req,file,cb){
    cb(null,'public/files/')
    },
    filename:function(req,file,cb){
    cb(null,Date.now()+path.extname(file.originalname)); //Appending extension
    }
    });
var upload = multer({ storage: storage,
     fileFilter: function (req, file, cb) {
     if (!file.originalname.match(/\.(pdf|doc|docx|jpg|jpeg|png)$/)) {
     return cb(new Error('Error en el tipo de archivo.'));
     }
     cb(null, true);
     }
     });


/*const upload = multer({
    dest: 'public/files/',
})*/

router.get('/',function (req,res){
    controller.obtenerIncidentes()
    .then((mensaje)=> {
        response.success(req,res,mensaje, 200)
    })
    .catch(e =>{
        response.error(req,res, 'Error inesperado', 500, e)
    })
})

router.get('/:id',function (req,res){
    controller.obtenerIncidente(req.params.id)
    .then((mensaje)=> {
        response.success(req,res,mensaje, 200)
    })
    .catch(e =>{
        response.error(req,res, 'Error inesperado', 500, e)
    })
})

router.post('/', upload.single('file'), function (req, res) {
    controller.crearIncidente(req.body.nombre, req.body.codigo, req.body.categoria, req.body.nombreUsuario, req.body.nombreAfectado, req.body.DNIAfectado, req.body.prioridad,  req.body.archivoAdjunto, req.body.descripcion, req.file)
        .then((contenido) => {
            response.success(req, res, contenido, 201)
        })
        .catch(e => {
            response.error(req, res, 'Error inesperado', 400, e);
        });    
  
}); 

router.patch('/:id', function (req, res) {
    controller.actualizarIncidente(req.params.id, req.body.cambio, req.body.contenido)
        .then((data) =>{
            response.success(req, res, data, 200)
        })
        .catch(e => {
            response.error(req,res, 'Error interno', 500, e);
        })
});

module.exports = router;