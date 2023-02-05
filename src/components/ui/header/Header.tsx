import React from 'react';
import classNames from 'classnames';
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import Logo from '../logo/Logo';

import * as styles from './Common.module.css';

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
        <Logo inverse={transparent} />
      </Link>
      <nav className={styles.nav}>
        {NAVIGATION_ITEMS.map(({ to, label }) => (
          <AnchorLink key={to} to={to} className={styles.headerLink} stripHash>
            {label}
          </AnchorLink>
        ))}
      </nav>
    </header>
  );
}
