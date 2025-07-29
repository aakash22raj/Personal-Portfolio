import React, { useState, useEffect } from 'react';
import "./navbar.css";

const Navbar = () => {


  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  // Load initial theme from localStorage or system preference
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [darkTheme, setDarkTheme] = useState(getInitialTheme);

  // Apply theme and save to localStorage
  useEffect(() => {
    document.body.classList.toggle("dark-theme", darkTheme);
    localStorage.setItem("theme", darkTheme ? "dark" : "light");
  }, [darkTheme]);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY >= 80) header.classList.add("scroll-header");
      else header.classList.remove("scroll-header");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <header className='header'>
      <nav className='nav container'>
        <a href="/" className="nav__logo">Akash Kumar Raj</a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            {["home", "about", "skills", "services", "projects", "contact"].map((section) => (
              <li className="nav__item" key={section}>
                <a
                  href={`#${section}`}
                  onClick={() => setActiveNav(`#${section}`)}
                  className={activeNav === `#${section}` ? "nav__link active-link" : "nav__link"}
                >
                  <i className={`uil uil-${section === "home" ? "house-user" :
                    section === "about" ? "user" :
                    section === "skills" ? "file-alt" :
                    section === "services" ? "briefcase-alt" :
                    section === "projects" ? "scenery" : "message"} nav__icon`}></i>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>

          <i className="uil uil-multiply nav__close" onClick={() => showMenu(!Toggle)}></i>
        </div>

        {/* Theme toggle button */}
        
        <div className="theme-toggle" onClick={() => setDarkTheme(!darkTheme)}>
          <i className={darkTheme ? "uil uil-sun" : "uil uil-moon"}></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
