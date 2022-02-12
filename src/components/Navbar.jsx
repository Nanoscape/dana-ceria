import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { LogoHeader } from '../assets';
import '../assets/css/dashboard.css';

export default function () {
  const location = useLocation();

  return (
    <header className="header">
      <nav className="nav">
        <a href="/#" className="nav__logo">
          <img src={LogoHeader} alt="Logo" className="nav__logoimg" />
        </a>
        <ul className="nav__list">
          <li className="nav__item">
            <Link to='/' className={`nav__link ${location.pathname === '/' ? 'active' : null}`}>Home</Link>
          </li>
          <li className="nav__item">
            <a href="/#" className="nav__link">
              Tentang Dana Ceria
            </a>
          </li>
          <li className="nav__item">
            <a href="/#" className="nav__link">
              Produk Kami
            </a>
          </li>
          <li className="nav__item">
            <a href="/#" className="nav__link">
              Mitra Kami
            </a>
          </li>
          <li className="nav__item">
            <Link to='/agent' className={`nav__link ${location.pathname === '/agent' ? 'active' : null}`}>Agent Dana Ceria</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
