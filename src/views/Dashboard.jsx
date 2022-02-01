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
            <ul class="nav__list">
              <li class="nav__item">
                <a href="/#" class="nav__link">
                  Home
                </a>
              </li>
              <li class="nav__item">
                <a href="/#" class="nav__link">
                  Tentang Dana Ceria
                </a>
              </li>
              <li class="nav__item">
                <a href="/#" class="nav__link">
                  Produk Kami
                </a>
              </li>
              <li class="nav__item">
                <a href="/#" class="nav__link">
                  Mitra Kami
                </a>
              </li>
              <li class="nav__item">
                <a href="/#" class="nav__link">
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
