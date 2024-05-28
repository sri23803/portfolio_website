import React, { useState } from 'react'
import './navbar.css'
import { HiMiniHome } from "react-icons/hi2";
import { IoPersonSharp } from "react-icons/io5";
import { FaBook } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
import { PiProjectorScreenChartFill } from "react-icons/pi";


const Navbar = () => {
  const[ activeNav, setactiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setactiveNav('#')} className={activeNav==='#' ? 'active' : ''}><HiMiniHome/></a>
      <a href="#about" onClick={() => setactiveNav('about')} className={activeNav==='about' ? 'active' : ''}><IoPersonSharp/></a>
      <a href="#experience"onClick={() => setactiveNav('experience')} className={activeNav==='experience' ? 'active' : ''}><FaBook/></a>
      <a href="#projects"onClick={() => setactiveNav('projects')} className={activeNav==='projects' ? 'active' : ''}><PiProjectorScreenChartFill/></a>
      <a href="#contact"onClick={() => setactiveNav('contact')} className={activeNav==='contact' ? 'active' : ''}><IoIosContact/></a>
    </nav>
  )
}

export default Navbar