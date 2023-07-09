import React, { ComponentProps, forwardRef } from 'react';
import { Root } from '@radix-ui/react-tabs';

export default forwardRef<HTMLDivElement, ComponentProps<typeof Root>>(
  ({ defaultValue, className, children, defaultChecked, orientation }, ref) => (
    <Root
      ref={ref}
      orientation={orientation}
      defaultValue={defaultValue}
      defaultChecked={defaultChecked}
      className={className}
    >
      {children}
    </Root>
  ),
);
