import React, { PropsWithChildren } from 'react';
import Swiper from 'swiper';
import { Thumbs } from 'swiper/modules';
import { Swiper as SwiperCore } from 'swiper/react';

import { thumbs } from './Swiper.module.css';

export interface ThumbSwiperProps extends PropsWithChildren {
  setSwiper: (swiper: Swiper) => void;
}

export default function ThumbSwiper({ setSwiper, children }: ThumbSwiperProps) {
  return (
    <SwiperCore
      modules={[Thumbs]}
      watchSlidesProgress
      onSwiper={setSwiper}
      slidesPerView={5}
      className={thumbs}
    >
      {children}
    </SwiperCore>
  );
}
