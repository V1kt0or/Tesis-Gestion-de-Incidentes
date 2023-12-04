
import styles from "@/app/ui/dashboard/usuarios/usuario/usuario.module.css"

const  UsuarioInfo = () => {
    return (
      <div className={styles.container}>
        <div className={styles.formContainer}>
            <form action="" className={styles.form}>
            <label>Nombre</label>
            <input type="text" name="nombre" placeholder="Victor"/>
            <label>Dni</label>
            <input type="text" name="dni" placeholder="76654535"/>
            <label>Sede</label>
            <input type="text" name="sede" placeholder="Umacollo"/>
            <label>Grado</label>
            <input type="text" name="grado" placeholder="5to c"/>
            <label>Nivel</label>
            <input type="text" name="nivel" placeholder="Secundaria"/>
            <label>Tutor</label>
            <input type="text" name="tutor" placeholder="Felipe"/>
            <label>Dni del Tutor</label>
            <input type="text" name="dnitutor" placeholder="56673453"/>
            <label>Deuda</label>
            <input type="text" name="deuda" placeholder="Tiene"/>
            </form>

        </div>
      </div>
    )
  }
  
  export default UsuarioInfo