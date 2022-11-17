import React, { PropsWithChildren } from 'react';

export default function PageTitle({ children }: PropsWithChildren) {
  return <title>{['Mark Avenue', children].filter(Boolean).join(' | ')}</title>;
}
