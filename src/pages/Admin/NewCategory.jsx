import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./NewCategory.module.css"

const NewCategory = () => {

    const handleSubmit = () => {
        alert("Ny kategori skapad!");

    }
    return (
        <div className={styles.formBox}>
            <h5>Ny kategori</h5>
            <form onSubmit={handleSubmit} className={styles.form} id="form1">
                <div className={styles.formHolder}>
                    <input type="text" name="name" id="name" placeholder='Kategori' required />
                    <input type="text" name='workname' id='workname' placeholder='Anställds namn' required />
                    <input type="number" name='workid' id='workid' placeholder='Anställds ID' required />
                    <button className={styles.goback} type="submit" >Lägg till!</button>
                    <Link to="/admin">
                        <button className={styles.goback}>Tillbaka</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default NewCategory