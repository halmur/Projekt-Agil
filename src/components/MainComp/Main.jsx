import React from 'react'
import styles from './Main.module.css'
// import heroImg from "../media/img_forest.jpg"
// https://via.placeholder.com/1800x700.png?text=temp+hero+img

const Main = () => {
  const heroImg = 'https://via.placeholder.com/1800x700/999.png'
  const trendingArrivals = [
    {
      name: 'JJICHRIS JJORIGINAL AM 994',
      brand: 'Jack & Jones',
      category: 'Jeans',
      price: '499',
      image: 'https://via.placeholder.com/220xs300.png?text=product+image',
      size: ['size-1', 'size-2', 'size-3', 'size-4', 'size-5'],
      color: ['lightblue', 'black', 'grey', 'white', 'beige']
    },
    {
      name: 'MR530SG Shoe',
      brand: 'New Balance',
      category: 'Sneakers',
      price: '1099',
      image: 'https://via.placeholder.com/220xs300.png?text=product+image',
      size: ['size-1', 'size-2', 'size-3', 'size-4', 'size-5'],
      color: ['black', 'grey', 'white']
    },
    {
      name: 'PJS M Spectre Body Warmer',
      brand: 'Parajumper',
      category: 'Jackor',
      price: '3499',
      image: 'https://via.placeholder.com/220xs300.png?text=product+image',
      size: ['size-1', 'size-2', 'size-3', 'size-4', 'size-5'],
      color: ['black']
    },
    {
      name: 'PJS M Spectre Body Warmer',
      brand: 'Parajumper',
      category: 'Jackor',
      price: '3499',
      image: 'https://via.placeholder.com/220xs300.png?text=product+image',
      size: ['size-1', 'size-2', 'size-3', 'size-4', 'size-5'],
      color: ['black']
    },
    {
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
        <div className={styles.hero}>
          <img className={styles.hero_img} src={heroImg} alt="hero image" />

          <div className={styles.hero_text}>
            <div className={styles.text_left}>
              <span>Get ready for all</span>
              <button>Shop the styles</button>
            </div>

            <div className={styles.text_right}>
              <span>Make a</span>
              <span>statement of</span>
              <span>yourself</span>
            </div>
          </div>
        </div>

        <div id={styles.main}>
          <section className={styles.trending_arrivals}>
            <h1>nyheter som trendar hösten 2022</h1>
            
            {trendingArrivals.map((item, i) => (
              <div className={styles.product_card} key={i}>
                <img className={styles.product_img} src={item.image} alt={item.category + ' image'} />
                <span className={styles.product_name}>{item.name}</span>
                <span className={styles.product_brand}>{item.brand}</span>
                <span className={styles.product_price}>{item.price} kr</span>
              </div>
            ))}
          </section>

          <section className={styles.tips}>
            <h1>Tips</h1>
            <p>some fashion tips for you</p>
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