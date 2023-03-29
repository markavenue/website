import React, { PropsWithChildren } from 'react';

import { row } from './Layout.module.css';

export default function Row({ children }: PropsWithChildren) {
  return <div className={row}>{children}</div>;
}
