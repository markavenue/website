import * as React from 'react';
import PageTitle from '../components/page-title/PageTitle';
import Content from '../components/soupculture/Content';
import Heading from '../components/text/heading/Heading';
import Layout from '../components/ui/layout/Layout';

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
