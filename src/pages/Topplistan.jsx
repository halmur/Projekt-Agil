import React from 'react'
import { tempProducts } from '../tempProducts'
import ProductCard from '../components/MainComp/ProductCard'
import styles from '../components/MainComp/Main.module.css'

const Topplistan = () => {
  return (
    <>
    <div>Topplistan</div>
    <section className={styles.trending_arrivals}>
    {tempProducts.filter(x => x.likes > 300).map((productData, i) => (
        <ProductCard pD={productData} key={i}/>
    ))}
    </section>
    </>
  )
}

export default Topplistan