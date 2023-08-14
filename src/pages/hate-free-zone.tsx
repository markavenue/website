import React from 'react';
import Heading from '../components/text/heading/Heading';
import Layout from '../components/ui/layout/Layout';
import Content, { DESCRIPTION } from '../components/hate-free-zone/Content';
import PageHead from '../components/page-head/PageHead';

const TITLE = 'Hate-Free Zone';

function HateFreeZonePage() {
  return (
    <Layout>
      <Heading variant="normal">{TITLE}</Heading>
      <Content />
    </Layout>
  );
}

export default HateFreeZonePage;

export function Head() {
  return <PageHead description={DESCRIPTION} title={TITLE} />;
}
