import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Akash Kumar Raj</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#projects" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#services" className="footer__link">Services</a>
                </li>
                <li>
                    <a href="#contact" className="footer__link">Contact</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.instagram.com/aakash22raj" className="footer__social-link" target='_blank'>
                    <i class="uil uil-instagram-alt"></i>
                </a>
                <a href="https://www.linkedin.com/in/aakash22raj" className="footer__social-link" target='_blank'>
                    <i class="uil uil-linkedin"></i>
                </a>
                <a href="https://www.github.com/aakash22raj" className="footer__social-link" target='_blank'>
                    <i class="uil uil-github"></i>
                </a>
                <a href="https://www.twitter.com/aakash22raj" className="footer__social-link" target='_blank'>
                    <i class="uil uil-twitter"></i>
                </a>
            </div>

            <span className="footer__copy">
                &#169; Theskycoder. All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer