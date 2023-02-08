import React from 'react';
import Content from '../components/frango/Content';
import Heading from '../components/text/heading/Heading';
import Layout from '../components/ui/layout/Layout';
import PageTitle from '../components/page-title/PageTitle';

function FrangoPage() {
  return (
    <Layout>
      <Heading variant="normal">Frango</Heading>
      <Content />
    </Layout>
  );
}

export default FrangoPage;

export function Head() {
  return <PageTitle>Frango</PageTitle>;
}
