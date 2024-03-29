import React from 'react';
import AnchorLink from '../../ui/achor-link/AnchorLink';
import ArrowDownIcon from '../../../assets/arrow-down-icon.svg';
import Header from '../../ui/header/Header';
import MarkAvenueVideo from '../../../assets/mark-avenue-video.mp4';
import ServicesTabs from '../services-tabs/ServicesTabs';

import {
  accent,
  arrow,
  arrowLink,
  container,
  content,
  headline,
  overlay,
  subtitle,
  video,
  wrapper,
} from './Common.module.css';

export const SUBTITLE = `\
Sme kreatívna marketingová agentúra, ktorej cieľom je prepájať mosty medzi \
zákazníkmi a značkami v digitálnom prostredí. Tvoríme reklamy a vyvíjame brand.\
`;

export default function HeroBanner() {
  return (
    <div className={container}>
      <video autoPlay muted loop className={video}>
        <source src={MarkAvenueVideo} type="video/mp4" />
      </video>
      <div className={overlay} />
      <div className={wrapper}>
        <Header transparent />
        <div className={content}>
          <h1 className={headline}>
            Marketing
            <br />
            for
            <span className={accent}>&nbsp;better</span>
            <br />
            <span className={accent}>tomorrow</span>
          </h1>
          <span className={subtitle}>{SUBTITLE}</span>
          <div className={arrow}>
            <AnchorLink
              gatsbyLinkProps={{
                'aria-label': 'Prejdi na služby',
              }}
              to="/#services"
              className={arrowLink}
            >
              <ArrowDownIcon />
            </AnchorLink>
          </div>
          <div id="services" />
          <ServicesTabs />
        </div>
      </div>
    </div>
  );
}
