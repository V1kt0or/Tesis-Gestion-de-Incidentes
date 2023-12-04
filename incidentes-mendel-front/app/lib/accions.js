export const crearIncidente = async (incidenteData) => {
    try {
        // Crear un objeto FormData
        const formData = new FormData();

        // Agregar datos al formulario
        formData.append('nombre', incidenteData.titulo);
        formData.append('codigo', incidenteData.descripcion);
        formData.append('categoria', incidenteData.archivo);
        formData.append('nombreUsuario', incidenteData.titulo);
        formData.append('nombreAfectado', incidenteData.descripcion);
        formData.append('DNIAfectado', incidenteData.archivo);  // Suponiendo que 'archivo' es el nombre del campo de archivo

        // Realizar la solicitud POST
        const response = await fetch('http://localhost:3005/incidentes/', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
        throw new Error('Fallo al crear el incidente');
    }
};