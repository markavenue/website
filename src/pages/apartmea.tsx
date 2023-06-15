import React from 'react';
import Heading from '../components/text/heading/Heading';
import Layout from '../components/ui/layout/Layout';
import Content from '../components/apartmea/Content';
import PageTitle from '../components/page-title/PageTitle';

function ApartmeaPage() {
  return (
    <Layout>
      <Heading variant="normal">Apartmea</Heading>
      <Content />
    </Layout>
  );
}

export default ApartmeaPage;

export function Head() {
  return <PageTitle>Apartmea</PageTitle>;
}
