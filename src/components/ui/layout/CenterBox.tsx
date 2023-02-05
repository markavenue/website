import React, { PropsWithChildren } from 'react';

import * as styles from './Layout.module.css';

export default function CenterBox({ children }: PropsWithChildren) {
  return <div className={styles.centerBox}>{children}</div>;
}
