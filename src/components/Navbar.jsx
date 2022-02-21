import React from 'react';
import { LogoHeader } from '../assets';
import '../assets/css/dashboard.css';

export default function Navbar() {
  return (
    <header>
      <nav>
        <a href="/#" className="nav__logo">
          <img src={LogoHeader} alt="Logo" />
        </a>
        <ul>
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
            <a href="/#">Agent Kami</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
