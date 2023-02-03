import React, { PropsWithChildren } from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';

import * as styles from './Layout.module.css';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
