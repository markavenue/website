import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Article from '../text/article/Article';
import Blockquote from '../text/article/Blockquote';
import Description from '../text/article/Description';
import H1 from '../text/article/H1';
import H2 from '../text/article/H2';
import Paragraph from '../text/article/Paragraph';
import CenterBox from '../ui/layout/CenterBox';
import Container from '../ui/layout/Container';
import Row from '../ui/layout/Row';

import { frangoIcon, grid } from './Common.module.css';

export default function Content() {
  return (
    <>
      <Container>
        <StaticImage src="../../assets/frango-1.jpeg" alt="" />
        <Article>
          <H1>O projekte</H1>
          <Paragraph>
            Frango je slovenská sieť reštaurácií rýchleho občerstvenia, ktorá sa
            Špecializuje na chutné a šťavnaté jedlá z kuracieho mäska. Vďaka
            Spolupráci s nami získali úplne novú, originálnu vizuálnu identitu,
            Ktorou táto sieť púta pozornosť ľudí vo foodcourte na nivách.
          </Paragraph>
          <dl>
            <Description title="Klient:">Frango</Description>
            <Description title="Rok:">2022</Description>
            <Description title="Úloha:">
              brand development, vizuálna identita
            </Description>
          </dl>
        </Article>
      </Container>
      <Container rtl>
        <StaticImage src="../../assets/frango-2.jpeg" alt="" />
        <Article>
          <H2>Frango kedysi</H2>
          <Paragraph>
            Prevádzka nemala vytvorený koncept značky. Značka nemala stanovenú
            primárnu cieľovú skupinu. Značka nemá stanovený komunikačný ani
            vizuálny štýl. Prevádzka pôsobí staromódne a zaostalo. Zanedbaná
            marketingová komunikácia.
          </Paragraph>
        </Article>
      </Container>
      <section>
        <CenterBox>
          <H2>Frango dnes!</H2>
        </CenterBox>
        <CenterBox>
          <StaticImage
            className={frangoIcon}
            src="../../assets/frango-icon.png"
            alt=""
            objectFit="contain"
          />
        </CenterBox>
        <div className={grid}>
          <StaticImage
            src="../../assets/frango-icon-1.png"
            alt=""
            objectFit="contain"
          />
          <StaticImage
            src="../../assets/frango-icon-2.png"
            alt=""
            objectFit="contain"
          />
          <StaticImage
            src="../../assets/frango-icon-3.png"
            alt=""
            objectFit="contain"
          />
          <StaticImage
            src="../../assets/frango-icon-4.png"
            alt=""
            objectFit="contain"
          />
          <StaticImage
            src="../../assets/frango-icon-5.png"
            alt=""
            objectFit="contain"
          />
          <StaticImage
            src="../../assets/frango-icon-6.png"
            alt=""
            objectFit="contain"
          />
          <StaticImage
            src="../../assets/frango-icon-7.png"
            alt=""
            objectFit="contain"
          />
          <StaticImage
            src="../../assets/frango-icon-8.png"
            alt=""
            objectFit="contain"
          />
        </div>
        <Row>
          <div>
            <H1>Novopečená koncepcia</H1>
            <Paragraph>
              Pred samotným rebrandom sme vykonávali rozličné analýzy, ktoré nám
              napomohli v positioningu novej rebrandovanej značky. Nová
              koncepcia zahŕňala zmeny v produkte, jeho forme, zmeny komunikácie
              a vizuálnej identity. Všetko sme prispôsobili vybranej cieľovej
              skupine – mladí ľudia vo veku 16 – 25 rokov.
            </Paragraph>
          </div>
          <div>
            <H1>Moderný dizajn</H1>
            <Paragraph>
              Skupinu mladých zákazníkov nezaujmete jednoducho. V rámci dizajnu
              sme starostlivo vyberali farebnú škálu a vytvárali vizuál. Celkový
              brand development bol založený na dlhodobejšom skúmaní.
            </Paragraph>
          </div>
        </Row>
        <Container rtl>
          <StaticImage
            src="../../assets/frango-4.png"
            alt=""
            objectFit="contain"
          />
          <StaticImage
            src="../../assets/frango-3.png"
            alt=""
            objectFit="contain"
          />
        </Container>
        <CenterBox>
          <Article>
            <H1>Nový výklad</H1>
            <Paragraph>
              Frango získalo miesto vo foodcourte na Nivách a v rámci
              novopečenej identity potrebovalo aj moderný dizajn prevádzky.
              Získali sme možnosť pracovať aj na tejto úlohe a vytvorili sme
              niekoľko funkčných návrhov, z ktorých si klient následne vybral.
            </Paragraph>
          </Article>
        </CenterBox>
        <StaticImage
          src="../../assets/frango-5.png"
          alt=""
          objectFit="contain"
        />
        <Blockquote>
          Tešíme sa zo spolupráce a&nbsp;radi budeme Frangu nápomocní aj
          naďalej.
        </Blockquote>
      </section>
    </>
  );
}
