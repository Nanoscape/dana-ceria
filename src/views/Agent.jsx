import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import '../assets/css/agent.css';
import Slider from '../components/Slider';
import {
  ImgHandGadget,
  ImgHandMoney,
  ImgHeroAgent,
  ImgUserGroup,
  ImgUserModal,
  ImgUserTimeline,
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
  LogoHeader,
} from '../assets';

export default class Agent extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="bg-color-section">
          <div className="container-hero">
            <img src={ImgHeroAgent} alt="Banner Hero" />
          </div>

          <div className="container-dana">
            <h2 className="title-container">Mengapa harus jadi Agen Dana Ceria ?</h2>
            <div className="wrapper-dana">
              <div className="bubble-box">
                <div className="box-dana">
                  <div className="circle-dana">
                    <img src={ImgHandMoney} alt="Hand Money" className="img-circle-dana" />
                  </div>
                  <h3 className="title-box-dana">Komisi Besar</h3>
                  <h5 className="desc-box-dana">Dapat komisi hingga 7,5%</h5>
                </div>

                <div className="box-dana">
                  <div className="circle-dana">
                    <img src={ImgHandGadget} alt="Hand Gadget" className="img-circle-dana" />
                  </div>
                  <h3 className="title-box-dana">Cuman modal HP</h3>
                  <h5 className="desc-box-dana">Merekomendasikan calon nasabah</h5>
                </div>

                <div className="box-dana">
                  <div className="circle-dana">
                    <img src={ImgUserTimeline} alt="User Timeline" className="img-circle-dana" />
                  </div>
                  <h3 className="title-box-dana">Fleksibel</h3>
                  <h5 className="desc-box-dana">Kerja kapan dan dimana saja</h5>
                </div>

                <div className="box-dana">
                  <div className="circle-dana">
                    <img src={ImgUserGroup} alt="User Group" className="img-circle-dana" />
                  </div>
                  <h3 className="title-box-dana">Jangkauan luas</h3>
                  <h5 className="desc-box-dana">Cover seluruh Indonesia</h5>
                </div>
              </div>
              <img className="img-user-modal" src={ImgUserModal} alt="User Modal" />
            </div>
          </div>

          <div className="container-join">
            <div className="box-join">
              <h3 className="title-join">bergabunglah</h3>
              <h3 className="title-join1">menjadi</h3>
              <h3 className="title-join2">
                mitra <span>agen</span>
              </h3>
              <div className="pad-txt-join">
                <h4 className="title-join3">
                  Dapatkan penghasilan hingga<span> 20 juta perbulan</span>
                </h4>
              </div>
              <h3 className="title-join4">Mau jadi agen Dana Ceria..?</h3>
              <div className="pad-txt-join1">
                <a href="/agent" className="btn-join">
                  klik disini
                </a>
              </div>
            </div>
          </div>

          <div className="container-testimoni">
            <h3 className="title-testimoni">Testimoni Agen Dana Ceria</h3>
            <Slider />
          </div>

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
