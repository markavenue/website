import * as React from 'react';
import PageTitle from '../components/page-title/PageTitle';
import Heading from '../components/text/heading/Heading';
import Layout from '../components/ui/layout/Layout';

function ApartmeaPage() {
  return (
    <Layout>
      <Heading variant="normal">Apartmea</Heading>
    </Layout>
  );
}

export default ApartmeaPage;

export function Head() {
  return <PageTitle>Apartmea</PageTitle>;
}
