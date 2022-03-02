import React from 'react';
import { ImgNotFound } from '../assets';
import '../assets/css/dashboard.css';
import Navbar from '../components/Navbar';

export default function PageNotFound() {
  return (
    <>
      <Navbar />
      <div className="container-notfound">
        <img src={ImgNotFound} alt="Not Found" />
        <h2>Sorry, This Page Doesn’s Exist Or Is Unvailable </h2>
        <a href="/#">go home</a>
      </div>
    </>
  );
}
