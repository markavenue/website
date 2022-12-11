import React, { ReactElement } from 'react';
import { List, TabsTriggerProps } from '@radix-ui/react-tabs';

interface TabsListProps {
  children: ReactElement<TabsTriggerProps>[];
  className?: string;
}

export default function TabsList({ children, className }: TabsListProps) {
  return <List className={className}>{children}</List>;
}
