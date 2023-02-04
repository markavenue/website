import React, { PropsWithChildren } from 'react';

import * as styles from './Common.module.css';

export default function H1({ children }: PropsWithChildren) {
  return <h1 className={styles.h1}>{children}</h1>;
}
