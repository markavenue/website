import React from 'react';
import { Link } from 'gatsby';

import classNames from 'classnames';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import * as styles from './Common.module.css';
import Logo from '../logo/Logo';

export interface HeaderProps {
  transparent?: boolean;
}

const NAVIGATION_ITEMS = [
  {
    to: '/#services',
    label: 'Služby',
  },
  {
    to: '/#portfolio',
    label: 'Portfólio',
  },
  {
    to: '/#aboutUs',
    label: 'O nás',
  },
  {
    to: '/#contact',
    label: 'Kontakt',
  },
] as const;

export default function Header({ transparent = false }: HeaderProps) {
  return (
    <header
      className={classNames(styles.header, transparent && styles.transparent)}
    >
      <Link to="/" className={styles.logoLink}>
        <Logo />
      </Link>
      <div className={styles.menu}>
        {NAVIGATION_ITEMS.map(({ to, label }) => (
          <AnchorLink
            key={to}
            to={to}
            className={styles.headerButton}
            stripHash
          >
            {label}
          </AnchorLink>
        ))}
      </div>
    </header>
  );
}
