import React, { PropsWithChildren } from 'react';

import { article } from './Common.module.css';

export default function Article({ children }: PropsWithChildren) {
  return <article className={article}>{children}</article>;
}
