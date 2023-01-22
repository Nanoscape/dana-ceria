import React, { Component } from 'react';
import {
  ImgBannerHero,
  ImgCardBus,
  ImgCardCar,
  ImgCardNew,
  ImgCardUsed,
  LogoHeader,
  ImgTips,
  ImgServer,
  ImgPrice,
  ImgBuilding,
  ImgRequest,
  ImgBannerDown,
  ImgModal,
  ImgSinarmas,
  ImgWom,
  ImgSms,
  ImgAdira,
  ImgMnc,
  ImgVerena,
  ImgNsc,
  ImgTrihamas,
  ImgJaccs,
  ImgBfi,
  ImgInstagram,
  ImgFacebook,
  ImgYoutube,
  ImgWhatsapp,
} from '../assets';
import '../assets/css/dashboard.css';
import Navbar from '../components/Navbar';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="popup-wa">
          <a href="https://wa.me/6281311507051?text=Saya butuh bantuan Pinjaman Dana di Dana Ceria" target="_blank" rel="noreferrer">
            <img src={ImgWhatsapp} alt="Logo Whatsapp" className="img-wa-popup" id="popupwa" />
          </a>
        </div>
        {/* Section Hero */}
        <div className="bg-color-section">
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

          {/* Section Condition */}
          <section className="section" id="condition">
            <h1 className="title-section">persyaratan mengajukan pinjaman di Dana Ceria</h1>
            <div className="container-condition">
              <div className="card-condition">
                <h3>Pinjaman jaminan BPKB Mobil</h3>
                <span>
                  <i className="bx bx-check ic-green"></i> KTP
                </span>
                <span>
                  <i className="bx bx-check ic-green"></i> KTP Pasangan (jika ada)
                </span>
                <span>
                  <i className="bx bx-check ic-green"></i> Kartu Keluarga
                </span>
                <span>
                  <i className="bx bx-check ic-green"></i> NPWP
                </span>
                <span>
                  <i className="bx bx-check ic-green"></i> PBB/Surat Kepemilikan Rumah
                </span>
                <span>
                  <i className="bx bx-check ic-green"></i> Slip gaji (Karyawan)
                </span>
                <span>
                  <i className="bx bx-check ic-green"></i> Surat Keterangan Usaha
                </span>
                <span>
                  <i className="bx bx-check ic-green"></i> Rekening Korang 3 Bulan Terakhir
                </span>
              </div>

              <div className="card-condition">
                <h3>Pinjaman jaminan BPKB Motor</h3>
                <span>
                  <i className="bx bx-check ic-green"></i> KTP
                </span>
                <span>
                  <i className="bx bx-check ic-green"></i> KTP Pasangan (jika ada)
                </span>
                <span>
                  <i className="bx bx-check ic-green"></i> Kartu Keluarga
                </span>
                <span>
                  <i className="bx bx-check ic-green"></i> Rekening Listrik
                </span>
                <span>
                  <i className="bx bx-check ic-green"></i> Slip gaji (Karyawan)
                </span>
              </div>
            </div>
          </section>

          <img src={ImgBannerDown} alt="Banner Down" className="banner-down" />

          {/* Section Modal */}
          <section id="modal">
            <div className="container-modal">
              <div className="title-modal">
                <h2>Butuh Dana tambahan untuk kebutuhan?</h2>
                <h4>
                  <span>Dana Ceria</span> solusinya...
                </h4>
              </div>
              <img src={ImgModal} alt="Modal" />
              <h3>
                Kamu Bisa Dapatkan <span className="active">Modal</span> Hingga<span className="active"> 2 MILIYAR</span>
              </h3>
              <a href="https://wa.me/6281311507051?text=Saya butuh bantuan Pinjaman Dana di Dana Ceria" target="_blank" rel="noreferrer">
                Ajukan Sekarang
              </a>
            </div>
          </section>

          {/* Section Mitra */}
          <section className="section" id="mitra">
            <h2>Mitra Kami</h2>
            <div className="container-mitra">
              <div className="card-mitra">
                <img src={ImgSinarmas} alt="Logo Sinarmas" />
              </div>
              <div className="card-mitra">
                <img src={ImgWom} alt="Logo Wom" />
              </div>
              <div className="card-mitra">
                <img src={ImgSms} alt="Logo SMS" />
              </div>
              <div className="card-mitra">
                <img src={ImgAdira} alt="Logo Adira" />
              </div>
              <div className="card-mitra">
                <img src={ImgMnc} alt="Logo MNC" />
              </div>
              <div className="card-mitra">
                <img src={ImgVerena} alt="Logo Verena" />
              </div>
              <div className="card-mitra">
                <img src={ImgNsc} alt="Logo NSC" />
              </div>
              <div className="card-mitra">
                <img src={ImgTrihamas} alt="Logo Trihamas" />
              </div>
              <div className="card-mitra">
                <img src={ImgJaccs} alt="Logo Jaccs" />
              </div>
              <div className="card-mitra-1">
                <img src={ImgBfi} alt="Logo BFI" className="img-bfi" />
              </div>
            </div>
          </section>

          {/* Section Footer */}
          <div className="section-footer">
            <div className="container-footer">
              <img src={LogoHeader} alt="Logo Dana Ceria" className="img-footer" />
              <div className="footer-wrapper">
                <h4 className="title-footer">Tentang</h4>
                <a href="/general" target="_blank" rel="noreferrer" className="desc-footer">
                  General
                </a>
                <a href="/terms" target="_blank" rel="noreferrer" className="desc-footer">
                  Kebijakan & Keamanan
                </a>
                <a href="/condition" target="_blank" rel="noreferrer" className="desc-footer">
                  Syarat & Ketentuan
                </a>
              </div>
              <div className="footer-wrapper">
                <h4 className="title-footer">Dana Ceria</h4>
                <a href="/#mitra" className="desc-footer">
                  Mitra Kami
                </a>
                <a href="/agent" target="_blank" rel="noreferrer" className="desc-footer">
                  Agen Kami
                </a>
                <a href="https://wa.me/6281311507051?text=Saya butuh bantuan Pinjaman Dana di Dana Ceria" className="desc-footer" target="_blank" rel="noreferrer">
                  Tanya Kami
                </a>
              </div>
              <div className="footer-wrapper">
                <h4 className="title-footer">Kontak Kami</h4>
                <h4 className="desc-footer">danaceria@gmail.com</h4>
                <h4 className="desc-footer">+62 812-9061-0717</h4>
                <h4 className="desc-footer">Greenlake City Rukan CBD Blok F No.23</h4>
                <h4 className="desc-footer">Cipondoh, Tangerang</h4>
              </div>
            </div>
            <div className="footer-social-media">
              <span className="title-footer-social">Ikuti Kami :</span>
              <a href="https://www.instagram.com/danaceriaid/" className="img-footer-social">
                <img src={ImgInstagram} alt="Logo Instagram" />
              </a>
              <a href="https://facebook.com/danaceriaind" className="img-footer-social">
                <img src={ImgFacebook} alt="Logo Facebook" />
              </a>
              <a href="/#" className="img-footer-social">
                <img src={ImgYoutube} alt="Logo Youtube" />
              </a>
            </div>
          </div>
        </div>
        <footer>© 2022 Hak Cipta Terpelihara Dana Ceria</footer>
      </div>
    );
  }
}
