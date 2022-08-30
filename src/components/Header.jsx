import React from 'react'
import logo from '../media/logo.svg'
import logo2 from '../media/logo_w_space.svg'
import Navbar from './Navbar';

const Header = () => {
    return ( 
    <> 
        <header className = "App-header" >
            <div className='nav-area'>
        <img src={logo2} className="App-logo" alt="logo"/>
        <Navbar/>
        </div>
        </header>
    </>
    )
}

export default Header