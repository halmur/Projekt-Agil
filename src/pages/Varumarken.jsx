import React from 'react'
import { useParams } from 'react-router-dom'
import { tempProducts } from '../tempProducts'
import ProductCard from '../components/MainComp/ProductCard'
import styles from '../components/MainComp/Main.module.css'

const Varumarken = () => {
  const { slug } = useParams()
  return (
    <>
      <div className={styles.products}>
        <div>Varumärken</div>
        <section className={styles.trending_arrivals}>
          {tempProducts.filter(x => x.brandslug === slug).map((productData, i) => (
            <ProductCard pD={productData} key={i} />
          ))}
        </section>
      </div>
    </>
  )
}

export default Varumarken