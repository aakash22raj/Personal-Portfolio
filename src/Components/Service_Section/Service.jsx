import React, { useState } from 'react'
import "./service.css";

const Service = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="service section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I offer</span>

        <div className="services__container container grid">

            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">
                        Web <br/> Developer
                    </h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(1)}>
                    View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 1 ? "services__model active-model" : "services__model"}>
                    <div className="services__model-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__model-close"></i>

                        <h3 className="services__model-title">
                            Web Developer
                        </h3>
                        <p className="services__model-description">
                            I am working on web developer before 3 years. and I have gain lot experience.
                        </p>

                        <ul className="services__model-services grid">
                            <li className="services__model-service">
                                <i className="uil uil-check-circle services__model-icon"></i>
                                <p className="services__model-info">
                                    Front-end developer
                                </p>
                            </li>

                            <li className="services__model-service">
                                <i className="uil uil-check-circle services__model-icon"></i>
                                <p className="services__model-info">
                                    Back-end developer
                                </p>
                            </li>

                            <li className="services__model-service">
                                <i className="uil uil-check-circle services__model-icon"></i>
                                <p className="services__model-info">
                                    I create the MERN stack projects
                                </p>
                            </li>

                            <li className="services__model-service">
                                <i className="uil uil-check-circle services__model-icon"></i>
                                <p className="services__model-info">
                                    Develop the web products for companies
                                </p>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>





            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">
                        UX/UI <br/> Designer
                    </h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(2)}>
                    View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 2 ? "services__model active-model" : "services__model"}>
                    <div className="services__model-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__model-close"></i>

                        <h3 className="services__model-title">
                            UX/UI Designer
                        </h3>
                        <p className="services__model-description">
                            I am designing user frendaly interface for good experience.
                        </p>

                        <ul className="services__model-services grid">
                            <li className="services__model-service">
                                <i className="uil uil-check-circle services__model-icon"></i>
                                <p className="services__model-info">
                                    User frendaly interface
                                </p>
                            </li>

                            <li className="services__model-service">
                                <i className="uil uil-check-circle services__model-icon"></i>
                                <p className="services__model-info">
                                    With good animation
                                </p>
                            </li>

                            <li className="services__model-service">
                                <i className="uil uil-check-circle services__model-icon"></i>
                                <p className="services__model-info">
                                    I create UX element interaction
                                </p>
                            </li>

                            <li className="services__model-service">
                                <i className="uil uil-check-circle services__model-icon"></i>
                                <p className="services__model-info">
                                    Design and mockups of products for companies
                                </p>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>





            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">
                        Video <br/> Creation
                    </h3>
                </div>

                <span onClick={() => toggleTab(3)} className="services__button">
                    View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 3 ? "services__model active-model" : "services__model"}>
                    <div className="services__model-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__model-close"></i>

                        <h3 className="services__model-title">
                            Video Creation
                        </h3>
                        <p className="services__model-description">
                            I am creating videos(Reel) for the instagram and other social media account. 
                        </p>

                        <ul className="services__model-services grid">
                            <li className="services__model-service">
                                <i className="uil uil-check-circle services__model-icon"></i>
                                <p className="services__model-info">
                                    Video Editing
                                </p>
                            </li>

                            <li className="services__model-service">
                                <i className="uil uil-check-circle services__model-icon"></i>
                                <p className="services__model-info">
                                    Logo and Template Design
                                </p>
                            </li>

                            <li className="services__model-service">
                                <i className="uil uil-check-circle services__model-icon"></i>
                                <p className="services__model-info">
                                    Contant writing for video
                                </p>
                            </li>

                            <li className="services__model-service">
                                <i className="uil uil-check-circle services__model-icon"></i>
                                <p className="services__model-info">
                                    Contant based video creation
                                </p>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Service