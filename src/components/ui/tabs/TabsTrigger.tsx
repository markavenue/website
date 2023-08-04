import classNames from 'classnames';
import React, { ComponentProps } from 'react';
import { Trigger } from '@radix-ui/react-tabs';

import { trigger } from './Tabs.module.css';

export default function TabsTrigger({
  value,
  className,
  children,
}: ComponentProps<typeof Trigger>) {
  return (
    <Trigger value={value} className={classNames(trigger, className)}>
      {children}
    </Trigger>
  );
}
