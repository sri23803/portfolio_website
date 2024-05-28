import React from 'react'
import './about.css'
import { FaMedal } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import { LuProjector } from "react-icons/lu";
import ME from '../../assets_proj/about_img.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="My_Photo" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaBook className='about__icon'/>
              <h2>Education</h2>
              <div className="about__small">
                <small>B.E Electronic and Communication Engineering</small>
                <small>R.M.D Engineering College</small>
              </div>
            </article>

            <article className="about__card">
              <LuProjector className='about__icon'/>
              <h2>Projects</h2>
              <div className="about__small">
                <small>2 projects in Hardware</small>
                <small>3 projects in Software</small>
              </div>
            </article>

            <article className="about__card">
              <FaMedal className='about__icon'/>
              <h2>Achievements</h2>
              <div className="about__small">
                <small> Best paper Award in ICIIET Conference</small>
                <small>Solved 350+ problems in GeeksForGeeks</small>
              </div>
            </article>
          </div>
          <p>
            I am an enthusiastic Electronic and Communication Engineering student with a strong foundation in both core engineering concepts and programming skills.With over 5000 lines of code in JAVA and C programming under my belt, I am well-versed in creating efficient and robust solutions.Excellent communication skills and a natural leader. I have actively participated in group projects, leading teams to success through effective collaboration and shared goals.

          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About