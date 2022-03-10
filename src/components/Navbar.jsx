import React from 'react';
import { LogoHeader } from '../assets';
import '../assets/css/navbar.css';

export default function Navbar() {
  return (
    <nav>
      <a href="/#" className="nav__logo">
        <img src={LogoHeader} alt="Logo" />
      </a>
      <input className="menu-btn" id="menu-btn" type="checkbox" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <a className="active" href="/#">
            Home
          </a>
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
          <a href="/agent">Agent Kami</a>
        </li>
      </ul>
    </nav>
  );
}
