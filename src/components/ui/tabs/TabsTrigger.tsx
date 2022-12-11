import { Trigger } from '@radix-ui/react-tabs';
import React, { ComponentProps } from 'react';

import * as styles from './Tabs.module.css';

export default function TabsTrigger({
  value,
  children,
}: ComponentProps<typeof Trigger>) {
  return (
    <Trigger value={value} className={styles.trigger}>
      {children}
    </Trigger>
  );
}
