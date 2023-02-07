import React, { PropsWithChildren } from 'react';

import { h2 } from './Common.module.css';

export default function H2({ children }: PropsWithChildren) {
  return <h2 className={h2}>{children}</h2>;
}
