import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import '../assets/css/agent.css';
import { ImgHeroAgent, ImgUserModal } from '../assets';

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
              <div className="bubble-box"></div>
              <img src={ImgUserModal} alt="User Modal" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
