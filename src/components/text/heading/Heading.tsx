import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';

import * as styles from './Heading.module.css';

interface HeadingProps extends PropsWithChildren {
  className?: string;
  variant?: 'red' | 'yellow' | 'normal';
}

export default function Heading({
  children,
  className,
  variant = 'red',
}: HeadingProps) {
  return (
    <h1
      className={classNames(
        styles.heading,
        className,
        variant === 'yellow' && styles.yellow,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        variant === 'normal' && styles.normal,
      )}
    >
      {children}
    </h1>
  );
}
