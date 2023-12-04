import styles from "@/app/ui/dashboard/incidentes/incidente/incidente.module.css"

const  IncidenteInfo = () => {
    return (
      <div className={styles.container}>
        <div className={styles.formContainer}>
            <form action="" className={styles.form}>
            <label>Nombre</label>
            <input type="text" name="nombre" placeholder="Falla"/>
            <label>Categoria</label>
            <input type="text" name="categoria" placeholder="Error Login"/>
            <label>Usuario</label>
            <input type="text" name="usuario" placeholder="Denise"/>
            <label>Soporte</label>
            <input type="text" name="soporte" placeholder="Victor"/>
            <label>Afectado</label>
            <input type="text" name="afectado" placeholder="   "/>
            <label>DNI del Afectado</label>
            <input type="text" name="DNIafectado" placeholder="  "/>
            <label>Prioridad</label>
            <input type="text" name="prioridad" placeholder="Alta"/>
            <label>Estado</label>
            <input type="text" name="estado" placeholder="Sin asignar"/>
            <label>Fecha de Creacion</label>
            <input type="date" name="FechaCreacion" placeholder="02/02/2008"/>
            <label>Fecha de Aceptacion</label>
            <input type="date" name="FechaAceptacion" placeholder="02/02/2008"/>
            <label>Fecha de Cierre</label>
            <input type="date" name="FechaCierre" placeholder="02/02/2008"/>
            <label>Archivo Adjunto</label>
            <input type="button" name="archivoAdjunto" value="copia.txt"/>
            <label>Descripcion</label>
            <textarea type="text" name="descripcion" placeholder="Hay muchas cosas malas we, no se que hacer"/>
           
            </form>

        </div>
      </div>
    )
  }
  
  export default IncidenteInfo