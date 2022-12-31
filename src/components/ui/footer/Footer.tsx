import React, { forwardRef } from 'react';

import Section from '../section/Section';
import Heading from '../../text/heading/Heading';

import * as styles from './Common.module.css';
import FooterLink from './FooterLink';

import InstagramIcon from '../../../assets/instagram.svg';
import LinkedInIcon from '../../../assets/linked-in.svg';
import FacebookIcon from '../../../assets/facebook.svg';
import FooterIconLink from './FooterIconLink';

export default forwardRef<HTMLElement>((_, ref) => (
  <footer ref={ref}>
    <Section variant="dark" className={styles.primaryRow}>
      <div>
        <Heading variant="yellow">Zavolajte</Heading>
        <FooterLink href="tel:+421940880930">+421 940 880 930</FooterLink>
      </div>
      <div>
        <Heading variant="yellow">Napíšte</Heading>
        <FooterLink href="mailto:info@marksoup.sk">info@marksoup.sk</FooterLink>
      </div>
    </Section>
    <Section variant="dark" className={styles.secondaryRow}>
      <div>Mark Avenue 2022</div>
      <div  className={styles.socials}>
        <FooterIconLink href="#TODO">
          <FacebookIcon />
        </FooterIconLink>
        <FooterIconLink href="#TODO">
          <InstagramIcon />
        </FooterIconLink>
        <FooterIconLink href="#TODO">
          <LinkedInIcon />
        </FooterIconLink>
      </div>
    </Section>
  </footer>
));
