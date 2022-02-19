import React from 'react';
import { LogoHeader } from '../assets';
import '../assets/css/dashboard.css';

export default function () {
  return (
    <header>
      <nav>
        <a href="/#" className="nav__logo">
          <img src={LogoHeader} alt="Logo" />
        </a>
        <ul>
          <li>
            <a href="/#">Home</a>
          </li>
          <li>
            <a href="/#">Tentang Dana Ceria</a>
          </li>
          <li>
            <a href="/#">Produk Kami</a>
          </li>
          <li>
            <a href="/#">Mitra Kami</a>
          </li>
          <li>
            <a href="/#">Agent Kami</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
