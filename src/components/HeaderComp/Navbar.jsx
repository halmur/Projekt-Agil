import React from 'react'
import { menuItems } from '../../menuItems'
import MenuItems from './MenuItems';
import styles from './Header.module.css'

function Navbar() {
  return (
    <nav>
      <ul className={styles.menus}>
        {menuItems.map((menu, i) => {
          return <MenuItems items={menu} key={i} />;
        })}
      </ul>
    </nav>
  )
}

export default Navbar