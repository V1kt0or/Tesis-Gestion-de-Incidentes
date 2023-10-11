const model = require('./model');


function agregarIncidente(incidente) {
    const  nIncidente = new model(incidente);
    nIncidente.save(); 
}

async function obtenerIncidentes(){
    const incidentes = await model.find();
    return incidentes;
}

async function obtenerIncidente(id){
    const  incidente = await model.findOne({
        Codigo: id
    });
    return incidente;
}

async function aceptarIncidente(id, fecha) {
    const  incidenteId = await model.findOne({
        Codigo: id
    });

    incidenteId.FechaAceptacion = fecha;
    const cambioIncidente = await incidenteId.save();
    return cambioIncidente;
}

async function cambiarSoporte(id, nombre) {
    const  incidenteId = await model.findOne({
        Codigo: id
    });

    incidenteId.NombreMSoporte = nombre;
    const cambioIncidente = await incidenteId.save();
    return cambioIncidente;
}

async function cerrarIncidente(id, fecha) {
    const  incidenteId = await model.findOne({
        Codigo: id
    });

    incidenteId.FechaCierre = fecha;
    const cambioIncidente = await incidenteId.save();
    return cambioIncidente;
}



module.exports = {
    agregar: agregarIncidente,
    lista: obtenerIncidentes,
    aceptar: aceptarIncidente,
    cambiar: cambiarSoporte,
    cerrar: cerrarIncidente,
    ver: obtenerIncidente
}