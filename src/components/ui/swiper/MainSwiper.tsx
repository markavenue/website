import React, { PropsWithChildren } from 'react';
import Swiper, { Autoplay, Thumbs } from 'swiper';
import { Swiper as SwiperCore } from 'swiper/react';
import classNames from 'classnames';
import useSwiper from './use-swiper';
import ArrowPrev from '../../../assets/arrow-prev.svg';
import ArrowNext from '../../../assets/arrow-next.svg';

import {
  controlButton, next, prev, root,
} from './Swiper.module.css';

export interface MainSwiperProps extends PropsWithChildren {
  swiper?: Swiper;
}

export default function MainSwiper({ swiper, children }: MainSwiperProps) {
  const controlSwiper = useSwiper();

  return (
    <SwiperCore
      modules={[Autoplay, Thumbs]}
      thumbs={{ swiper }}
      speed={400}
      className={root}
      onSwiper={controlSwiper.setSwiper}
      autoplay
    >
      <button
        type="button"
        className={classNames(controlButton, prev)}
        onClick={() => controlSwiper.swiper?.slidePrev()}
      >
        <ArrowPrev />
      </button>
      {children}
      <button
        type="button"
        className={classNames(controlButton, next)}
        onClick={() => controlSwiper.swiper?.slideNext()}
      >
        <ArrowNext />
      </button>
    </SwiperCore>
  );
}
