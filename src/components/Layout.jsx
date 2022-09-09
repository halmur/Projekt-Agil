import React from 'react'
import Footer from './FooterComp/Footer'
import Header from './HeaderComp/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout