import React from 'react';
import logo from '../assets/logo/logo.jpg'; // Adjust the path

const Footer = () => (
  <footer className="bg-dark text-white py-4">
    <div className="container text-center">
      <img src={logo} alt="Limbu Kitchen Logo" style={{ height: '50px' }} />
      <p className="mt-3">Authentic Nepali Taste</p>
      <ul className="list-inline">
        <li className="list-inline-item"><a href="https://www.instagram.com/limbu_kitchen/" className="text-white">Instagram</a></li>
        <li className="list-inline-item"><a href="https://www.facebook.com/profile.php?id=61566837914772" className="text-white">Facebook</a></li>
      </ul>
      <p className="mt-3">© 2024 Limbu Kitchen. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
