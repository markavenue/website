import React, { PropsWithChildren } from 'react';

import * as styles from './Section.module.css';

export default function Section({ children }: PropsWithChildren) {
  return <section className={styles.section}>{children}</section>;
}
