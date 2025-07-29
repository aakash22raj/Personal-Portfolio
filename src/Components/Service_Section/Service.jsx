import React, { useState } from 'react'
import "./service.css";

const Service = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }


    const services = [
        {
            id: 1,
            icon: 'uil uil-web-grid',
            color: '#4158d0',
            title: 'Web Developer',
            description: 'I am working on web developer before 3 years. and I have gain lot experience.',
            points: [
                'Front-end developer',
                'Back-end developer',
                'I create the MERN stack projects',
                'Develop the web products for companies'
            ]
        },
        {
            id: 2,
            icon: 'uil uil-arrow',
            color: '#c850c0',
            title: 'UX/UI Designer',
            description: 'I am designing user friendly interface for good experience.',
            points: [
                'User friendly interface',
                'With good animation',
                'I create UX element interaction',
                'Design and mockups of products for companies'
            ]
        },
        {
            id: 3,
            icon: 'uil uil-edit',
            color: '#ffcc70',
            title: 'Video Creation',
            description: 'I am creating videos(Reel) for the instagram and other social media account.',
            points: [
                'Video Editing',
                'Logo and Template Design',
                'Content writing for video',
                'Content based video creation'
            ]
        }
    ];


  return (
    <section className="service section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I offer</span>

        <div className="services__container container grid">

            {services.map((service) => (
                <div className="services__content" key={service.id}>
                    <div>
                        <i
                            className={`${service.icon} services__icon`}
                            // style={{ color: service.color }}
                            style={{
                                color: service.color,
                                textShadow: `0 0 10px ${service.color}, 0 0 20px ${service.color}`
                            }}
                        ></i>
                        <h3 className="services__title">
                            {service.title.split(' ')[0]} <br/> {service.title.split(' ')[1]}
                        </h3>
                    </div>
    
                    <span className="services__button" onClick={() => toggleTab(service.id)} style={{ color: service.color }}>
                        View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
    

                    {/* Toggle section */}
                    <div className={toggleState === service.id ? "services__model active-model" : "services__model"}>
                        <div className="services__model-content">
                            
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__model-close"></i>
    
                            <h3 className="services__model-title">
                                {service.title}
                            </h3>
                            <p className="services__model-description">
                                {service.description}
                            </p>
    
                            <ul className="services__model-services grid">
                                {service.points.map((point, index) => (
                                    <li className="services__model-service" key={index}>
                                        <i 
                                            className="uil uil-check-circle services__model-icon"
                                            style={{ color: service.color }}
                                        ></i>
                                        <p className="services__model-info">
                                            {point}
                                        </p>
                                    </li>
                                ))}
                            </ul>
    
                        </div>
                    </div>
                </div>
            ))}

        </div>
    </section>
  )
}

export default Service