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
import { useNavigate } from 'react-router-dom';





const Projects = () => {

    const navigate = useNavigate();
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
            {Data.map(({id, image, title, description}) => {
                return (
                    <SwiperSlide className="projects__card" key={id}>
                        <img src={image[0]} alt="" className="projects__img" />

                        <h3 className="projects__name">{title}</h3>
                        <p className="projects__description">{description}</p>
                        
                        <div 
                            className="projects__button" 
                            onClick={() => navigate(`/project-details/${id}`)}
                        >
                            View More 
                            <i className="uil uil-arrow-right projects__button-icon"></i>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    </section>
  )
}

export default Projects