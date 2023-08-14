import React from 'react';
import AnchorLink from '../achor-link/AnchorLink';
import ArrowUpCircle from '../../../assets/arrow-up-circle.svg';
import LINK_TO_TOP_ANCHOR from './const';
import { linkToTop } from './LinkToTop.module.css';

export default function LinkToTop() {
  const path = typeof window === 'undefined' ? '' : window.location.pathname;

  return (
    <AnchorLink
      gatsbyLinkProps={{
        'aria-label': 'Prejdi na vrch',
      }}
      to={`${path}#${LINK_TO_TOP_ANCHOR}`}
      className={linkToTop}
      stripHash
    >
      <ArrowUpCircle />
    </AnchorLink>
  );
}
