import React from 'react'
import Resume from '../../assets_proj/resume.pdf'

const CV = () => {
  return (
    <div className="cv">
        <a href={Resume} className='btn' target='blank'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Contact</a>
    </div>
  )
}

export default CV