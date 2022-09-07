import styles from './ImgSlider.module.css'

const Slider = ({sliderData}) => {
  // ''

  return (
    <div className={styles.slider_content}>
      {sliderData.map((sCd, i) => {
        {return i > !2 &&
          <div key={i} className={styles.product_cell}>
            <img className={styles.product_img_url} src={sCd.productImgUrl} alt="news | product-image" />
            <span className={styles.product_title}>{sCd.productTitle}</span>
            <span className={styles.product_brand}>{sCd.productData.brand}</span>
            <span className={styles.product_likes}>{sCd.productData.likes} *heart*</span>
          </div>
        }
      })}
    </div>
  )
}

export default Slider