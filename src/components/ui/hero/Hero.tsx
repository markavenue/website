import React, { ReactNode } from 'react';
import classNames from 'classnames';
import Heading from '../../text/heading/Heading';
import Paragraph from '../../text/paragraph/Paragraph';
import Link from '../link/Link';
import {
  hero,
  rtl as rtlClassName,
  icon as iconClassName,
  content,
  paragraph,
} from './Hero.module.css';

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
    <div className={classNames(hero, rtl && rtlClassName)}>
      <div className={iconClassName}>
        <Link to={linkTo} variant="image">
          {icon}
        </Link>
      </div>
      <div className={content}>
        <Heading>{headline}</Heading>
        <Paragraph className={paragraph}>{description}</Paragraph>
        <Link to={linkTo}>Viac o projekte</Link>
      </div>
    </div>
  );
}
