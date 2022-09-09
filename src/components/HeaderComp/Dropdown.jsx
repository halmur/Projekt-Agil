import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'

function Dropdown({ submenus, dropdown, setDropdown}) {
  return (
    <ul className={`dropdown ${dropdown ? "show" : ""}`} onMouseLeave={() => setDropdown(false)}>
      {submenus.map((submenu, index) => (
        <li key={index} className={styles.menuItems}>
          <Link to={submenu.url}>
          <div>{submenu.title}</div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Dropdown