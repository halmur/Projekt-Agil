import styles from './ImgSlider.module.css'
import {sliderContentData} from './imgSliderData.js'
import Slider from './Slider';

const ImgSlider = () => {
  return (
    <section id={styles.slider_section}>
      <h1 className={styles.slider_title}>nyheter just nu!</h1>
      <p className={styles.slider_greetings}>get ready and get in, new arivals just landed</p>

      <Slider sliderData={sliderContentData} />
    </section>
  )
}

export default ImgSlider