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
            Soupculture prišiel do bratislavy pred dvoma rokmi. Pri ich
            začiatkoch Sme stáli aj my. Podieľali sme sa nielen na tvorbe ich
            prvých príspevkov Na sociálnych sieťach, ale vytvorili sme aj
            úspešnú reklamnú kampaň a Vďaka nej soupculture spoznalo množstvo
            ľudí z cieľovej skupiny. Taktiež Sme zapojili známych influencerov,
            vymysleli súťaž čI navrhli dizajn Vernostným kartičkám. Dnes sa
            tešíme veľkej obľube a popularite tejto Polievkovej kultúry.
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
