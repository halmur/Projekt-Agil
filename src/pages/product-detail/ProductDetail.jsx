import { useLocation, useParams } from "react-router-dom"
import { tempProducts } from "../../tempProducts"

const ProductDetail = () => {
  const {pathname} = useLocation()
  const { id } = useParams()
  const product = tempProducts.find(product => product.id == id)

  return (
    <>
      <p>{pathname} gå tillbaka kanske</p>
      <br />
      <br />
      <h1>{product.brand}</h1>
      <h1>{product.price} öre</h1>
    </>
  )
}

export default ProductDetail