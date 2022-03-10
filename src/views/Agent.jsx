import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import '../assets/css/agent.css';
import { ImgHandGadget, ImgHandMoney, ImgHeroAgent, ImgUserGroup, ImgUserModal, ImgUserTimeline } from '../assets';

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
        </div>
      </div>
    );
  }
}
