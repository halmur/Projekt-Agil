import React from 'react'
import { tempProducts } from '../tempProducts'
import ProductCard from '../components/MainComp/ProductCard'
import styles from '../components/MainComp/Main.module.css'

const Nyheter = () => {
  return (
    <>

    <div>
        nya produker
    </div>
    <section className={styles.trending_arrivals}>
    {tempProducts.map((productData, i) => (
        <ProductCard pD={productData} key={i}/>
    ))}
    </section>
    </>
  )
}

export default Nyheter