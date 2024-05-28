import React from 'react'
import './footer.css'
import { FaLinkedin } from "react-icons/fa6";
import { ImGithub } from "react-icons/im";
import { SiGeeksforgeeks } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/sriramd2383" className='footer__logo' target='_blank'><FaLinkedin/></a>
        <a href="https://github.com/sri23803" className='footer__logo' target='_blank'><ImGithub/></a>
        <a href="https://auth.geeksforgeeks.org/user/sriram2383" className='footer__logo' target='_blank'><SiGeeksforgeeks/></a>
      </div>
    </footer>
  )
}

export default Footer