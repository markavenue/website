import classNames from 'classnames';
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import { SwiperSlide } from 'swiper/react';
import Article from '../text/article/Article';
import Container from '../ui/layout/Container';
import Description from '../text/article/Description';
import H1 from '../text/article/H1';
import Paragraph from '../text/article/Paragraph';

import { video, videoInnerWrapper } from './Common.module.css';
import MainSwiper from '../ui/swiper/MainSwiper';
import useSwiper from '../ui/swiper/use-swiper';
import ThumbSwiper from '../ui/swiper/ThumbSwiper';

const IMAGES = [
  <StaticImage src="../../assets/soupculture-1.png" alt="" />,
  <StaticImage src="../../assets/soupculture-2.png" alt="" />,
  <StaticImage src="../../assets/soupculture-3.png" alt="" />,
  <StaticImage src="../../assets/soupculture-4.png" alt="" />,
  <StaticImage src="../../assets/soupculture-5.png" alt="" />,
  <StaticImage src="../../assets/soupculture-6.png" alt="" />,
];

const THUMBS = [
  <StaticImage
    src="../../assets/soupculture-1.png"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/soupculture-2.png"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/soupculture-3.png"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/soupculture-4.png"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/soupculture-5.png"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
  <StaticImage
    src="../../assets/soupculture-6.png"
    alt=""
    width={100}
    height={100}
    objectFit="cover"
  />,
];

export default function Content() {
  const { swiper, setSwiper } = useSwiper();
  return (
    <section>
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
          <Paragraph>
            Koncept polievky v poháriku alebo bezodpadový street food
            Soupculture prišiel do Bratislavy pred dvoma rokmi. Pri ich
            začiatkoch sme stáli aj my. Vytvorili sme úspešnú reklamnú kampaň,
            vďaka ktorej sa značka Soupculture dostala medzi relevantnú cieľovú
            skupinu. Taktiež sme zapojili do kampane známych influencerov,
            vytvorili sme niekoľko súťaží a navrhli dizajn vernostným kartičkám.
            Dnes sa spolu so Soupculture tešíme veľkej obľube tejto novej
            polievkovej kultúry.
          </Paragraph>
          <dl>
            <Description title="Klient:">Soupculture</Description>
            <Description title="Rok:">2021</Description>
            <Description title="Úloha:">
              reklamná Kampaň, influencer marketing
            </Description>
          </dl>
        </Article>
      </Container>
      <Container rtl>
        <div className={video}>
          <LiteYouTubeEmbed
            cookie
            id="EE4NJbuIHX0"
            poster="maxresdefault"
            title="Soupculture_Promo"
            wrapperClass={classNames('yt-lite', videoInnerWrapper)}
          />
        </div>
        <H1>Promo video</H1>
      </Container>
    </section>
  );
}
