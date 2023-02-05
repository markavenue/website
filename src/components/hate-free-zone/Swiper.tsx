import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Swiper as SwiperCore, SwiperSlide } from 'swiper/react';

export default function Swiper() {
  return (
    <SwiperCore>
      <SwiperSlide>
        <StaticImage src="../../assets/hate-free-1.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <StaticImage src="../../assets/hate-free-2.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <StaticImage src="../../assets/hate-free-3.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <StaticImage src="../../assets/hate-free-4.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <StaticImage src="../../assets/hate-free-5.png" alt="" />
      </SwiperSlide>
    </SwiperCore>
  );
}
