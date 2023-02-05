import React, { PropsWithChildren } from 'react';
import Swiper, { Thumbs } from 'swiper';
import { Swiper as SwiperCore } from 'swiper/react';

export interface MainSwiperProps extends PropsWithChildren {
  swiper?: Swiper;
}

export default function MainSwiper({ swiper, children }: MainSwiperProps) {
  return (
    <SwiperCore modules={[Thumbs]} thumbs={{ swiper }} speed={400} autoplay>
      {children}
    </SwiperCore>
  );
}
