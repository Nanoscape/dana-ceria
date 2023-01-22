import React from 'react';
import { LogoHeader } from '../assets';
import '../assets/css/navbar.css';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <nav>
      <a href="/" className="nav__logo">
        <img src={LogoHeader} alt="Logo" />
      </a>
      <input className="menu-btn" id="menu-btn" type="checkbox" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <Link to="/" className={`${location.pathname === '/' ? 'active' : null}`}>
            Home
          </Link>
        </li>
        <li>
          <a href="/#about">Tentang Dana Ceria</a>
        </li>
        <li>
          <a href="/#product">Produk Kami</a>
        </li>
        <li>
          <a href="/#mitra">Mitra Kami</a>
        </li>
        <li>
          <Link to="/agent" className={`${location.pathname === '/agent' ? 'active' : null}`}>
            Agent Kami
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
