import React from 'react';
import Content from '../components/soupculture/Content';
import Heading from '../components/text/heading/Heading';
import Layout from '../components/ui/layout/Layout';
import PageTitle from '../components/page-title/PageTitle';

function SoupculturePage() {
  return (
    <Layout>
      <Heading variant="normal">Soupculture</Heading>
      <Content />
    </Layout>
  );
}

export default SoupculturePage;

export function Head() {
  return <PageTitle>Soupculture</PageTitle>;
}
