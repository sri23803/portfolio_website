import React from 'react'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import About from './components/about/About'
const App = () => {
  return (
    <>
      <Header/>
      <Navbar/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App