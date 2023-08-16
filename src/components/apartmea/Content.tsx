import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { SwiperSlide } from 'swiper/react';
import Article from '../text/article/Article';
import Container from '../ui/layout/Container';
import Description from '../text/article/Description';
import H1 from '../text/article/H1';
import MainSwiper from '../ui/swiper/MainSwiper';
import Paragraph from '../text/article/Paragraph';
import ThumbSwiper from '../ui/swiper/ThumbSwiper';
import useSwiper from '../ui/swiper/use-swiper';

const IMAGES = [
  <StaticImage src="../../assets/apartmea-1.jpeg" alt="" loading="eager" />,
  <StaticImage src="../../assets/apartmea-2.jpeg" alt="" />,
  <StaticImage src="../../assets/apartmea-3.jpeg" alt="" />,
  <StaticImage src="../../assets/apartmea-4.jpeg" alt="" />,
  <StaticImage src="../../assets/apartmea-5.jpeg" alt="" />,
  <StaticImage src="../../assets/apartmea-6.jpeg" alt="" />,
  <StaticImage src="../../assets/apartmea-7.jpeg" alt="" />,
  <StaticImage src="../../assets/apartmea-8.jpeg" alt="" />,
  <StaticImage src="../../assets/apartmea-9.jpeg" alt="" />,
  <StaticImage src="../../assets/apartmea-10.jpeg" alt="" />,
  <StaticImage src="../../assets/apartmea-11.jpeg" alt="" />,
  <StaticImage src="../../assets/apartmea-12.jpeg" alt="" />,
  <StaticImage src="../../assets/apartmea-13.jpeg" alt="" />,
  <StaticImage src="../../assets/apartmea-14.jpeg" alt="" />,
  <StaticImage src="../../assets/apartmea-15.jpeg" alt="" />,
  <StaticImage src="../../assets/apartmea-16.jpeg" alt="" />,
  <StaticImage src="../../assets/apartmea-17.jpeg" alt="" />,
  <StaticImage src="../../assets/apartmea-18.jpeg" alt="" />,
  <StaticImage src="../../assets/apartmea-19.jpeg" alt="" />,
  <StaticImage src="../../assets/apartmea-20.jpeg" alt="" />,
  <StaticImage src="../../assets/apartmea-21.jpeg" alt="" />,
  <StaticImage src="../../assets/apartmea-22.jpeg" alt="" />,
  <StaticImage src="../../assets/apartmea-23.jpeg" alt="" />,
  <StaticImage src="../../assets/apartmea-24.jpeg" alt="" />,
  <StaticImage src="../../assets/apartmea-25.jpeg" alt="" />,
  <StaticImage src="../../assets/apartmea-26.jpeg" alt="" />,
  <StaticImage src="../../assets/apartmea-27.jpeg" alt="" />,
  <StaticImage src="../../assets/apartmea-28.jpeg" alt="" />,
  <StaticImage src="../../assets/apartmea-29.jpeg" alt="" />,
  <StaticImage src="../../assets/apartmea-30.jpeg" alt="" />,
];

const THUMBS = [
  <StaticImage
    src="../../assets/apartmea-1.jpeg"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/apartmea-2.jpeg"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/apartmea-3.jpeg"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/apartmea-4.jpeg"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/apartmea-5.jpeg"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/apartmea-6.jpeg"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/apartmea-7.jpeg"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/apartmea-8.jpeg"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/apartmea-9.jpeg"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/apartmea-10.jpeg"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/apartmea-11.jpeg"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/apartmea-12.jpeg"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/apartmea-13.jpeg"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/apartmea-14.jpeg"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/apartmea-15.jpeg"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/apartmea-16.jpeg"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/apartmea-17.jpeg"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/apartmea-18.jpeg"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/apartmea-19.jpeg"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/apartmea-20.jpeg"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/apartmea-21.jpeg"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/apartmea-22.jpeg"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/apartmea-23.jpeg"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/apartmea-24.jpeg"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/apartmea-25.jpeg"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/apartmea-26.jpeg"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/apartmea-27.jpeg"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/apartmea-28.jpeg"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/apartmea-29.jpeg"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/apartmea-30.jpeg"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
];

export const DESCRIPTION = `\
Apartmea je spoločnosť, ktorá zjednodušuje zákaznícku cestu k rezervácii \
apartmánov. Dostali sme za úlohu vytvoriť funkčný brand pre rakúsky trh. Okrem \
vizuálnej identity sme sa zaoberali aj tvorbou namingu.\
`;

export default function Content() {
  const { swiper, setSwiper } = useSwiper();

  return (
    <Container>
      <MainSwiper swiper={swiper}>
        {IMAGES.map((image, key) => (
          // eslint-disable-next-line react/no-array-index-key
          <SwiperSlide key={key}>{image}</SwiperSlide>
        ))}
      </MainSwiper>
      <Article>
        <ThumbSwiper setSwiper={setSwiper}>
          {THUMBS.map((image, key) => (
            // eslint-disable-next-line react/no-array-index-key
            <SwiperSlide key={key}>{image}</SwiperSlide>
          ))}
        </ThumbSwiper>
        <H1>O projekte</H1>
        <Paragraph>{DESCRIPTION}</Paragraph>
        <dl>
          <Description title="Klient:">Apartmea</Description>
          <Description title="Rok:">2021</Description>
          <Description title="Úloha:">branding, naming</Description>
        </dl>
      </Article>
    </Container>
  );
}
