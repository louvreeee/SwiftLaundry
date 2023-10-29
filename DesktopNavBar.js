import React from 'react';
import './DesktopNavBar.css';

const DesktopNavBar = ({ fontSize }) => {
  return (
    <div className="desktop-navbar">
      <div className='logo'>
        <img src="./LOGO2.png" alt="Logo" className="zoomable-image"/>
      </div>
      <nav className="navbar">
        <ul>
          <li><a href="#home" style={{ fontSize }}>Home</a></li>
          <li><a href="#about" style={{ fontSize }}>About</a></li>


          <li><a href="#services" style={{ fontSize }}>Services</a></li>
          <li><a href="#portfolio" style={{ fontSize }}>Portfolio</a></li>
          <li><a href="#contact" style={{ fontSize }}>Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default DesktopNavBar;
