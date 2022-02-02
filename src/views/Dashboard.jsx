import React, { Component } from 'react';
import { LogoHeader, BgHero, ImgCardCar, ImgCardBus, ImgCardNew, ImgCardUsed } from '../assets';
import '../assets/css/dashboard.css';
import CardProduct from '../components/CardProduct';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        {/* Header Navbar */}
        <header className="header">
          <nav className="nav">
            <a href="/#" className="nav__logo">
              <img src={LogoHeader} alt="Logo" className="nav__logoimg" />
            </a>
            <ul className="nav__list">
              <li class="nav__item">
                <a href="/#" class="nav__link active">
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
        {/* Section Hero */}
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
        <div className="wrapper">
          {/* About */}
          <div className="section-about">
            <h2 className="title-about">Tentang Dana Ceria</h2>
            <img src={LogoHeader} alt="Logo" className="img-about" />
            <h2 className="desc-about">
              <span className="desc-about txt-blue">Dana ceria</span> merupakan platform <span className="desc-about txt-blue">dana pinjaman</span> jaminan BPKB
            </h2>
            <h2 className="desc-about">Kendaraan proses mudah dan cepat dengan pilihan leasing terbanyak di</h2>
            <h2 className="desc-about">
              indonesia. Kami juga menyediakan layanan <span className="desc-about txt-blue">kredit mobil bekas</span> di bantu
            </h2>
            <h2 className="desc-about">proses sampai di setujui.</h2>
          </div>
          {/* Our Product */}
          <h2 className="title-product">Produk Kami</h2>
          <div className="section-product">
            <CardProduct src={ImgCardCar} text="Pinjaman BPKB Mobil" />
            <CardProduct src={ImgCardBus} text="Pinjaman BPKB Motor" />
            <CardProduct src={ImgCardNew} text="Pinjaman Mobil Baru" />
            <CardProduct src={ImgCardUsed} text="Pinjaman Mobil Bekas" />
          </div>
        </div>
      </div>
    );
  }
}
