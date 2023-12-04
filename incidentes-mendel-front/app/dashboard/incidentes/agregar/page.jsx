
import styles from "@/app/ui/dashboard/incidentes/agregarIncidente/agregarIncidente.module.css"

const  AddProductPage = () => {
    return (
      <div className={styles.container}>
        <form action="" className={styles.form}>
            <input type="text" placeholder="Nombre" name="nombre" required/>
            <select name="categoria" id="categoria">
                <option value="general">Escoge una Categoria</option>
                <option value="Ingresar Correo">Escoge una Categoria</option>
                <option value="Ingresar web">Escoge una Categoria</option>
                <option value="notas">Escoge una Categoria</option>
                <option value="tareas">Escoge una Categoria</option>
            </select>
            <input type="text" placeholder="Nombre Afectado" name="nombreAfectado" />
            <input type="text" placeholder="DNI Afectado" name="DNIAfectado" />
            <input type="text" placeholder="Prioridad" name="prioridad" required/>
            <textarea name="descripcion" id="descripcion" cols="30" rows="10" placeholder="Descripcion"></textarea>
            <label className="custom-file-label" htmlFor="fileInput">
            <span>Subir Archivo</span>
            </label>
            <input type="file" id="fileInput" name="file" className="custom-file-input" />  
            <button type="submit">Subir</button>
        
        </form>
      </div>
    )
  }
  
  export default AddProductPage