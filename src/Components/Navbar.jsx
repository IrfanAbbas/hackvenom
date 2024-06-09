// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
      <Link to="/contact"><img src="\img\logo.png" alt="logo" className='logo' /></Link>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li className='Horizontal-line'>|</li>
        <li>
          <Link to="/about" >OFFER</Link>
        </li>
        <li className='Horizontal-line'>|</li>
        <li>
          <Link to="/contact" className="offer" >CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
