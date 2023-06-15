import { AnchorLink } from 'gatsby-plugin-anchor-links';
import React from 'react';
import ArrowUpCircle from '../../../assets/arrow-up-circle.svg';
import LINK_TO_TOP_ANCHOR from './const';
import { linkToTop } from './LinkToTop.module.css';

export default function LinkToTop() {
  return (
    <AnchorLink
      gatsbyLinkProps={{
        'aria-label': 'Prejdi na vrch',
      }}
      to={`#${LINK_TO_TOP_ANCHOR}`}
      className={linkToTop}
    >
      <ArrowUpCircle />
    </AnchorLink>
  );
}
