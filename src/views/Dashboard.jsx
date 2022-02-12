import React, { Component } from 'react';
import { LogoHeader, BgHero, ImgCardCar, ImgCardBus, ImgCardNew, ImgCardUsed, ImgBuilding, ImgRequest, ImgServer, ImgPrice, ImgPerson, ImgBannerDown, ImgFacebook, ImgInstagram, ImgYoutube } from '../assets';
import '../assets/css/dashboard.css';
import { CardFaq, CardProduct } from '../components';
import Navbar from '../components/Navbar';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        {/* Header Navbar */}
        {/* <header className="header">
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
                <Link to='/agent' >Agent Dana Ceria</Link>
              </li>
            </ul>
          </nav>
        </header> */}
        <Navbar />
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

          {/* FAQ Dana Ceria */}
          <h2 className="title-faq">Mengapa harus melalui Dana Ceria?</h2>
          <div className="section-faq">
            <div className="retangle-bg-primary">
              <div className="border-rounded-primary">
                <img src={ImgServer} alt="Card FAQ" className="retangle-img" />
              </div>
              <h2 className="text-title-faq-primary">Proses mudah dan cepat</h2>
              <div className="body-card-desc-faq">Cuman Butuh Waktu 10 Menit dan Foto Berkas Persyaratan Dana Langsung Cair</div>
            </div>
            <CardFaq src={ImgPrice} title="Di bantu cair sampai deal" desc="Kami Bantu Carikan Hitungan Yang Cocok Untuk Anda Sampai Deal" />
            <CardFaq src={ImgBuilding} title="Banyak pilihan leasing" desc="Pilihan Leasing Terbanyak Di Indonesia dan Dipilihkan Leasing Yang Bisa Take Over" />
            <CardFaq src={ImgRequest} title="Bunga Paling Rendah" desc="Dipilihkan Bunga Paling Rendah Hingga 0,8%  dan Dipilihkan Pencairan Paling Tinggi" />
          </div>

          {/* Apply for a Loan */}
          <div className="box-loan">
            <h2 className="title-loan">Tips Mengajukan Pinjaman Dana Agunan BPKB</h2>
            <h2 className="title-loan1">Dana Agunan BPKB</h2>
            <img className="img-loan" src={ImgPerson} alt="Person" />
            <div className="card-loan-primary">
              <div className="wrapper-first-letter-loan-primary">
                <h1 className="first-letter-loan">1</h1>
              </div>
              <div className="second-letter-loan-primary">
                <h3 className="title-second-letter-loan-primary">Tentukan tujuan pinjaman</h3>
                <h3 className="title-second-letter-loan-primary1">Kamu harus tentukan tujuan pinjaman dana kamu untuk kebutuan usaha, modal usaha, biaya pendidikan, atau biaya pernikahan. Jangan di pakai untuk berfoya - foya</h3>
              </div>
            </div>

            <div className="card-loan">
              <div className="wrapper-first-letter-loan">
                <h1 className="first-letter-loan">2</h1>
              </div>
              <div className="second-letter-loan">
                <h3 className="title-second-letter-loan">Pahami Syarat dan Ketentuan</h3>
                <h3 className="title-second-letter-loan1">Setiap lembaga keuangan memiliki syarat syarat yang harus dilampirkan pada saat pengajuan. apa aja sih syaratnya?</h3>
                <a href="/#" className="title-second-letter-loan2">
                  klik disini
                </a>
              </div>
            </div>

            <div className="card-loan">
              <div className="wrapper-first-letter-loan1">
                <h1 className="first-letter-loan">3</h1>
              </div>
              <div className="second-letter-loan">
                <h3 className="title-second-letter-loan">Pilih Leasing Terpercaya</h3>
                <h3 className="title-second-letter-loan1">
                  Pastikan leasing/lembaga keuangan tempat kamu mengajukan aman dan terpercaya dan sudah terdaftar oleh OJK sehingga kamu dapat perlindungan hukum jika terjadi sesuatu yang tidak di inginkan
                </h3>
              </div>
            </div>
          </div>

          {/* Section Condition */}
          <div className="section-condition">
            <h2 className="title-condition">persyaratan mengajukan pinjaman di Dana Ceria</h2>
            <div className="container-condition">
              <div className="box-condition-car">
                <h2 className="title-box-condition">Pinjaman jaminan BPKB mobil</h2>
                <div className="align-text-condition">
                  <i class="bx bx-check bx-md check-green"></i>
                  <span className="desc-box-condition">KTP</span>
                </div>
                <div className="align-text-condition">
                  <i class="bx bx-check bx-md check-green"></i>
                  <span className="desc-box-condition">KTP Pasangan (jika ada)</span>
                </div>
                <div className="align-text-condition">
                  <i class="bx bx-check bx-md check-green"></i>
                  <span className="desc-box-condition">Kartu Keluarga</span>
                </div>
                <div className="align-text-condition">
                  <i class="bx bx-check bx-md check-green"></i>
                  <span className="desc-box-condition">NPWP</span>
                </div>
                <div className="align-text-condition">
                  <i class="bx bx-check bx-md check-green"></i>
                  <span className="desc-box-condition">PBB/Surat Kepemilikan Rumah</span>
                </div>
                <div className="align-text-condition">
                  <i class="bx bx-check bx-md check-green"></i>
                  <span className="desc-box-condition">Slip Gaji(Karyawan)</span>
                </div>
                <div className="align-text-condition">
                  <i class="bx bx-check bx-md check-green"></i>
                  <span className="desc-box-condition">Surat Keterangan Usaha</span>
                </div>
                <div className="align-text-condition">
                  <i class="bx bx-check bx-md check-green"></i>
                  <span className="desc-box-condition">Rekening Korang 3 Bulan terakhir</span>
                </div>
              </div>
              <div className="box-condition-motocycle">
                <h2 className="title-box-condition">Pinjaman jaminan BPKB motor</h2>
                <div className="align-text-condition">
                  <i class="bx bx-check bx-md check-green"></i>
                  <span className="desc-box-condition">KTP</span>
                </div>
                <div className="align-text-condition">
                  <i class="bx bx-check bx-md check-green"></i>
                  <span className="desc-box-condition">KTP Pasangan (jika ada)</span>
                </div>
                <div className="align-text-condition">
                  <i class="bx bx-check bx-md check-green"></i>
                  <span className="desc-box-condition">Kartu Keluarga</span>
                </div>
                <div className="align-text-condition">
                  <i class="bx bx-check bx-md check-green"></i>
                  <span className="desc-box-condition">Rekening Listrik</span>
                </div>
                <div className="align-text-condition">
                  <i class="bx bx-check bx-md check-green"></i>
                  <span className="desc-box-condition">Slip Gaji(Karyawan)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Image Banner Down */}
        <img src={ImgBannerDown} alt="Banner Cicilan" />
        {/* Section Footer */}
        <div className="section-footer">
          <div className="container-footer">
            <img src={LogoHeader} alt="Logo Dana Ceria" className="img-footer" />
            <div className="footer-wrapper">
              <h4 className="title-footer">Tentang</h4>
              <a href="#/" className="desc-footer">
                General
              </a>
              <a href="#/" className="desc-footer">
                Kebijakan & Keamanan
              </a>
              <a href="#/" className="desc-footer">
                Syarat & Ketentuan
              </a>
            </div>
            <div className="footer-wrapper">
              <h4 className="title-footer">Dana Ceria</h4>
              <a href="#/" className="desc-footer">
                Mitra Kami
              </a>
              <a href="#/" className="desc-footer">
                Agen Kami
              </a>
              <a href="#/" className="desc-footer">
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
            <h4 className="title-footer-social">Ikuti Kami :</h4>
            <a href="#/" className="img-footer-social">
              <img src={ImgInstagram} alt="Logo Instagram" />
            </a>
            <a href="#/" className="img-footer-social">
              <img src={ImgFacebook} alt="Logo Facebook" />
            </a>
            <a href="#/" className="img-footer-social">
              <img src={ImgYoutube} alt="Logo Youtube" />
            </a>
          </div>
        </div>
        <footer className="section-copyright">
          <h3 className="title-copyright">© 2022 Hak Cipta Terpelihara Dana Ceria</h3>
        </footer>
      </div>
    );
  }
}
