import React, { ReactNode } from 'react';
import classNames from 'classnames';
import Heading from '../../text/heading/Heading';
import Paragraph from '../../text/paragraph/Paragraph';
import Link from '../link/Link';

import * as styles from './Hero.module.css';

interface HeroProps {
  linkTo: string;
  headline: string;
  description: string;
  icon: ReactNode;
  rtl?: boolean;
}

export default function Hero({
  linkTo,
  headline,
  description,
  icon,
  rtl = false,
}: HeroProps) {
  return (
    <div className={classNames(styles.hero, rtl && styles.rtl)}>
      <div className={styles.icon}>
        <Link to={linkTo} variant="image">
          {icon}
        </Link>
      </div>
      <div className={styles.content}>
        <Heading>{headline}</Heading>
        <Paragraph className={styles.paragraph}>{description}</Paragraph>
        <Link to={linkTo}>Viac o projekte</Link>
      </div>
    </div>
  );
}
