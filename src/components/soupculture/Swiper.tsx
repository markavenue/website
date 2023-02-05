import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Swiper as SwiperCore, SwiperSlide } from 'swiper/react';

interface SwiperProps {
  className?: string;
}

export default function Swiper({ className }: SwiperProps) {
  return (
    <SwiperCore className={className}>
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
    </SwiperCore>
  );
}
