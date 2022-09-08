import React from 'react'
import styles from '../components/MainComp/Main.module.css'
import { tempProducts } from '../tempProducts'
import { useLocation, useParams } from 'react-router-dom'

const Product = () => {
    const location = useLocation()


    const {id} = useParams()

    const productBack = tempProducts.find(x => x.id === +id)

    const product = location.state ? location?.state?.product : productBack

    console.log(product);

  return (
    <>
    <div className={styles.products}>
        <p>Product</p>
        {/* <img src={product.image}></img> */}
    </div>
    </>
  )
}

export default Product