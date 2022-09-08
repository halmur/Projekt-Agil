import { Link, useLocation, useParams } from 'react-router-dom';
import styles from './ProductCard.module.css'

const ProductCard = ({ pD }) => {
  const {pathname} = useLocation()
  // const parma = useParams()
  // console.log(parma);
  // console.log(pD);
  console.log(pathname);


  return (
    <div className={styles.product_card}>
      <img className={styles.product_img} src={pD.image} alt={pD.category + ' image'} />

      <span className={styles.product_name}>{pD.name}</span>
      <span className={styles.product_brand}>{pD.brand}</span>
      <span className={styles.product_price}>{pD.price} kr</span>
      
      <Link to={`${pathname}/${pD.id}`}>
        <div>view more</div>
      </Link>
    </div>
  )
}

export default ProductCard