import React, { ReactNode } from 'react';
import classNames from 'classnames';
import Heading from '../../text/heading/Heading';
import Paragraph from '../../text/paragraph/Paragraph';

import * as styles from './Hero.module.css';
import Link from '../link/Link';

interface HeroProps {
  headline: string;
  description: string;
  icon: ReactNode;
  rtl?: boolean;
}

export default function Hero({
  headline,
  description,
  icon,
  rtl = false,
}: HeroProps) {
  return (
    <div className={classNames(styles.hero, rtl && styles.rtl)}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.content}>
        <Heading>{headline}</Heading>
        <Paragraph>{description}</Paragraph>
        <Link to="/blog">Viac o projekte</Link>
      </div>
    </div>
  );
}
