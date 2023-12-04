

import styles from "@/app/ui/dashboard/usuarios/usuarios.module.css"
import Search from "@/app/ui/dashboard/search/search"
import Link from "next/link"
import Pagination from "@/app/ui/dashboard/pagination/pagination"
import { verAlumnos } from "@/app/lib/data"



const  UsersPage = async ({searchParams}) => {




    const q = searchParams?.q || "";
    const page = searchParams?.page || "";
    const usuarios = await verAlumnos(q);

    return (
      <div className={styles.container}>
        <div className={styles.top}>
          <Search placeholder={"Buscar por usuario"}/>
         
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Codigo</td>
              <td>Apellidos</td>
              <td>Nombres</td>
              <td>Nivel</td>
              <td>Grado</td>
            </tr>
          </thead>
          <tbody>
            {usuarios.body.map((usuario) => ( 
            <tr key={usuario._id}>
              <td>{usuario.Codigo}</td>
              <td>{usuario.Apellido} {usuario.Apellido2}</td>
              <td>{usuario.Nombre}</td>
              <td>{usuario.Ciclo}</td> 
              <td>{usuario.Aula}</td>
              <td>
                <div className={styles.buttons}>
                <Link href={`/dashboard/usuarios/${usuario._id}`}>
                  <button className={`${styles.button} ${styles.view}` }>Ver</button>
                </Link>
                </div>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
        <Pagination

        />
      </div>
    )
  }
  
  export default UsersPage