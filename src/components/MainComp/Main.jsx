import React from 'react'
import styles from './Main.module.css'
import HeroSection from './HeroSection'
import ProductCard from './ProductCard'
import ImgSlider from './ImgSlider'
import { tempProducts } from '../../tempProducts'


const Main = () => {
  const slicedArray = tempProducts.slice(0, 5)

  return (
    <>
      <main className={styles.main}>
        <HeroSection />

        <ImgSlider />

        <div className={styles.content}>
          <section className={styles.trending_arrivals}>
            <h1>5 Hösttrender att smygstarta med</h1>

            {slicedArray.map((productData, i) => (
              <ProductCard pD={productData} key={i} />
            ))}
          </section>

          <section className={styles.tips}>
            <h1>Tips</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum sunt iusto nobis eum ex obcaecati impedit laudantium. Id ea nesciunt incidunt totam pariatur ducimus veritatis, enim libero, deleniti possimus adipisci non placeat eveniet quaerat corrupti architecto repudiandae beatae eius assumenda sapiente soluta eum ullam. Dolorum pariatur ea a in magnam.</p>
          </section>

          <section className={styles.outlet}>
            <h1>Outlet</h1>
            <p>some outlet items</p>
          </section>
        </div>
      </main>
    </>
  )
}

export default Main