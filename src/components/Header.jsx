import React from 'react'
import logo from '../media/logo.svg'
import logo2 from '../media/logo_w_space.svg'
import Navbar from './Navbar';
import styles from './Header.module.css'

const Header = () => {
    return ( 
    <> 
        <header className={styles.header}>
            <div className={styles.navarea}>
        <img src={logo2} className={styles.logo} alt="logo"/>
        <Navbar/>
        </div>
        </header>
    </>
    )
}

export default Header