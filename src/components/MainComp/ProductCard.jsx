import styles from './ProductCard.module.css'

const ProductCard = ({ pD }) => {
  return (
    <div className={styles.product_card}>
      <img className={styles.product_img} src={pD.image} alt={pD.category + ' image'} />

      <span className={styles.product_name}>{pD.name}</span>
      <span className={styles.product_brand}>{pD.brand}</span>
      <span className={styles.product_price}>{pD.price} kr</span>
    </div>
  )
}

export default ProductCard