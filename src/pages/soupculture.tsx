import * as React from 'react';
import PageTitle from '../components/page-title/PageTitle';
import Heading from '../components/text/heading/Heading';
import Layout from '../components/ui/layout/Layout';

import SoupCultureIcon from '../assets/soup-culture-icon.svg';

function SoupculturePage() {
  return (
    <Layout>
      <SoupCultureIcon />
      <Heading variant="normal">Soupculture</Heading>
    </Layout>
  );
}

export default SoupculturePage;

export function Head() {
  return <PageTitle>Soupculture</PageTitle>;
}
