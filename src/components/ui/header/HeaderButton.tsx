import React, { ComponentProps, ReactNode } from 'react';

import * as styles from './Common.module.css';

interface HeaderButtonProps extends Pick<ComponentProps<'button'>, 'onClick'> {
  children: ReactNode;
}

export default function HeaderButton({ onClick, children }: HeaderButtonProps) {
  return (
    <button type="button" onClick={onClick} className={styles.headerButton}>
      {children}
    </button>
  );
}
