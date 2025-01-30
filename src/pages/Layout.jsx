import React from 'react'
import About from '../components/About'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Home from '../components/Home'
import Clients from '../components/Clients'

const Layout = () => {
  return (
    <>
        <Home />
        <About />
        <Services />
        <Projects />
        {/* <Clients /> */}
        <Contact />
    </>
  )
}

export default Layout