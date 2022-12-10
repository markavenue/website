import React, { RefObject } from 'react';
import { Link } from 'gatsby';

import * as styles from './Common.module.css';
import Logo from '../logo/Logo';
import HeaderButton from './HeaderButton';

export interface HeaderProps {
  refs: {
    services: RefObject<HTMLDivElement>;
    portfolio: RefObject<HTMLDivElement>;
    aboutUs: RefObject<HTMLDivElement>;
    contact: RefObject<HTMLDivElement>;
  };
}

export default function Header({ refs }: HeaderProps) {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logoLink}>
        <Logo />
      </Link>
      <div className={styles.menu}>
        <HeaderButton onClick={() => refs.services.current?.scrollIntoView()}>
          Služby
        </HeaderButton>
        <HeaderButton onClick={() => refs.portfolio.current?.scrollIntoView()}>
          Portfólio
        </HeaderButton>
        <HeaderButton onClick={() => refs.aboutUs.current?.scrollIntoView()}>
          O nás
        </HeaderButton>
        <HeaderButton onClick={() => refs.contact.current?.scrollIntoView()}>
          Kontakt
        </HeaderButton>
      </div>
    </header>
  );
}
