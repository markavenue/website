import React from 'react';

import * as styles from './Common.module.css';
import MarkAvenueVideo from '../../../assets/mark-avenue-video.mp4';
import Header from '../../ui/header/Header';

import ArrowDownIcon from '../../../assets/arrow-down-icon.svg';
import ServicesTabs from '../services-tabs/ServicesTabs';

export default function HeroBanner() {
  return (
    <div className={styles.container}>
      <video autoPlay muted loop className={styles.video}>
        <source src={MarkAvenueVideo} type="video/mp4" />
      </video>
      <div className={styles.overlay} />
      <div className={styles.wrapper}>
        <Header />
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
          <div id="services" />
          <ServicesTabs />
        </div>
      </div>
    </div>
  );
}
