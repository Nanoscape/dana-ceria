import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { ImgUserTestimoni, ImgUserTestimoni1, ImgUserTestimoni2 } from '../assets';

export default function Slider() {
  const pagination = {
    clickable: true,
  };
  return (
    <>
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        pagination={pagination}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={ImgUserTestimoni} alt="User Testimoni" className="img-testimoni" />
          <div className="card-testimoni">
            <h3 className="title-name">Muhammad Hafidh</h3>
            <h4 className="rating">
              Rating <i class="bx bxs-star"></i> 4.5
            </h4>
            <h3 className="desc-name">“ Enak banget jadi agent Dana Ceria, kerja nya cuman main hp doang dapet cuan tambahan terimakasih Dana Ceria. “</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={ImgUserTestimoni1} alt="User Testimoni" className="img-testimoni" />
          <div className="card-testimoni">
            <h3 className="title-name">Arsyad Ramadhan</h3>
            <h4 className="rating">
              Rating <i class="bx bxs-star"></i> 4.6
            </h4>
            <h3 className="desc-name">“ Buat temen temen yang mau dapat uang tambahan, saya merekomendasikan jadi agent dana ceria, saya bisa dapet 5 juta setiap bulannya . “</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={ImgUserTestimoni2} alt="User Testimoni" className="img-testimoni" />
          <div className="card-testimoni">
            <h3 className="title-name">Gema Andika</h3>
            <h4 className="rating">
              Rating <i class="bx bxs-star"></i> 4.9
            </h4>
            <h3 className="desc-name">“ Saya bisa membiayai kuliah saya sendiri dari menjadi Agen Dana Ceria, saya merekomendasikan buat mahasiswa yang mau dapat uang jajan lebih “</h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
