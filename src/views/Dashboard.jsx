import React, { Component } from 'react';
import { LogoHeader } from '../assets';
import '../assets/css/dashboard.css';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <nav className="nav">
            <a href="/#" className="nav__logo">
              <img src={LogoHeader} alt="Logo" className="nav__logoimg" />
            </a>
            <ul className="nav__list">
              <li className="nav__item">
                <a href="/#" className="nav__link">
                  Home
                </a>
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
                <a href="/#" className="nav__link">
                  Agent Dana Ceria
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <div className="section__hero"></div>
      </div>
    );
  }
}
