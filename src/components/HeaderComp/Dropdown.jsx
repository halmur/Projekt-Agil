import React from 'react'
import styles from './Header.module.css'

function Dropdown({ submenus, dropdown}) {
  return (
    <ul className={`dropdown ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <li key={index} className={styles.menuItems}>
          <a href={submenu.url}>{submenu.title}</a>
        </li>
      ))}
    </ul>
  )
}

export default Dropdown