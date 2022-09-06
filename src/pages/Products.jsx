import React from 'react'
import { useParams } from 'react-router-dom'
import { tempProducts } from '../tempProducts'
import ProductCard from '../components/MainComp/ProductCard'
import styles from '../components/MainComp/Main.module.css'

const Products = () => {
    const {slug} = useParams()
    console.log(slug);

    // const categorytitle = tempProducts.find(x => x.category === slug).categoryName

  return (
    <>

    {/* <div>{categorytitle}</div> */}
    <section className={styles.trending_arrivals}>
    {tempProducts.filter(x => x.categoryslug === slug).map((productData, i) => (
        <ProductCard pD={productData} key={i}/>
    ))}
    </section>
    </>
  )
}

export default Products