const functions = require('./functions')


function obtenerAlumnos(){
    return new Promise ((resolve, reject) => {
        resolve(functions.listaA());
    });
}

function obtenerAlumnosSede(codigo,nombre){
    return new Promise ((resolve, reject) => {
        resolve(functions.listaS(codigo, nombre));
    });
}

function obtenerAlumnosSedePagina(codigo,nombre,cant_pagina,pagina) {
    return new Promise ((resolve, reject) => {
        resolve(functions.listaSPag(codigo,nombre,cant_pagina,pagina));
    });
}


function obtenerAlumno(id){
    return new Promise ((resolve, reject) => {
        resolve(functions.verA(id));
    });
}

function obtenerDocentes(){
    return new Promise ((resolve, reject) => {
        resolve(functions.listaD());
    });
}

function obtenerDocente(id){
    return new Promise ((resolve, reject) => {
        resolve(functions.verD(id));
    });
}




module.exports = {
    obtenerAlumnos,
    obtenerAlumno,
    obtenerDocente,
    obtenerDocentes,
    obtenerAlumnosSede,
    obtenerAlumnosSedePagina
}