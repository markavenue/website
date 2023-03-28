import React, { PropsWithChildren } from 'react';

import { centerBox } from './Layout.module.css';

export default function CenterBox({ children }: PropsWithChildren) {
  return <div className={centerBox}>{children}</div>;
}
