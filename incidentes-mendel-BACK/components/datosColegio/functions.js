const modelo = require('./model');



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

async function obtenerAlumnosSede(codigo, nombre){
  if (nombre ==null){
    nombre = "";
  }
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
            { CodInst: parseInt(codigo) },
            { Nombre: { $regex: nombre, $options: 'i' } }
          ]
        });
    
    
    return incidentes;
}

async function obtenerAlumnosSedePorPag(codigo, nombre,cant_pagina,pagina){
  if (nombre ==null){
    nombre = "";
  }
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
            { CodInst: parseInt(codigo) },
            { Nombre: { $regex: nombre, $options: 'i' } }
          ]
        }).limit(cant_pagina).skip(cant_pagina*(pagina -1));
    
    
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
    listaS: obtenerAlumnosSede,
    listaSPag: obtenerAlumnosSedePorPag
}