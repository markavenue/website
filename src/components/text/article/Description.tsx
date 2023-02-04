import React, { PropsWithChildren } from 'react';

import * as styles from './Common.module.css';

interface DescriptionProps extends PropsWithChildren {
  title: string;
}

export default function Description({ title, children }: DescriptionProps) {
  return (
    <div className={styles.description}>
      <dt>{title}</dt>
      <dd>{children}</dd>
    </div>
  );
}
