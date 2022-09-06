import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./NewProduct.module.css"

const NewProduct = () => {

    const handleSubmit = () => {
        alert("Ny produkt tillagd!")
    }
  return (
    <div>
    <div className={styles.formBox}>
        <h5>Ny produkt</h5>
        <form onSubmit={handleSubmit} className={styles.form} id="form1">
            <div className={styles.formHolder}>
                <input type="text" name="name" id="name" placeholder='Namn' required/>
                <textarea id='description' placeholder='Beskriving' required/>
                <input type="number"  id='price' placeholder='Pris' required/>
                <select name="category" id="Kategori">
                    <option selected disabled hidden>Kategori</option>
                    <option>T-shirt</option>
                    <option>Tröjor</option>
                    <option>Byxor</option>
                    <option>Skor</option>
                </select>
                <input type="text" id="brand" placeholder='Varumärke' required/>
                <input type="url" name="url" id="url" placeholder="https://example.com" required/>
                <button className={styles.goback} type="submit" >Lägg till!</button>
                <Link to="/admin">
                <button className={styles.goback}>Tillbaka</button>
                </Link>
            </div>
        </form>
    </div>
    </div>
  )
}

export default NewProduct