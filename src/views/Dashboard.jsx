import React, { Component } from 'react';
import { BgHero, LogoHeader } from '../assets';
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
        <div className="section__hero">
          <div className='hero_row'>
            <div className='left_word'>
              <h1>Platform <p className='word_inside_left'>Dana Pinjaman</p> Agunan BPKP & Kredit Mobil Baru/Bekas Mudah dan Cepat</h1>
              <p>Proses dibantu sampai <span className='word_bg'>Disetujui</span> dan <span className='word_bg'>Cair</span></p>
            </div>
            <div>
              <img src={BgHero} height="150%" width="150%" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
