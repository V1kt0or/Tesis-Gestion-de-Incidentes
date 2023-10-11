const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
    Nombre: {
        type: String,
        required: true,
    },
    Correo: {
        type: String,
        required: true,
    },
    Contrasena: {
        type: String,
        required: true,
    },
});

const dbIncidentes = mongoose.createConnection('mongodb://victorIncidentes:victor123@127.0.0.1:27017/Incidentes-Back');

dbIncidentes.Promise = global.Promise;

const model = dbIncidentes.model('miembroSoporte', mySchema);
module.exports = model;