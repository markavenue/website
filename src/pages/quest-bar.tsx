import * as React from 'react';
import PageTitle from '../components/page-title/PageTitle';
import Content from '../components/quest-bar/Content';
import Heading from '../components/text/heading/Heading';
import Layout from '../components/ui/layout/Layout';

function QuestBarPage() {
  return (
    <Layout>
      <Heading variant="normal">Quest Bar</Heading>
      <Content />
    </Layout>
  );
}

export default QuestBarPage;

export function Head() {
  return <PageTitle>Soupculture</PageTitle>;
}
