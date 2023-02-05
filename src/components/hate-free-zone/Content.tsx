import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Article from '../text/article/Article';
import Description from '../text/article/Description';
import H1 from '../text/article/H1';
import Paragraph from '../text/article/Paragraph';
import Container from '../ui/layout/Container';
import Row from '../ui/layout/Row';

import HateFreeVideo1 from '../../assets/hate-free-video-1.mp4';
import HateFreeVideo2 from '../../assets/hate-free-video-2.mp4';
import Video from '../ui/video/Video';
import * as styles from './Common.module.css';

export default function Content() {
  return (
    <>
      <Container>
        <StaticImage src="../../assets/hate-free-1.png" alt="" />
        <Article>
          <dl>
            <Description title="Klient:">Islam online</Description>
            <Description title="Rok:">2022</Description>
            <Description title="Úloha:">
              reklamná kampaň, vizuálna identita
            </Description>
          </dl>
          <Paragraph>
            Islamská nadácia na Slovensku už viac ako 23 rokov buduje mosty
            porozumenia – jej členovia prepájajú a zbližujú cudzinecké a
            moslimské minority so slovenskou verejnosťou cez otvorený dialóg.
          </Paragraph>
          <Paragraph>
            Oslovili nás s požiadavkou na tvorbu vizuálnej identity a
            celoslovenskej kampane Hate-Free Zone. Cieľom kampane je
            zmierňovanie nenávistných prejavov a negatívnych stereotypov.
          </Paragraph>
        </Article>
      </Container>
      <div className={styles.grid}>
        <Video className={styles.video} width={400} src={HateFreeVideo1} />
        <Video className={styles.video} width={400} src={HateFreeVideo2} />
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
