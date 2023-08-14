import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { SwiperSlide } from 'swiper/react';
import Article from '../text/article/Article';
import Container from '../ui/layout/Container';
import Description from '../text/article/Description';
import HateFreeVideo1 from '../../assets/hate-free-video-1.mp4';
import HateFreeVideo2 from '../../assets/hate-free-video-2.mp4';
import MainSwiper from '../ui/swiper/MainSwiper';
import Paragraph from '../text/article/Paragraph';
import ThumbSwiper from '../ui/swiper/ThumbSwiper';
import useSwiper from '../ui/swiper/use-swiper';
import Video from '../ui/video/Video';

import { grid, video } from './Common.module.css';

const IMAGES = [
  <StaticImage src="../../assets/hate-free-1.png" alt="" />,
  <StaticImage src="../../assets/hate-free-2.png" alt="" />,
  <StaticImage src="../../assets/hate-free-3.png" alt="" />,
  <StaticImage src="../../assets/hate-free-4.png" alt="" />,
  <StaticImage src="../../assets/hate-free-5.png" alt="" />,
];

const THUMBS = [
  <StaticImage
    src="../../assets/hate-free-1.png"
    width={100}
    height={100}
    objectFit="cover"
    alt=""
  />,
  <StaticImage
    src="../../assets/hate-free-2.png"
    width={100}
    height={100}
    objectFit="cover"
    alt=""
  />,
  <StaticImage
    src="../../assets/hate-free-3.png"
    width={100}
    height={100}
    objectFit="cover"
    alt=""
  />,
  <StaticImage
    src="../../assets/hate-free-4.png"
    width={100}
    height={100}
    objectFit="cover"
    alt=""
  />,
  <StaticImage
    src="../../assets/hate-free-5.png"
    width={100}
    height={100}
    objectFit="cover"
    alt=""
  />,
];

export const DESCRIPTION = `\
Islamská nadácia na Slovensku už viac ako 23 rokov buduje mosty porozumenia – \
jej členovia prepájajú a zbližujú cudzinecké a moslimské minority so \
slovenskou verejnosťou cez otvorený dialóg.\
`;

export default function Content() {
  const { swiper, setSwiper } = useSwiper();

  return (
    <>
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
          <dl>
            <Description title="Klient:">Islam online</Description>
            <Description title="Rok:">2022</Description>
            <Description title="Úloha:">
              reklamná kampaň, vizuálna identita
            </Description>
          </dl>
          <Paragraph>{DESCRIPTION}</Paragraph>
          <Paragraph>
            Oslovili nás s požiadavkou na tvorbu vizuálnej identity a
            celoslovenskej kampane Hate-Free Zone. Cieľom kampane je
            zmierňovanie nenávistných prejavov a negatívnych stereotypov.
          </Paragraph>
        </Article>
      </Container>
      <div className={grid}>
        <Video className={video} width={400} src={HateFreeVideo1} />
        <Video className={video} width={400} src={HateFreeVideo2} />
        <Article>
          <Paragraph>
            Kampaň zobrazuje to, že aj moslimovia chcú byť súčasťou spoločenskej
            štruktúry a prinášať hodnotu.
          </Paragraph>
          <Paragraph>
            Do kampane sa môžu zapojiť akékoľvek verejné inštitúcie, školy, či
            súkromné podniky formou nálepky na vstupe – pre označenie priestoru
            ako Hate-Free Zone, čiže zóny bez nenávisti.
          </Paragraph>
        </Article>
      </div>
    </>
  );
}
