import React, {useState} from 'react'
import Dropdown from './Dropdown'
import styles from './Header.module.css'
import {Link} from 'react-router-dom'


function MenuItems({items}) {

    const [dropdown, setDropdown] = useState(false)
    const test = () => {
      setDropdown(false)

    }

  return (
    <li className={styles.menuItems}>
      {items.submenu ? (
        <>
          <button type="button" aria-haspopup="menu" aria-expanded={dropdown ? "true" : "false"} onClick={() => setDropdown((prev) => !prev)}  >
            {items.title}{' '}
          </button>
          <Dropdown submenus={items.submenu} dropdown={dropdown} setDropdown={setDropdown} />
        </>
      ) : (
        <Link to={items.url}>
        <div>{items.title}</div>
        </Link>
      )}
    </li>
  )
}

export default MenuItems