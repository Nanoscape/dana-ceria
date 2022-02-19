import React, { Component } from 'react';
import { ImgBannerHero } from '../assets';
import '../assets/css/dashboard.css';
import { CardFaq, CardProduct } from '../components';
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
      </div>
    );
  }
}
