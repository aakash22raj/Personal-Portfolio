import React from 'react'
import Home from '../../Components/Hero_Section/Home'
import About from '../../Components/About_Section/About'
import Skill from '../../Components/Skill_Section/Skill'
import Service from '../../Components/Service_Section/Service'
import Projects from '../../Components/MyProjects/Projects'
import Contact from '../../Components/Contact_Section/Contact'


const Landing = () => {
  return (
    <div>
        <Home />
        <About />
        <Skill />
        <Service />
        <Projects />
        <Contact />
    </div>
  )
}

export default Landing