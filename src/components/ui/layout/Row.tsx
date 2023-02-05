import React, { PropsWithChildren } from 'react';

import * as styles from './Layout.module.css';

export default function Row({ children }: PropsWithChildren) {
  return <div className={styles.row}>{children}</div>;
}
