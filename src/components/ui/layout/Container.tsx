import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';

import * as styles from './Layout.module.css';

interface ContainerProps extends PropsWithChildren {
  rtl?: boolean;
}

export default function Container({ rtl = false, children }: ContainerProps) {
  return (
    <div className={classNames(styles.container, rtl && styles.rtl)}>
      {children}
    </div>
  );
}
