import React, { PropsWithChildren } from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import LinkToTop from '../link-to-top/LinkToTop';
import LinkToTopAnchor from '../link-to-top/LinkToTopAnchor';

import { main } from './Layout.module.css';

interface LayoutProps {
  contentClassName?: string;
  header?: boolean;
}

export default function Layout({
  children,
  contentClassName = main,
  header = true,
}: PropsWithChildren<LayoutProps>) {
  return (
    <>
      <LinkToTopAnchor />
      {header && <Header />}
      <main className={contentClassName || undefined}>{children}</main>
      <Footer />
      <LinkToTop />
    </>
  );
}
