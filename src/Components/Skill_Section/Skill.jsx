import React from 'react';
import "./skill.css";
import Tech from './Tech';

const Skill = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>

        <div className="skills__container container grid">
            <Tech />
        </div>
    </section>
  );
};

export default Skill