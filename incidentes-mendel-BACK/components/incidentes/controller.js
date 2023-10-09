const functions = require('./functions')

function crearIncidente(nombre, codigo, categoria, nombreUsuario, NombreAfectado, DNIAfectado, Prioridad,  ArchivoAdjunto, Descripcion, archivo){
    

    return new Promise ((resolve, reject) => {
        
        if (!nombre || !codigo || !categoria || !nombreUsuario || !Prioridad) {
            console.error('Faltan datos');
            reject('El envio de datos no es correto');
            return false;   
        }

        let archivoUrl = ''
        if (archivo){
            archivoUrl  = 'http://localhost:3000/app/files/'+ archivo.filename;
        }
        
        const contenido = {
            Nombre: nombre,
            Codigo: codigo, 
            Categoria: categoria, 
            NombreUsuario: nombreUsuario,
            NombreAfectado: NombreAfectado,
            DNIAfectado: DNIAfectado,
            Prioridad: Prioridad,
            Estado: 'Sin revisar',
            FechaCreacion: new Date(),
            ArchivoAdjunto: ArchivoAdjunto,
            Descripcion: Descripcion,
            ArchivoAdjunto: archivoUrl,
         }
        

         functions.agregar(contenido)
         resolve(contenido);
    });
 
}

function obtenerIncidentes(){
    return new Promise ((resolve, reject) => {
        resolve(functions.lista());
    });
}

function obtenerIncidente(id){
    return new Promise ((resolve, reject) => {
        resolve(functions.ver(id));
    });
}

function actualizarIncidente(codigo, cambio, contenido){
    return new Promise ( async (resolve, reject) => {

        if (!codigo || !cambio) {
            console.error('Faltan datos');
            reject('El envio de datos no es correto');
            return false;
        }

        switch(cambio) {
            case "AceptarIncidente":
              contenido = new Date();
              const AcResult = await functions.aceptar(codigo,contenido);
              resolve(AcResult)
              break;
            case "CambiarSoporte":
              const CaResult = await functions.cambiar(codigo,contenido);
              resolve(CaResult)
              break;
            case "CerrarIncidente":
              contenido = new Date();
              const CeResult = await functions.cerrar(codigo,contenido);
              resolve(CeResult)
              break;
          default:
              console.log('cambio no valido');
          }
    });
}


module.exports = {
    crearIncidente,
    obtenerIncidentes,
    actualizarIncidente,
    obtenerIncidente
}