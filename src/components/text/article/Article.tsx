import React, { PropsWithChildren } from 'react';

import * as styles from './Common.module.css';

export default function Article({ children }: PropsWithChildren) {
  return (
    <article className={styles.article}>
      {children}
    </article>
  );
}
