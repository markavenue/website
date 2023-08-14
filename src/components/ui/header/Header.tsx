import React from 'react';
import classNames from 'classnames';
import { Link } from 'gatsby';
import AnchorLink from '../achor-link/AnchorLink';
import Logo from '../logo/Logo';

import {
  header,
  headerLink,
  logoLink,
  nav,
  transparent as transparentClassName,
} from './Common.module.css';

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
    <header className={classNames(header, transparent && transparentClassName)}>
      <Link to="/" className={logoLink}>
        <Logo inverse={transparent} />
      </Link>
      <nav className={nav}>
        {NAVIGATION_ITEMS.map(({ to, label }) => (
          <AnchorLink key={to} to={to} className={headerLink} stripHash>
            {label}
          </AnchorLink>
        ))}
      </nav>
    </header>
  );
}
