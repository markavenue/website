import React from 'react';
import Article from '../text/article/Article';
import Description from '../text/article/Description';
import Paragraph from '../text/article/Paragraph';
import Container from '../ui/layout/Container';

import Swiper from './Swiper';
import H1 from '../text/article/H1';

export default function Content() {
  return (
    <Container>
      <Swiper />
      <Article>
        <H1>O projekte</H1>
        <Paragraph>
          Vytvára sa komunita milovníkov anime, hráčov a geekov. Od fanúšikov
          pre fanúšikov. Quest bar je jedinečný anime-herný bar v trnave, ktorý
          si zaslúžil nový brand.
        </Paragraph>
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
