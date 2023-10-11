const model = require('./model');


function agregarMiembro(miembro) {
    const  nMiembro = new model(miembro);
    nMiembro.save(); 
}

async function obtenerMiembros(){
    const miembro = await model.find();
    return miembro;
}

async function obtenerMiembro(id){
    const  miembro = await model.findOne({
        _id: id
    });
    return miembro;
}


async function editarMiembro(id, nombre, correo, contrasena, sede) {
    const  miembroId = await model.findOne({
        _id: id
    });

    if (nombre !== ''){
        miembroId.Nombre  = nombre;
    }
    if (correo !== ''){
        miembroId.Correo  = correo;
    }
    if (contrasena !== ''){
        miembroId.Contrasena  = contrasena;
    }
    if (sede !== ''){
        miembroId.Sede  = sede;
    }
    
    const cambioUsuario = await usuarioId.save();
    return cambioUsuario;
}





module.exports = {
    agregar: agregarMiembro,
    lista: obtenerMiembro,
    ver:obtenerMiembro,
    cambiar: editarMiembro,
}