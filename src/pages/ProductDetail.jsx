import React from 'react'
import styles from '../components/MainComp/Main.module.css'
import { tempProducts } from '../tempProducts'
import { useLocation, useParams } from 'react-router-dom'
import style from "./ProductDetail.module.css"


const Product = () => {
  const location = useLocation()
  const {id} = useParams()

const productBack = tempProducts.find(x => x.id === +id)

const product = location.state ? location?.state?.product : productBack

console.log(product);


const handleChange = event => {
  console.log(event.target.value);
};


return (
<>
 <form >
   <div className={styles.products}>
     <div className={style.product_card}>
       <img className={style.product_img} src={product.image} alt={product.category + ' image' } />
  
       <div className={style.info}>
       <span className={style.product_name}>{product.name}</span>
       <span className={style.product_brand}>{product.brand}</span>
       <span className={style.product_price}>{product.price} kr</span>

      <select onChange={handleChange} name="size" id="size">
      {product.size.map((size) => {
        return (<option key={size} value={size}>{size}</option>)
       })} 
      </select>

      <select onChange={handleChange} name="color" id="color">
       {product.color.map((color) => {
        return (<option key={color} value={color}>{color}</option>)
       })} 
      </select>
         <button type='submit' className={style.goback}>Lägg till</button>
       </div>
     </div>
   </div>
 </form>
</>
);
}

export default Product;
