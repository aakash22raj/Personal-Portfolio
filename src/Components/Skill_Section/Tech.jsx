import React from 'react';
import {
  SiC,
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiFigma,
  SiCanva,
  SiNextdotjs,
} from 'react-icons/si';



const techs = [
  { icon: <SiC />, label: 'C language', color: '#A8B9CC' },
  { icon: <SiCplusplus />, label: 'C++', color: '#00599C' },
  { icon: <SiPython />, label: 'Python', color: '#3776AB' },
  { icon: <SiJavascript />, label: 'JavaScript', color: '#F7DF1E' },
  { icon: <SiHtml5 />, label: 'HTML', color: '#E34F26' },
  { icon: <SiCss3 />, label: 'CSS', color: '#1572B6' },
  { icon: <SiTailwindcss />, label: 'Tailwind CSS', color: '#38BDF8' },
  { icon: <SiReact />, label: 'ReactJS', color: '#61DAFB' },
  { icon: <SiNextdotjs />, label: 'Next.js', color: '#000000' },
  { icon: <SiNodedotjs />, label: 'NodeJS', color: '#339933' },
  { icon: <SiExpress />, label: 'ExpressJS', color: '#000000' },
  { icon: <SiMongodb />, label: 'MongoDB', color: '#47A248' },
  { icon: <SiGit />, label: 'Git', color: '#F05032' },
  { icon: <SiGithub />, label: 'GitHub', color: '#181717' },
  { icon: <SiFigma />, label: 'Figma', color: '#F24E1E' },
  { icon: <SiCanva />, label: 'Canva', color: '#00C4CC' },
];



const Tech = () => (
  <div className="tech__info grid">
    {techs.map((tech, index) => (
      <div className="tech__box group" key={index} style={{ '--hover-color': tech.color }}>
        <div className="tech__icon group-hover:scale-110"
            style={{
                transition: '0.3s ease',
                color: tech.color,
            }}
        >
          {React.cloneElement(tech.icon, {
            className: 'icon',
            style: {
                color: tech.color,
                transition: 'color 0.3s ease',
            },
          })}
        </div>
        <h3 className="about__title">{tech.label}</h3>
      </div>
    ))}
  </div>
);

export default Tech;
