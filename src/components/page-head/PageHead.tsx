import React from 'react';

import { SITE_TITLE } from '../../const/site-metadata';

interface PageHeadProps {
  description: string;
  title?: string;
}

export default function PageHead({ description, title }: PageHeadProps) {
  return (
    <>
      <title>{[title, SITE_TITLE].filter(Boolean).join(' | ')}</title>
      {description && <meta name="description" content={description} />}
    </>
  );
}
