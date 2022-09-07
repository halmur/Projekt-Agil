import React from 'react'
import styles from './HeaderIcons.module.css';
import { AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai'
const HeaderIcons = () => {
  return (
    <div className={styles.IconContainer}>
      <AiFillHeart className={styles.iconhearth} />
      <AiOutlineShoppingCart className={styles.icon} />
    </div>
  )
}

export default HeaderIcons