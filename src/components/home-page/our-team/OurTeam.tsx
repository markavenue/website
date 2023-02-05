import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Heading from '../../text/heading/Heading';
import Paragraph from '../../text/paragraph/Paragraph';
import Section from '../../ui/section/Section';

import * as styles from './OurTeam.module.css';

export default React.forwardRef<HTMLDivElement>((_, ref) => (
  <Section ref={ref} variant="dark" className={styles.ourTeam}>
    <Heading>Náš tím</Heading>
    <Paragraph className={styles.paragraph}>
      Interný tím sa skladá z 3 tvorcov, ktorí majú niekoľkoročné skúsenosti s
      marketingom a kreatívou. Riadime sieť externých tvorcov, čo nám umožňuje
      vyberať správne talenty pre daný projekt. Spolupracujeme s osvedčenými
      tvorcami. Nie sme ničím limitovaní.
    </Paragraph>
    <div className={styles.row}>
      <div>
        <StaticImage
          className={styles.image}
          src="../../../assets/andrey.png"
          alt="Mgr. Andrey Kushnarevych"
        />
        <p>
          <strong>Mgr. Andrey Kushnarevych</strong>
        </p>
        <p>Brand strategy & online specialist</p>
      </div>
      <div>
        <StaticImage
          className={styles.image}
          src="../../../assets/jan.png"
          alt="Bc. Ján Ďuris"
        />
        <p>
          <strong>Bc. Ján Ďuris</strong>
        </p>
        <p>Head of creativity</p>
      </div>
      <div>
        <StaticImage
          className={styles.image}
          src="../../../assets/kristina.png"
          alt="Kristína Bartfay"
        />
        <p>
          <strong>Kristína Bartfay</strong>
        </p>
        <p>Art director</p>
      </div>
    </div>
  </Section>
));
