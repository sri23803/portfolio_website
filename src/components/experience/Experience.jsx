import React from 'react'
import './experience.css'
import { PiSealCheckFill } from "react-icons/pi";

const Experience = () => {
  return (
    <section id='experience'>
      <section className="experience">
        <h5>The Skills I Have</h5>
        <h2>My Experience</h2>

        <div className="container experience__container">
          <div className="experience__frontend">
            <h2>Frontend Development</h2>
            <div className="experience__content">
              <article className="experience__details">
                <PiSealCheckFill className='experience__detail-icon'/>
                <div>
                  <h4>Java Script</h4>
                  <small>Beginner</small>
                </div>
              </article>
              <article className="experience__details">
                <PiSealCheckFill className='experience__detail-icon'/>
                <div>
                  <h4>HTML</h4>
                  <small>Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <PiSealCheckFill className='experience__detail-icon'/>
                <div>
                  <h4>CSS</h4>
                  <small>Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <PiSealCheckFill className='experience__detail-icon'/>
                <div>
                  <h4>React</h4>
                  <small>Intermediate</small>
                </div>
              </article>
            </div>
          </div>
          <div className="experience__backend">
            <h2>Backend Development</h2>
            <div className="experience__content">
              <article className="experience__details">
                  <PiSealCheckFill className='experience__detail-icon'/>
                  <div>
                    <h4>Java</h4>
                    <small>Intermediate</small>
                  </div>
                </article>
                <article className="experience__details">
                  <PiSealCheckFill className='experience__detail-icon'/>
                  <div>
                    <h4>Python</h4>
                    <small>Beginner</small>
                  </div>
                </article>
                <article className="experience__details">
                  <PiSealCheckFill className='experience__detail-icon'/>
                  <div>
                    <h4>Node JS</h4>
                    <small>Beginner</small>
                  </div>
                </article>
                
                <article className="experience__details">
                  <PiSealCheckFill className='experience__detail-icon'/>
                  <div>
                    <h4>MongoDB</h4>
                    <small>Beginner</small>
                  </div>
                </article>
                <article className="experience__details">
                  <PiSealCheckFill className='experience__detail-icon'/>
                  <div>
                    <h4>C programming</h4>
                    <small>Beginner</small>
                  </div>
                </article>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Experience