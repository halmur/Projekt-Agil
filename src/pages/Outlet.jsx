import React from 'react'
import { tempProducts } from '../tempProducts'
import ProductCard from '../components/MainComp/ProductCard'
import styles from '../components/MainComp/Main.module.css'

const Outlet = () => {
  return (
    <>
    <div>Outlet</div>
    <section className={styles.trending_arrivals}>
    {tempProducts.filter(x => x.sale === true).map((productData, i) => (
        <ProductCard pD={productData} key={i}/>
    ))}
    </section>

    </>
  )
}

export default Outlet