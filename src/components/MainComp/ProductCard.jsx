import styles from './ProductCard.module.css'
import { Link } from 'react-router-dom'

const ProductCard = ({ pD }) => {
  return (
    <Link to={`/category/`+pD.categoryslug+`/product/`+pD.id} className={styles.link} state={{product: pD}}>
    <div className={styles.product_card}>
      <img className={styles.product_img} src={pD.image} alt={pD.category + ' image'} />

      <span className={styles.product_name}>{pD.name}</span>
      <span className={styles.product_brand}>{pD.brand}</span>
      <span className={styles.product_price}>{pD.price} kr</span>
    </div>
    </Link>
  )
}

export default ProductCard