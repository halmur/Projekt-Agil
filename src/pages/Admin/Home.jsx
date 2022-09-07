import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Home.module.css"

const Home = () => {
  return (
    <div className={styles.buttonContainer}>
      <div>
        <Link to="/admin/newcategory">
          <button className={styles.goback}>Skapa kategori</button>
        </Link>
        <Link to="/admin/newproduct">
          <button className={styles.goback}>Lägg till produkt</button>
        </Link>
        <Link to="/">
          <button className={styles.goback}>Tillbaka till start</button>
        </Link>
      </div>
    </div>
  )
}

export default Home