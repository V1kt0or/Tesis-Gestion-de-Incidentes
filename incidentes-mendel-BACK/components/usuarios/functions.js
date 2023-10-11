const model = require('./model');

function agregarUsuario(usuario) {
    const  nUsuario = new model(usuario);
    nUsuario.save(); 
}

async function obtenerUsuarios(){
    const usuarios = await model.find();
    return usuarios;
}

async function obtenerUsuario(id){
    const  usuario = await model.findOne({
        _id: id
    });
    return usuario;
}


async function editarUsuario(id, nombre, correo, contrasena, sede) {
    const  usuarioId = await model.findOne({
        _id: id
    });

    if (nombre !== ''){
        usuarioId.Nombre  = nombre;
    }
    if (correo !== ''){
        usuarioId.Correo  = correo;
    }
    if (contrasena !== ''){
        usuarioId.Contrasena  = contrasena;
    }
    if (sede !== ''){
        usuarioId.Sede  = sede;
    }
    
    const cambioUsuario = await usuarioId.save();
    return cambioUsuario;
}





module.exports = {
    agregar: agregarUsuario,
    lista: obtenerUsuarios,
    ver:obtenerUsuario,
    cambiar: editarUsuario,
}