import React from 'react'
import { tempProducts } from '../tempProducts'
import ProductCard from '../components/MainComp/ProductCard'
import styles from '../components/MainComp/Main.module.css'

const Nyheter = () => {
  return (
    <>
<<<<<<< HEAD
      <div className={styles.products}>
      <h2 className={styles.categoryTitle}>
          Nya produker
        </h2>
        <section className={styles.trending_arrivals}>
          {tempProducts.filter(x => x.new === true).map((productData, i) => (
            <ProductCard pD={productData} key={i} />
          ))}
        </section>
      </div>
=======

    <div>
        nya produker
    </div>
    <section className={styles.trending_arrivals}>
    {tempProducts.filter(x => x.new === true).map((productData, i) => (
        <ProductCard pD={productData} key={i}/>
    ))}
    </section>
>>>>>>> f589722333f15f5ec59b80942f0817e2adaf3581
    </>
  )
}

export default Nyheter