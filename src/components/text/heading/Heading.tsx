import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';

import { heading, normal, yellow } from './Heading.module.css';

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
        heading,
        className,
        variant === 'yellow' && yellow,
        variant === 'normal' && normal,
      )}
    >
      {children}
    </h1>
  );
}
