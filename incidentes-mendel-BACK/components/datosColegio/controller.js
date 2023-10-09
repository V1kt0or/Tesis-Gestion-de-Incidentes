const functions = require('./functions')


function obtenerAlumnos(){
    return new Promise ((resolve, reject) => {
        resolve(functions.listaA());
    });
}

function obtenerAlumnosSede(codigo){
    return new Promise ((resolve, reject) => {
        resolve(functions.listaS(codigo));
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
    obtenerAlumnosSede
}