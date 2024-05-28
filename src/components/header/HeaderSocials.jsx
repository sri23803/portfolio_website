import React from 'react'
import './header.css'
import { FaLinkedin } from "react-icons/fa6";
import { ImGithub } from "react-icons/im";
import { SiGeeksforgeeks } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/sriramd2383" target='blank'><FaLinkedin/></a>
        <a href="https://github.com/sri23803" target='blank'><ImGithub/></a>
        <a href="https://auth.geeksforgeeks.org/user/sriram2383" target='blank'><SiGeeksforgeeks/></a>
    </div>
  )
}

export default HeaderSocials