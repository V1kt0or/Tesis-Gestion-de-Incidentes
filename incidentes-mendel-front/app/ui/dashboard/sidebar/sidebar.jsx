
import MenuLink from "./menulink/menulink";
import Image from "next/image"; 
import styles from "./sidebar.module.css";
import {MdDashboard,
  MdSupervisorAccount,
  MdLibraryBooks,
  MdLogout,
 } from "react-icons/md"

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Inicio",
        path: "/dashboard",
        icon: <MdDashboard/>,
      },
      {
        title: "Usuarios",
        path: "/dashboard/usuarios",
        icon: <MdSupervisorAccount />,
      },
      {
        title: "Incidentes",
        path: "/dashboard/incidentes",
        icon: <MdLibraryBooks   />,
      },
    ],
  } ,

];

const  Sidebar = () => {
    return (
      <div className={styles.container}>
        <div className={styles.user}> 
          <Image src="/icons0.png" alt="" width="50" height="50"/>
          <div className={styles.userDetail}>
            <span className={styles.username}>Victor Ranilla</span>
            <span className={styles.userTitle}>Soporte</span>
          </div>
        </div>
        <ul className={styles.list}>
          {menuItems.map((cat) =>(
            <li key={cat.title}>
              <span className={styles.cat}>{cat.title}</span>
              {cat.list.map((item) => (
                <MenuLink item={item} key={item.title} />
              ))}
            </li>
            ))}
        </ul>
        <button className={styles.logout}>
            <MdLogout/>
            Cerrar sesion
        </button>
      </div>
    )
  }
  
  export default Sidebar;