import React, { PropsWithChildren } from 'react';

import * as styles from './Heading.module.css';

export default function Heading({ children }: PropsWithChildren) {
  return <h1 className={styles.heading}>{children}</h1>;
}
