const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
    Nombre: String,
    Apellido: String,
    Apellido2: String,
}, { collection: 'Alumno' });

var dbIncidentes = mongoose.createConnection('mongodb://victorMendel:victor123@127.0.0.1:27017/mendelclass');

dbIncidentes.Promise = global.Promise;

const model = dbIncidentes.model('alumno', mySchema);

const mySchema2 = new Schema({
    Nombre: String,
    Apellidos: String,
    Dni: String,
}, { collection: 'Docente' });
const model2 = dbIncidentes.model('docente', mySchema2);

module.exports = {model, model2};


