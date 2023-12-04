import styles from "@/app/ui/dashboard/incidentes/incidentes.module.css"
import Search from "@/app/ui/dashboard/search/search"
import Link from "next/link"
import Pagination from "@/app/ui/dashboard/pagination/pagination"
import { verIncidentes } from "@/app/lib/data"

const  IncidentsPages = async () => {

  const incidentes = await verIncidentes();
  console.log(incidentes);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Link href="/dashboard/incidentes/agregar">
          <button className={styles.addButton}>Nuevo Incidente</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Codigo</td>
            <td>Incidente</td>
            <td>Categoria</td>
            <td>Prioridad</td>
            <td>Estado</td>
          </tr>
        </thead>
        <tbody>
          {incidentes.body.map((incidente) => ( 
          <tr key={incidente._id}>
            <td>{incidente.Codigo}</td>
            <td>{incidente.Nombre}</td>
            <td>{incidente.Categoria}</td>
            <td>{incidente.Prioridad}</td>
            <td>{incidente.Estado}</td>
            <td>
              <div className={styles.buttons}>
              <Link href={`/dashboard/incidentes/${incidente._id}`}>
                <button className={`${styles.button} ${styles.view}` }>Ver</button>
              </Link>
              </div>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
      <Pagination/>
    </div>
  )
}

  
  export default IncidentsPages