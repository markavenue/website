import React from 'react';
import Article from '../text/article/Article';
import Description from '../text/article/Description';
import H1 from '../text/article/H1';
import Paragraph from '../text/article/Paragraph';
import Container from '../ui/layout/Container';
import Swiper from './Swiper';

export default function Content() {
  return (
    <Container>
      <Swiper />
      <Article>
        <H1>O projekte</H1>
        <Paragraph>
          Apartmea je spoločnosť, ktorá zjednodušuje zákaznícku cestu k
          rezervácii apartmánov. Dostali sme za úlohu vytvoriť funkčný brand pre
          rakúsky trh. Okrem vizuálnej identity sme sa zaoberali aj tvorbou
          namingu.
        </Paragraph>
        <dl>
          <Description title="Klient:">Apartmea</Description>
          <Description title="Rok:">2021</Description>
          <Description title="Úloha:">branding, naming</Description>
        </dl>
      </Article>
    </Container>
  );
}
