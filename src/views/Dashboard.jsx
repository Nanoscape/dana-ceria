import React, { Component } from 'react';
import { ImgBannerHero, ImgCardBus, ImgCardCar, ImgCardNew, ImgCardUsed, LogoHeader, ImgTips, ImgServer, ImgPrice, ImgBuilding, ImgRequest } from '../assets';
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

        {/* Section FAQ */}
        <section className="section" id="faq">
          <h1 className="title-section">Mengapa harus melalui Dana Ceria?</h1>
          <div className="container-faq">
            <div className="card-primary-faq">
              <div className="circle-primary-faq">
                <img src={ImgServer} alt="Server" />
              </div>
              <h3>Proses mudah dan cepat</h3>
              <div className="desc-primary-faq">
                <p>Cuman Butuh Waktu 10 Menit dan Foto Berkas Persyaratan Dana Langsung Cair</p>
              </div>
            </div>

            <div className="card-faq">
              <div className="circle-faq">
                <img src={ImgPrice} alt="Server" />
              </div>
              <h3>Di bantu cair sampai deal</h3>
              <p>Kami Bantu Carikan Hitungan Yang Cocok Untuk Anda Sampai Deal</p>
            </div>

            <div className="card-faq">
              <div className="circle-faq">
                <img src={ImgBuilding} alt="Server" />
              </div>
              <h3>Banyak pilihan leasing</h3>
              <p>Pilihan Leasing Terbanyak Di Indonesia dan Dipilihkan Leasing Yang Bisa Take Over</p>
            </div>

            <div className="card-faq">
              <div className="circle-faq">
                <img src={ImgRequest} alt="Server" />
              </div>
              <h3>Bunga Paling Rendah</h3>
              <p>Dipilihkan Bunga Paling Rendah Hingga 0,8% dan Dipilihkan Pencairan Paling Tinggi</p>
            </div>
          </div>
        </section>

        {/* Iamge Tips */}
        <div className="img-tips">
          <img src={ImgTips} alt="Tips" />
        </div>
      </div>
    );
  }
}
