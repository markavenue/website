import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { SwiperSlide } from 'swiper/react';
import Article from '../text/article/Article';
import Description from '../text/article/Description';
import H1 from '../text/article/H1';
import Paragraph from '../text/article/Paragraph';
import Container from '../ui/layout/Container';
import MainSwiper from '../ui/swiper/MainSwiper';
import ThumbSwiper from '../ui/swiper/ThumbSwiper';
import useSwiper from '../ui/swiper/use-swiper';

const IMAGES = [
  <StaticImage src="../../assets/quest-bar-1.jpeg" alt="" />,
  <StaticImage src="../../assets/quest-bar-2.jpeg" alt="" />,
  <StaticImage src="../../assets/quest-bar-3.jpeg" alt="" />,
  <StaticImage src="../../assets/quest-bar-4.jpeg" alt="" />,
  <StaticImage src="../../assets/quest-bar-5.jpeg" alt="" />,
  <StaticImage src="../../assets/quest-bar-6.jpeg" alt="" />,
  <StaticImage src="../../assets/quest-bar-7.jpeg" alt="" />,
  <StaticImage src="../../assets/quest-bar-8.jpeg" alt="" />,
  <StaticImage src="../../assets/quest-bar-9.jpeg" alt="" />,
  <StaticImage src="../../assets/quest-bar-10.jpeg" alt="" />,
  <StaticImage src="../../assets/quest-bar-11.jpeg" alt="" />,
  <StaticImage src="../../assets/quest-bar-12.jpeg" alt="" />,
  <StaticImage src="../../assets/quest-bar-13.jpeg" alt="" />,
  <StaticImage src="../../assets/quest-bar-14.jpeg" alt="" />,
  <StaticImage src="../../assets/quest-bar-15.jpeg" alt="" />,
  <StaticImage src="../../assets/quest-bar-16.jpeg" alt="" />,
  <StaticImage src="../../assets/quest-bar-17.jpeg" alt="" />,
  <StaticImage src="../../assets/quest-bar-18.jpeg" alt="" />,
  <StaticImage src="../../assets/quest-bar-19.jpeg" alt="" />,
];

const THUMBS = [
  <StaticImage
    src="../../assets/quest-bar-1.jpeg"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/quest-bar-2.jpeg"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/quest-bar-3.jpeg"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/quest-bar-4.jpeg"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/quest-bar-5.jpeg"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/quest-bar-6.jpeg"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/quest-bar-7.jpeg"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/quest-bar-8.jpeg"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/quest-bar-9.jpeg"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/quest-bar-10.jpeg"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/quest-bar-11.jpeg"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/quest-bar-12.jpeg"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/quest-bar-13.jpeg"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/quest-bar-14.jpeg"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/quest-bar-15.jpeg"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/quest-bar-16.jpeg"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/quest-bar-17.jpeg"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/quest-bar-18.jpeg"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/quest-bar-19.jpeg"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
];

export const DESCRIPTION = `\
Vytvára sa komunita milovníkov anime, hráčov a geekov. Od fanúšikov pre \
fanúšikov. Quest bar je jedinečný anime-herný bar v trnave, ktorý si zaslúžil \
nový brand.\
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
          <Description title="Klient:">Quest Bar</Description>
          <Description title="Rok:">2021</Description>
          <Description title="Úloha:">
            branding, graphic design, social newtorks management
          </Description>
        </dl>
      </Article>
    </Container>
  );
}
