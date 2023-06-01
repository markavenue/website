import { graphql, useStaticQuery } from 'gatsby';
import React, { PropsWithChildren } from 'react';

interface SiteData {
  site: {
    siteMetadata: {
      title: string;
    };
  };
}

export default function PageTitle({ children }: PropsWithChildren) {
  const data = useStaticQuery<SiteData>(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <title>
      {[children, data.site.siteMetadata.title].filter(Boolean).join(' | ')}
    </title>
  );
}
