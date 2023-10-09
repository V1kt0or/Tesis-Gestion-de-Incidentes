const express = require('express');
const router = require('./network/routes')
const bodyParser = require('body-parser');
//const db = require('./db')
var app = express();
app.use(bodyParser.json())

router(app);
//app.use(router);


//PRUEBA DE ERROR
/*router.post('/', function (req, res) {
    console.log(req.query);
    if (req.query.error == "ok") {
        response.error(req, res, 'Error inesperado', 500, 'Es solo una simulacion')
    }
    else {
        response.succes(req, res, 'Creado correctamente', 201)
    }
}); */

app.use('/app', express.static('public'));

app.listen(3000);
console.log('Ejecutandooo');