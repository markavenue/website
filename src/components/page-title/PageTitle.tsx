import React, { PropsWithChildren } from 'react';

import { SITE_TITLE } from '../../const/site-metadata';

export default function PageTitle({ children }: PropsWithChildren) {
  return <title>{[children, SITE_TITLE].filter(Boolean).join(' | ')}</title>;
}
