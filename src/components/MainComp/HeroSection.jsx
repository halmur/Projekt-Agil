import styles from './HeroSection.module.css'
// import heroImg from "../media/img_forest.jpg"
// https://via.placeholder.com/1800x700.png?text=temp+hero+img

const HeroSection = () => {
  const heroImg = 'https://via.placeholder.com/1800x700/999.png'
  //

  return (
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
  )
}

export default HeroSection