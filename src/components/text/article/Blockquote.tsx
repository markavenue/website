import React, { PropsWithChildren } from 'react';

import { blockquote } from './Common.module.css';

export default function Blockquote({ children }: PropsWithChildren) {
  return <blockquote className={blockquote}>{children}</blockquote>;
}
