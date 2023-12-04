
"use client"

import styles from "./pagination.module.css"
import { usePathname, useSearchParams, useRouter } from 'next/navigation'

const Pagination = () => {
 
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const {replace} = useRouter();

  const page = searchParams.get("page") || 1;

  const params =new URLSearchParams(searchParams);
  const item_pagina = 5;

    return (
      <div className={styles.container}>
        <button className={styles.button} disabled>Anterior</button>
        <button className={styles.button}>Siguiente</button>
      </div>
    )
  }
  
  export default  Pagination