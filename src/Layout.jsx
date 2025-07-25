import React from 'react'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    {/* The Outlet component will render the matched child route */}
    {/* This allows for nested routing and dynamic content rendering */}
    <Footer/>
    </>
  )
}

export default Layout