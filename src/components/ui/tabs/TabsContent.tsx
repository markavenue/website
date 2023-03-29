import React from 'react';
import { Content, TabsContentProps } from '@radix-ui/react-tabs';
import classNames from 'classnames';

import { content } from './Tabs.module.css';

export default function TabsContent({
  className,
  children,
  value,
}: Pick<TabsContentProps, 'value' | 'children' | 'className'>) {
  return (
    <Content value={value} className={classNames(className, content)}>
      {children}
    </Content>
  );
}
