import React from 'react';
import Article from '../text/article/Article';
import Container from '../ui/layout/Container';
import Description from '../text/article/Description';
import H1 from '../text/article/H1';
import Paragraph from '../text/article/Paragraph';
import Swiper from './Swiper';

import { video } from './Common.module.css';

export default function Content() {
  return (
    <section>
      <Container>
        <Swiper />
        <Article>
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
        <iframe
          className={video}
          width="1100"
          height="500"
          src="https://www.youtube.com/embed/EE4NJbuIHX0"
          title="YouTube video player"
          frameBorder="0"
          // eslint-disable-next-line max-len
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <H1>Promo video</H1>
      </Container>
    </section>
  );
}
