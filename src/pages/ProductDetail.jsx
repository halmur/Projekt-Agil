import React from 'react'
import styles from './ProductDetail.module.css'
import { tempProducts } from '../tempProducts'
import { useLocation, useParams } from 'react-router-dom'
import { sliderContentData } from '../components/MainComp/imgSliderData'

const Product = () => {
  const location = useLocation()
  const {id} = useParams()

  let productBack
  const findProduct = arrayToSearch => (
    productBack = arrayToSearch.find(x => x.id === +id)
  )
  findProduct(location.state && location.state.newArticle ? sliderContentData : tempProducts)

  const product = location.state ? location?.state?.product : productBack

  console.log(product);
  return (
    <>
    {product?.productData ?
      <section className={styles.new_product_container}>
        <div className={styles.new_product}>
          <h1>New Product Arrival</h1>
          <img src={product.productImgUrl}></img>
          
          <div className={styles.new_product_info}>
            <h4>{product.productData.name}</h4>
            <span>
              Brand: <span className={styles.new_product_brand}>{product.productData.brand}</span>
            </span>
            <span>Price: {product.productData.price}</span>
            <span>Loved many many times: {product.productData.likes}</span>
          </div>

          <button>Buy</button>
        </div>
      </section>
    :
      <section className={styles.product_container}>
        <div className={styles.product}>
          <h1>Product</h1>
          <img src={product.image}></img>

          <div className={styles.product_info}>
            <h4>{product.name}</h4>
            <span>
              Brand: <span className={styles.product_brand}>{product.brand}</span>
            </span>
            <span>Price: {product.price}</span>
          </div>

          <button>Buy</button>
        </div>
      </section>
    }
    </>
  )
}

export default Product