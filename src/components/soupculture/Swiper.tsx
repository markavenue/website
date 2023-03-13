import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { SwiperSlide } from 'swiper/react';
import MainSwiper from '../ui/swiper/MainSwiper';

export default function Swiper() {
  return (
    <MainSwiper>
      <SwiperSlide>
        <StaticImage src="../../assets/soupculture-1.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <StaticImage src="../../assets/soupculture-2.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <StaticImage src="../../assets/soupculture-3.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <StaticImage src="../../assets/soupculture-4.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <StaticImage src="../../assets/soupculture-5.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <StaticImage src="../../assets/soupculture-6.png" alt="" />
      </SwiperSlide>
    </MainSwiper>
  );
}
