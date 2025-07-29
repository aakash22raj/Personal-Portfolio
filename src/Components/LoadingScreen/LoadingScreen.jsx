import React, { useState, useEffect, useRef } from 'react';
import './LoadingScreen.css';
import Typed from 'typed.js';


const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const typedElement = useRef(null);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(progressTimer);
  }, []);



  useEffect(() => {
    const options = {
      strings: ["Akash Kumar Raj"],
      typeSpeed: 80,
      startDelay: 300,
      fadeOut: true,
      fadeOutClass: 'typed-fade-out',
      fadeOutDelay: 500,
      loop: false,
      showCursor: true,
      cursorChar: '|',
      autoInsertCss: true,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);



  return (
    <div className="loading-screen">
      {/* Background Grid */}
      <div className="grid-overlay"></div>

      <div className="loading-container">

        {/* Spinning Loader */}
        <div className="spinner-container">
          <div className="spinner-outer"></div>
          <div className="spinner-inner"></div>
          <div className="spinner-core"></div>
        </div>

        {/* Brand Text */}
        <h3 className="brand-text">
          <span ref={typedElement}></span>
        </h3>

        {/* Progress Bar */}
        <div className="progress-wrapper">
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="progress-text">
            LOADING... {progress}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;