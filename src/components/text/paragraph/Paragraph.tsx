import React, { PropsWithChildren } from 'react';

import * as styles from './Paragraph.module.css';

export default function Paragraph({ children }: PropsWithChildren) {
  return <p className={styles.p}>{children}</p>;
}
