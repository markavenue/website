import { useState } from 'react';
import Swiper from 'swiper';

export default function useSwiper() {
  const [swiper, setSwiper] = useState<Swiper | undefined>(undefined);
  return { swiper, setSwiper };
}
