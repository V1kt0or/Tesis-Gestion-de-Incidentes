const modelo = require('./model');
/*const db = require('mongoose');

db.Promise = global.Promise;

db.connect('mongodb://victorIncidentes:victor123@127.0.0.1:27017/Incidentes-Back', {
    useNewUrlParser: true,
});*/



async function obtenerAlumnos(){
    const incidentes = await modelo.model.find({
        $expr: {
            $and: [
              { $ne: ['$Codigo', ''] }, // Asegura que 'Codigo' no sea una cadena vacía
              { $gt: [{ $toInt: { $trim: { input: '$Codigo' } } }, 230000] }, // Mayor que 230000
              { $lt: [{ $toInt: { $trim: { input: '$Codigo' } } }, 250000] } // Menor que 250000
            ]
          }
        });

    return incidentes;
}

async function obtenerAlumnosSede(codigo){
    const incidentes = await modelo.model.find({
        $and: [
            {
              $expr: {
                $and: [
                  { $ne: ['$Codigo', ''] }, // Asegura que 'Codigo' no sea una cadena vacía
                  { $gt: [{ $toInt: { $trim: { input: '$Codigo' } } }, 230000] }, // Mayor que 230000
                  { $lt: [{ $toInt: { $trim: { input: '$Codigo' } } }, 250000] },
                  { $lt: [{ $toInt: { $trim: { input: '$Codigo' } } }, 250000] } // Menor que 250000
                ]
              }
            },
            { CodInst: parseInt(codigo) } // Ciudad igual a 1
          ]
        });

    return incidentes;
}

async function obtenerAlumno(id){
    const  incidente = await modelo.model.findOne({
        _id: id
    });
    return incidente;
}

async function obtenerDocentes(){
    const incidentes = await modelo.model2.find();
    return incidentes;
}
async function obtenerDocente(id){
    const  incidente = await modelo.model2.findOne({
        _id: id
    });
    return incidente;
}

module.exports = {
    listaA: obtenerAlumnos,
    verA: obtenerAlumno,
    listaD: obtenerDocentes,
    verD: obtenerDocente,
    listaS: obtenerAlumnosSede
}