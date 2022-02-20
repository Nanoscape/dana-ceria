import React, { Component } from 'react';
import { ImgBannerHero, ImgCardBus, ImgCardCar, ImgCardNew, ImgCardUsed, LogoHeader } from '../assets';
import '../assets/css/dashboard.css';
import Navbar from '../components/Navbar';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {/* Section Hero */}
        <section id="hero">
          <img src={ImgBannerHero} alt="Banner Hero" />
        </section>

        {/* Section About */}
        <section className="section" id="about">
          <h1 className="title-section">Tentang Dana Ceria</h1>
          <img className="mt-20" src={LogoHeader} alt="Logo Dana Ceria" />
          <div className="wrapper-about mt-20">
            <p>
              <span className="active">Dana ceria</span> merupakan platform <span className="active">dana pinjaman</span> jaminan BPKB Kendaraan proses mudah dan cepat dengan pilihan leasing terbanyak di indonesia. Kami juga menyediakan
              layanan <span className="active">kredit mobil bekas</span> di bantu proses sampai di setujui.
            </p>
          </div>
        </section>

        {/* Section Product */}
        <section className="section" id="product">
          <h1 className="title-section">Produk Kami</h1>
          <div className="container-product">
            <div className="wrapper-product">
              <div className="circle-product">
                <img src={ImgCardCar} alt="Card Car" />
              </div>
              <div className="contain-txt-product">
                <h3>Pinjaman BPKB Mobil</h3>
              </div>
            </div>

            <div className="wrapper-product">
              <div className="circle-product">
                <img src={ImgCardBus} alt="Card Car" />
              </div>
              <div className="contain-txt-product">
                <h3>Pinjaman BPKB Motor</h3>
              </div>
            </div>

            <div className="wrapper-product">
              <div className="circle-product">
                <img src={ImgCardNew} alt="Card Car" />
              </div>
              <div className="contain-txt-product">
                <h3>Kredit Mobil Baru</h3>
              </div>
            </div>

            <div className="wrapper-product">
              <div className="circle-product">
                <img src={ImgCardUsed} alt="Card Car" />
              </div>
              <div className="contain-txt-product">
                <h3>Kredit Mobil Bekas</h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
