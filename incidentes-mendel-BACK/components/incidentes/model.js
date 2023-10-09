const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
    Nombre: {
        type: String,
        required: true,
    },
    Codigo: {
        type: Number,
        required: true,
    },
    Categoria: {
        type: String,
        required: true,
    },
    NombreUsuario: {
        type: String,
        required: true,
    },
    NombreMSoporte: String,
    NombreAfectado: String,
    DNIAfectado : Number,
    Prioridad: String,
    Estado: String,
    FechaCreacion: {
        type: Date,
        required: true,
    },
    FechaAceptacion: Date,
    FechaCierre: Date,
    ArchivoAdjunto: String,
    Descripcion: String,
});

var dbIncidentes = mongoose.createConnection('mongodb://victorIncidentes:victor123@127.0.0.1:27017/Incidentes-Back');

dbIncidentes.Promise = global.Promise;

const model = dbIncidentes.model('incidente', mySchema);
module.exports = model;