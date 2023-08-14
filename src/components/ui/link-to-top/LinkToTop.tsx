import React from 'react';
import AnchorLink from '../achor-link/AnchorLink';
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
