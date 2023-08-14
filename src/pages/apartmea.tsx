import React from 'react';
import Heading from '../components/text/heading/Heading';
import Layout from '../components/ui/layout/Layout';
import Content, { DESCRIPTION } from '../components/apartmea/Content';
import PageHead from '../components/page-head/PageHead';

const TITLE = 'Apartmea';

function ApartmeaPage() {
  return (
    <Layout>
      <Heading variant="normal">{TITLE}</Heading>
      <Content />
    </Layout>
  );
}

export default ApartmeaPage;

export function Head() {
  return <PageHead description={DESCRIPTION} title={TITLE} />;
}
