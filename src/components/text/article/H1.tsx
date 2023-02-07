import React, { PropsWithChildren } from 'react';

import { h1 } from './Common.module.css';

export default function H1({ children }: PropsWithChildren) {
  return <h1 className={h1}>{children}</h1>;
}
