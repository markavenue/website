import React from 'react';
import { Content, TabsContentProps } from '@radix-ui/react-tabs';
import classNames from 'classnames';

import { content } from './Tabs.module.css';

export default function TabsContent({
  className,
  children,
  forceMount,
  value,
}: Pick<TabsContentProps, 'value' | 'children' | 'className' | 'forceMount'>) {
  return (
    <Content
      className={classNames(className, content)}
      forceMount={forceMount}
      value={value}
    >
      {children}
    </Content>
  );
}
