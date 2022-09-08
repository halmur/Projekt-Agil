import React from 'react'
import styles from './Main.module.css'
import HeroSection from './HeroSection'
import ProductCard from './ProductCard'
import ImgSlider from './ImgSlider'

const Main = () => {
  const seasonalTrends = [
    {
      id: 1,
      name: 'JJICHRIS JJORIGINAL AM 994',
      brand: 'Jack & Jones',
      category: 'Jeans',
      price: '499',
      image: 'https://via.placeholder.com/220xs300.png?text=product+image',
      size: ['size-1', 'size-2', 'size-3', 'size-4', 'size-5'],
      color: ['lightblue', 'black', 'grey', 'white', 'beige']
    },
    {
      id: 2,
      name: 'MR530SG Shoe',
      brand: 'New Balance',
      category: 'Sneakers',
      price: '1099',
      image: 'https://via.placeholder.com/220xs300.png?text=product+image',
      size: ['size-1', 'size-2', 'size-3', 'size-4', 'size-5'],
      color: ['black', 'grey', 'white']
    },
    {
      id: 3,
      name: 'PJS M Spectre Body Warmer',
      brand: 'Parajumper',
      category: 'Jackor',
      price: '3499',
      image: 'https://via.placeholder.com/220xs300.png?text=product+image',
      size: ['size-1', 'size-2', 'size-3', 'size-4', 'size-5'],
      color: ['black']
    },
    {
      id: 4,
      name: 'PJS M Spectre Body Warmer',
      brand: 'Parajumper',
      category: 'Jackor',
      price: '3499',
      image: 'https://via.placeholder.com/220xs300.png?text=product+image',
      size: ['size-1', 'size-2', 'size-3', 'size-4', 'size-5'],
      color: ['black']
    },
    {
      id: 5,
      name: 'PJS M Spectre Body Warmersdf asdfsdf ',
      brand: 'Parajumper',
      category: 'Jackor',
      price: '3499',
      image: 'https://via.placeholder.com/220xs300.png?text=product+image',
      size: ['size-1', 'size-2', 'size-3', 'size-4', 'size-5'],
      color: ['black']
    }
  ]


  return (      
    <> 
      <main className={styles.main}>
        <HeroSection />
        
        <ImgSlider />
        
        <div className={styles.content}>
          <section className={styles.trending_arrivals}>
            <h1>5 Hösttrender att smygstarta med</h1>

            {seasonalTrends.map((productData, i) => (
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