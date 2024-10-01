import React from 'react';
import logo from '../assets/logo/logo.jpg';

const Navbar = () => {
  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top custom-navbar">
      <div className="container">
        <a className="navbar-brand" href="/">
        <img loading="lazy" src= {logo} alt="Limbu Kitchen logo" className='navbar-logo' /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/home" onClick={(e) => handleScroll(e, 'home')}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about" onClick={(e) => handleScroll(e, 'about')}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/menu" onClick={(e) => handleScroll(e, 'menu')}>Menu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact" onClick={(e) => handleScroll(e, 'contact')}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
