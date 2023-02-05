import * as React from 'react';
import Content from '../components/hate-free-zone/Content';
import PageTitle from '../components/page-title/PageTitle';
import Heading from '../components/text/heading/Heading';
import Layout from '../components/ui/layout/Layout';

function HateFreeZonePage() {
  return (
    <Layout>
      <Heading variant="normal">Hate-Free Zone</Heading>
      <Content />
    </Layout>
  );
}

export default HateFreeZonePage;

export function Head() {
  return <PageTitle>Hate-Free Zone</PageTitle>;
}
