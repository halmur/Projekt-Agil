import React from 'react'
import { useParams } from 'react-router-dom'
import { tempProducts } from '../tempProducts'

const Products = () => {
    const {slug} = useParams()
    console.log(slug);
    console.log(tempProducts.filter(x => x.category === slug))

  return (
    <>

    <div>{slug}</div>

    </>
  )
}

export default Products