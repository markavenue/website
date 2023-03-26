import React, { PropsWithChildren } from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import LinkToTop from '../link-to-top/LinkToTop';
import LinkToTopAnchor from '../link-to-top/LinkToTopAnchor';

import { main } from './Layout.module.css';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <LinkToTopAnchor />
      <Header />
      <main className={main}>{children}</main>
      <Footer />
      <LinkToTop />
    </>
  );
}
