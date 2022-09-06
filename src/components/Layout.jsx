import React from 'react'
import Footer from './FooterComp/Footer'
import Header from './HeaderComp/Header'

const Layout = ({ children }) => {
  return (
    <>
    <Header/>
    <main>{children}</main>
    <Footer/>
    </>
  )
}

export default Layout