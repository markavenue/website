import React from 'react';
import Heading from '../components/text/heading/Heading';
import Layout from '../components/ui/layout/Layout';
import Content from '../components/quest-bar/Content';
import PageTitle from '../components/page-title/PageTitle';

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
  return <PageTitle>Quest Bar</PageTitle>;
}
