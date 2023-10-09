const functions = require('./functions')

function crearUsuario(nombre, correo, contrasena, sede){
    return new Promise ((resolve, reject) => {
        
        if (!nombre || !correo || !contrasena) {
            console.error('Faltan datos');
            reject('El envio de datos no es correto2');
            return false;   
        }

        const contenido = {
            Nombre: nombre,
            Correo: correo, 
            Contrasena: contrasena, 
            Sede: sede,  
         }
        
         functions.agregar(contenido)
         resolve(contenido);
    });
 
}

function obtenerUsuarios(){
    return new Promise ((resolve, reject) => {
        resolve(functions.lista());
    });
}

function obtenerUsuario(id){
    return new Promise ((resolve, reject) => {
        resolve(functions.ver(id));
    });
}

function actualizarUsuario(id, nombre, correo, contrasena, sede){
    return new Promise ( async (resolve, reject) => {
        if (!id ) {
            console.error('Faltan datos');
            reject('El envio de datos no es correto');
            return false;
        }
        if (!nombre){
            nombre  = '';
        }
        if (!correo){
            correo  = '';
        }
        if (!contrasena){
            contrasena  = '';
        }
        if (!sede){
            sede  = '';
        }
        const AcResult = await functions.cambiar(id, nombre, correo, contrasena, sede);
        resolve(AcResult)    
    });
}

module.exports = {
    crearUsuario,
    obtenerUsuarios,
    actualizarUsuario,
    obtenerUsuario
}