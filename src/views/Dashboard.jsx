import React, { Component } from "react";
import {
  BgHero,
  LogoHeader,
  ImgCardCar,
  ImgCardBus,
  ImgCardNew,
  ImgCardUsed,
} from "../assets";
import "../assets/css/dashboard.css";
import RoundedBg from "../component/RoundedBg.jsx";

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
              <li class="nav__item">
                <a href="/#" class="nav__link">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="/#" class="nav__link">
                  Tentang Dana Ceria
                </a>
              </li>
              <li className="nav__item">
                <a href="/#" class="nav__link">
                  Produk Kami
                </a>
              </li>
              <li className="nav__item">
                <a href="/#" class="nav__link">
                  Mitra Kami
                </a>
              </li>
              <li className="nav__item">
                <a href="/#" class="nav__link">
                  Agent Dana Ceria
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <div className="section__hero">
          <div className="desc-hero-wrapper">
            <h2 className="desc-hero">
              Platform <span className="desc-hero txt-yellow">Dana Pinjaman</span> Agunan BPKB & Kredit Mobil Baru/Bekas Mudah dan Cepat
            </h2>
            <h4 className="desc-down-hero">
              Proses dibantu sampai <span className="desc-down-hero border-yellow">Disetujui</span> dan <span className="desc-down-hero border-yellow">Cair</span>
            </h4>
          </div>
          <img src={BgHero} alt="Background Hero" className="img-hero" />
        </div>
        <div className="section">
          <div className="header-section">
            <h2>Produk Kami</h2>
          </div>
          <div className="section__content">
            <RoundedBg src={ImgCardCar} text="Pinjaman BPKB Mobil" />
            <RoundedBg src={ImgCardBus} text="Pinjaman BPKB Motor" />
            <RoundedBg src={ImgCardNew} text="Pinjaman Mobil Baru" />
            <RoundedBg src={ImgCardUsed} text="Pinjaman Mobil Bekas" />
          </div>
        </div>
      </div>
    );
  }
}
