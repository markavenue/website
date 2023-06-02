import { graphql, useStaticQuery } from 'gatsby';
import React, { forwardRef } from 'react';
import Heading from '../../text/heading/Heading';
import FacebookIcon from '../../../assets/facebook.svg';
import FooterIconLink from './FooterIconLink';
import FooterLink from './FooterLink';
import InstagramIcon from '../../../assets/instagram.svg';
import LinkedInIcon from '../../../assets/linked-in.svg';
import Section from '../section/Section';
import { SITE_TITLE } from '../../../const/site-metadata';

import { primaryRow, secondaryRow, socials } from './Common.module.css';

interface SiteData {
  site: {
    buildTime: string;
  };
}

export default forwardRef<HTMLElement>((_, ref) => {
  const data = useStaticQuery<SiteData>(graphql`
    query {
      site {
        buildTime(formatString: "YYYY")
      }
    }
  `);

  return (
    <footer ref={ref}>
      <Section variant="dark" className={primaryRow}>
        <div>
          <Heading variant="yellow">Zavolajte</Heading>
          <FooterLink href="tel:+421940880930">+421 940 880 930</FooterLink>
        </div>
        <div>
          <Heading variant="yellow">Napíšte</Heading>
          <FooterLink href="mailto:info@markavenue.sk">
            info@markavenue.sk
          </FooterLink>
        </div>
      </Section>
      <Section variant="dark" className={secondaryRow}>
        <div>
          {SITE_TITLE} {data.site.buildTime}
        </div>
        <div className={socials}>
          <FooterIconLink href="https://www.facebook.com/markavenueagency">
            <FacebookIcon />
          </FooterIconLink>
          <FooterIconLink href="https://www.instagram.com/markavenueagency/">
            <InstagramIcon />
          </FooterIconLink>
          <FooterIconLink href="https://www.linkedin.com/company/mark-avenue/">
            <LinkedInIcon />
          </FooterIconLink>
        </div>
      </Section>
    </footer>
  );
});
