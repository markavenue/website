import { graphql, Link, useStaticQuery } from 'gatsby';
import React, { forwardRef } from 'react';
import Heading from '../../text/heading/Heading';
import FacebookIcon from '../../../assets/facebook.svg';
import FooterIconLink from './FooterIconLink';
import InstagramIcon from '../../../assets/instagram.svg';
import LinkedInIcon from '../../../assets/linked-in.svg';
import PhoneLink from '../link/PhoneLink';
import EmailLink from '../link/EmailLink';
import Section from '../section/Section';
import {
  CONTACT_EMAIL_ADDRESS,
  CONTACT_PHONE_NUMBER,
} from '../../../const/contact';
import { COOKIE_POLICY_PAGE, PRIVACY_POLICY_PAGE } from '../../../const/routes';
import { SITE_TITLE } from '../../../const/site-metadata';

import {
  footerLink,
  primaryRow,
  secondaryRow,
  socials,
} from './Common.module.css';

export default forwardRef<HTMLElement>((_, ref) => {
  const data = useStaticQuery<Queries.FooterQuery>(graphql`
    query Footer {
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
          <PhoneLink className={footerLink} number={CONTACT_PHONE_NUMBER} />
        </div>
        <div>
          <Heading variant="yellow">Napíšte</Heading>
          <EmailLink address={CONTACT_EMAIL_ADDRESS} className={footerLink} />
        </div>
      </Section>
      <Section variant="dark" className={secondaryRow}>
        <div>
          {SITE_TITLE} {data.site?.buildTime}
        </div>
        <Link className={footerLink} to={COOKIE_POLICY_PAGE}>
          Cookies
        </Link>
        <Link className={footerLink} to={PRIVACY_POLICY_PAGE}>
          Súkromie
        </Link>
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
