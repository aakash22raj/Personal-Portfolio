import React from 'react'
import "./home.css";
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';
import ParticlesComponent from '../Particles/particles';

const Home = () => {
  return (  
    <div className='home__bg'>
      <ParticlesComponent  id="partiicles"/>
      <section className="home section" id="home">
          <div className="home__container container grid">
              <div className="home__contant grid">
                  <Social />
                  <div className="home__img"></div>
                  <Data />
              </div>
              <ScrollDown />
          </div>
      </section>
    </div>
  )
}

export default Home