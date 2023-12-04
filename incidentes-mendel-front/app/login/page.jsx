
import styles from "@/app/ui/login/login.module.css"

const  LoginPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <h1>Iniciar sesion</h1>
        <input type="text" placeholder="usuario"/>
        <input type="password" placeholder="contrasena"/>
        <button>Ingresar</button>
      </form>
    </div>
  )
}

export default LoginPage