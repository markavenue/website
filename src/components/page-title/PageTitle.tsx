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
      {[data.site.siteMetadata.title, children].filter(Boolean).join(' | ')}
    </title>
  );
}
