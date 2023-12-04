

export const verAlumnos = async (q, page) => {
    
    const items_pagina = 7;

    try {
        const response = await fetch(`http://localhost:3005/colegio/alumnos/sede/10/pag/${items_pagina}/${page}/${q}`);
                                        
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
        throw new Error("Fallo el ver usuarios");
    }  
}


export const verIncidentes = async () => {
    try {
        const response = await fetch(`http://localhost:3005/incidentes/`,  {
	        'mode': 'cors',
	        'headers': {
            	'Access-Control-Allow-Origin': '*',
        	}
    	});
        const data = await response.json();
        console.log("EEEEE ",data)
        return data;
    } catch (err) {
        console.log(err);
        throw new Error("Fallo el ver incidentes");
    }  
}