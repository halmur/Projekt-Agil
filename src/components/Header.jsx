import React from 'react'
import logo from '../media/coolfashion.PNG';
import Navbar from './Navbar';

const Header = () => {
    return ( 
    <> 
        <header className = "App-header" >
            <div className='nav-area'>
        {/* <img src={logo} className="App-logo" alt="logo"/> */}
        <a href="/" className="logo">
          CoolFashion
        </a>
        <Navbar/>
        </div>
        </header>
    </>
    )
}

export default Header