import * as React from 'react';
import PageTitle from '../components/page-title/PageTitle';
import Footer from '../components/ui/footer/Footer';
import Header from '../components/ui/header/Header';

function SoupculturePage() {
  return (
    <main>
      <Header />
      <Footer />
    </main>
  );
}

export default SoupculturePage;

export function Head() {
  return <PageTitle>Soupculture</PageTitle>;
}
