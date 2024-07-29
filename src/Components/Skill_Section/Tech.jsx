import React from 'react'
import c_lang from "../../assets/c_lang.png";

const Tech = () => {
  return (
    <div className="tech__info grid">

        <div className="tech__box">
            <img src={c_lang} alt="" className='tech__img'/>
            <h3 className="about__title">C language</h3>
        </div>

        <div className="tech__box">
            <i className='bx bxl-c-plus-plus tech__lang'></i>
            <h3 className="about__title">C++</h3>
        </div>

        <div className="tech__box">
            <i class='bx bxl-python tech__lang'></i>
            <h3 className="about__title">Python</h3>
        </div>

        <div className="tech__box">
            <i class='bx bxl-javascript tech__lang'></i>
            <h3 className="about__title">JavaScript</h3>
        </div>

        <div className="tech__box">
            <i class='bx bxl-html5 tech__lang'></i>
            <h3 className="about__title">HTML</h3>
        </div>

        <div className="tech__box">
            <i class='bx bxl-css3 tech__lang'></i>
            <h3 className="about__title">CSS</h3>
        </div>

        <div className="tech__box">
            <i class='bx bxl-tailwind-css tech__icon'></i>
            <h3 className="about__title">Tailwind-css</h3>
        </div>

        <div className="tech__box">
            <i class='bx bxl-react tech__icon'></i>
            <h3 className="about__title">ReactJS</h3>
        </div>

        <div className="tech__box">
            <i class='bx bxl-nodejs tech__icon'></i>
            <h3 className="about__title">NodeJS</h3>
        </div>

        <div className="tech__box">
            <i class='bx bxl-edge tech__icon'></i>
            <h3 className="about__title">ExpressJS</h3>
        </div>

        <div className="tech__box">
            <i class='bx bxl-mongodb tech__icon'></i>
            <h3 className="about__title">MongoDB</h3>
        </div>

        <div className="tech__box">
            <i class='bx bxl-git tech__icon'></i>
            <h3 className="about__title">Git</h3>
        </div>

        <div className="tech__box">
            <i class='bx bxl-github tech__icon'></i>
            <h3 className="about__title">GotHub</h3>
        </div>

        <div className="tech__box">
            <i class='bx bxl-figma tech__icon'></i>
            <h3 className="about__title">Figma</h3>
        </div>

        <div className="tech__box">
            <i class='bx bxs-copyright tech__icon'></i>
            <h3 className="about__title">Canva</h3>
        </div>

    </div>
  )
}

export default Tech