import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

import * as styles from './Heading.module.css';

interface HeadingProps extends PropsWithChildren {
  className?: string;
}

export default function Heading({ children, className }: HeadingProps) {
  return <h1 className={classNames(styles.heading, className)}>{children}</h1>;
}
