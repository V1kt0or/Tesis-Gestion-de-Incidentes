const functions = require('./functions')

function crearMiembro(nombre, correo, contrasena){
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
      
         }
        
         functions.agregar(contenido)
         resolve(contenido);
    });
 
}

function obtenerMiembros(){
    return new Promise ((resolve, reject) => {
        resolve(functions.lista());
    });
}

function obtenerMiembro(id){
    return new Promise ((resolve, reject) => {
        resolve(functions.ver(id));
    });
}

function actualizarMiembro(id, nombre, correo, contrasena){
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

        const AcResult = await functions.cambiar(id, nombre, correo, contrasena);
        resolve(AcResult)    
    });
}

module.exports = {
    crearMiembro,
    obtenerMiembros,
    actualizarMiembro,
    obtenerMiembro
}