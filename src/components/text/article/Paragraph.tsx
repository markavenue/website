import React, { PropsWithChildren } from 'react';

import * as styles from './Common.module.css';

export default function Paragraph({ children }: PropsWithChildren) {
  return <p className={styles.paragraph}>{children}</p>;
}
