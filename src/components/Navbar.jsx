import React from 'react'
import {menuItems} from '../menuItems'
import MenuItems from './MenuItems';

function Navbar() {
  return (
    <nav>
        <ul className='menus'>
            {menuItems.map((menu, i) => {
                // return (
                // <li className='menu-items' key={i}>
                //     <a href={menu.url}>{menu.title}</a>
                // </li>
                // );
                return <MenuItems items={menu} key={i} />;
            })}
        </ul>
    </nav>
  )
}

export default Navbar