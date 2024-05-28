import React from 'react'
import './header.css'
import ME from '../../assets_proj/mepng.png'
import CV from './CV'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <section className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Sriram</h1>
            <CV/>

            <div className="me">
                <img src={ME} alt="me" />
            </div> 
            <div className="scroll__down">Scroll Down</div>
            <HeaderSocials/>
        </section>
    </header>
  )
}

export default Header