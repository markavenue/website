import React, { PropsWithChildren } from 'react';

import * as styles from './Common.module.css';

export default function Blockquote({ children }: PropsWithChildren) {
  return <blockquote className={styles.blockquote}>{children}</blockquote>;
}
