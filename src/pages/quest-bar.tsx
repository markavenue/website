import React from 'react';
import Heading from '../components/text/heading/Heading';
import Layout from '../components/ui/layout/Layout';
import Content, { DESCRIPTION } from '../components/quest-bar/Content';
import PageHead from '../components/page-head/PageHead';

const TITLE = 'Quest Bar';

function QuestBarPage() {
  return (
    <Layout>
      <Heading variant="normal">{TITLE}</Heading>
      <Content />
    </Layout>
  );
}

export default QuestBarPage;

export function Head() {
  return <PageHead description={DESCRIPTION} title={TITLE} />;
}
