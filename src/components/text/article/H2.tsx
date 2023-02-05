import React, { PropsWithChildren } from 'react';

import * as styles from './Common.module.css';

export default function H2({ children }: PropsWithChildren) {
  return <h2 className={styles.h2}>{children}</h2>;
}
