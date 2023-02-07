import React, { PropsWithChildren } from 'react';

import { paragraph } from './Common.module.css';

export default function Paragraph({ children }: PropsWithChildren) {
  return <p className={paragraph}>{children}</p>;
}
