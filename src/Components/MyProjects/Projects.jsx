import React from 'react'
import "./projects.css";
import { Data } from './Data';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Projects = () => {
    console.log(Data);
  return (
    <section className="projects container section" id='projects'>
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">My all major projects</span>

        <Swiper className="projects__container"
            loop={true}
            grabCursor={true}
            spaceBetween={20}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                576: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            }}
            modules={[Pagination]}
        >
            {Data.map(({id, image, title, description, demo, codelink}) => {
                return (
                    <SwiperSlide className="projects__card" key={id}>
                        <img 
                            src={image} alt="" 
                            className="projects__img" 
                        />

                        <h3 className="projects__name">{title}</h3>
                        <p className="projects__description">{description}</p>
                        
                        <div className="projects__button">
                            <button className="projects__live"><a href={demo}>Live</a></button>
                            <button className="projects__git"><a href={codelink}>Code</a></button>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    </section>
  )
}

export default Projects