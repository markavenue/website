import * as React from 'react';
import PageTitle from '../components/page-title/PageTitle';
import Heading from '../components/text/heading/Heading';
import Layout from '../components/ui/layout/Layout';

function HateFreeZonePage() {
  return (
    <Layout>
      <Heading variant="normal">Hate-Free Zone</Heading>
    </Layout>
  );
}

export default HateFreeZonePage;

export function Head() {
  return <PageTitle>Hate-Free Zone</PageTitle>;
}
