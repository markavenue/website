import React from 'react';
import Heading from '../components/text/heading/Heading';
import Layout from '../components/ui/layout/Layout';
import Content, { DESCRIPTION } from '../components/soupculture/Content';
import PageHead from '../components/page-head/PageHead';

const TITLE = 'Soupculture';

function SoupculturePage() {
  return (
    <Layout>
      <Heading variant="normal">{TITLE}</Heading>
      <Content />
    </Layout>
  );
}

export default SoupculturePage;

export function Head() {
  return <PageHead description={DESCRIPTION} title={TITLE} />;
}
