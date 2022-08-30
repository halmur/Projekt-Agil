import React from 'react'
import styles from './Main.module.css'
import heroImg from "../media/img_forest.jpg"
// https://via.placeholder.com/1800x700.png?text=temp+hero+img

const Main = () => {
  return (      
    <> 
      <main className={styles.main}>
        <div className={styles.top}>
          <p>72 Hour FLASH SALE - 70% OFF Projekt Agil (Scrum) Webbutveckling i JavaScript </p>
        </div>

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
          <p> Projekt Agil (Scrum) Webbutveckling i JavaScript </p>
          <p> Projekt Agil (Scrum) Webbutveckling i JavaScript </p>
          <p> Projekt Agil (Scrum) Webbutveckling i JavaScript </p>
          <p> Projekt Agil (Scrum) Webbutveckling i JavaScript </p>
          <p> Projekt Agil (Scrum) Webbutveckling i JavaScript </p>
          <p> Projekt Agil (Scrum) Webbutveckling i JavaScript </p>
          <p> Projekt Agil (Scrum) Webbutveckling i JavaScript </p>
          <p> Projekt Agil (Scrum) Webbutveckling i JavaScript </p>
          <p> Projekt Agil (Scrum) Webbutveckling i JavaScript </p>
          <p> Projekt Agil (Scrum) Webbutveckling i JavaScript </p>
        </div>
      </main>
    </>
  )
}

export default Main