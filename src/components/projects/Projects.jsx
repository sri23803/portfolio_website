import React from 'react'
import './projects.css'
import {Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import IMG1 from '../../assets_proj/portfolio1.jpg'
import PL from '../../assets_proj/POTATO_LEAF.jpg'
import TDL from '../../assets_proj/portfolio3.jpg'
import 'swiper/css';
import 'swiper/css/pagination';

const Projects = () => {
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <Swiper className="container project__container"
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="project__item">
        <div className="project__item-image">
            <img src={PL} alt="project image" />
          </div>
          <h3>Tomato Leaf Disease Prediction</h3>
          <a href="https://github.com/sri23803/Tomato_Leaf_Disease_Prediction" className='btn btn-primary' target='_blank'>Github</a>
        </SwiperSlide>

        <SwiperSlide className="project__item">
          <div className="project__item-image">
            <img src={IMG1} alt="project image" />
          </div>
          <h3>Chennai House Price Prediction Using ML</h3>
          <a href="https://github.com/sri23803/Chennai-house-price-prediction" className='btn btn-primary' target='_blank'>Github</a>
        </SwiperSlide>

        <SwiperSlide className="project__item">
        <div className="project__item-image">
            <img src={TDL} alt="project image" />
          </div>
          <h3>To Do List </h3>
          <a href="https://github.com/sri23803/To_do_list-react" className='btn btn-primary' target='_blank'>Github</a>
        </SwiperSlide>
      </Swiper>

      <div className="swipe">Swipe Left</div>
  </section>
  )
}

export default Projects