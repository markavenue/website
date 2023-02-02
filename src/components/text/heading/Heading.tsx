import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

import * as styles from './Heading.module.css';

interface HeadingProps extends PropsWithChildren {
  className?: string;
  variant?: 'red' | 'yellow';
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
      )}
    >
      {children}
    </h1>
  );
}
