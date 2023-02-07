import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';

import { container, rtl as rtlClassName } from './Layout.module.css';

interface ContainerProps extends PropsWithChildren {
  rtl?: boolean;
}

export default function Container({ rtl = false, children }: ContainerProps) {
  return (
    <div className={classNames(container, rtl && rtlClassName)}>{children}</div>
  );
}
