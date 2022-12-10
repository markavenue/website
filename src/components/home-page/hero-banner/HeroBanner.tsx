import React, { useRef } from 'react';

import * as styles from './HeroBanner.module.css';
import MarkAvenueVideo from '../../../assets/mark-avenue-video.mp4';
import Header, { HeaderProps } from '../../ui/header/Header';

import ArrowDownIcon from '../../../assets/arrow-down-icon.svg';

interface HeroBannerProps {
  refs: Omit<HeaderProps['refs'], 'services'>;
}

export default function HeroBanner({ refs }: HeroBannerProps) {
  const servicesRef = useRef<HTMLDivElement>(null);
  return (
    <div className={styles.container}>
      <video autoPlay muted loop className={styles.video}>
        <source src={MarkAvenueVideo} type="video/mp4" />
      </video>
      <div className={styles.overlay} />
      <div className={styles.wrapper}>
        <Header refs={{ ...refs, services: servicesRef }} />
        <div className={styles.content}>
          <h1 className={styles.headline}>
            Marketing
            <br />
            for
            <span className={styles.accent}>better</span>
            <br />
            <span className={styles.accent}>tomorrow</span>
          </h1>
          <span className={styles.subtitle}>
            Sme kreatívna marketingová agentúra, ktorej cieľom je prepájať mosty
            medzi zákazníkmi a značkami v digitálnom prostredí. Tvoríme reklamy
            a vyvíjame brand.
          </span>
          <div className={styles.arrow}>
            <button type="button" className={styles.arrowLink}>
              <ArrowDownIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
