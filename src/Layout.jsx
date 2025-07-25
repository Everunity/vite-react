import React from 'react'
import Header from "./Components/Header/Header.jsx"
import Footer from './Components/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './ScrollToTop.jsx'
const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <ScrollToTop />
    <Footer/>
    </>
  )
}

export default Layout