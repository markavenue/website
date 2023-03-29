import React, { forwardRef, PropsWithChildren } from 'react';
import classNames from 'classnames';

import {
  dark,
  section as sectionClassName,
  withSpacing as withSpacingClassName,
} from './Section.module.css';

interface SectionProps extends PropsWithChildren {
  variant?: 'normal' | 'dark';
  className?: string;
  withSpacing?: boolean;
}

export default forwardRef<HTMLDivElement, SectionProps>(
  ({
    children, variant = 'normal', className, withSpacing = false,
  }, ref) => {
    const section = (
      <section
        ref={ref}
        className={classNames(
          sectionClassName,
          className,
          withSpacing && withSpacingClassName,
        )}
      >
        {children}
      </section>
    );

    if (variant === 'dark') {
      return <div className={dark}>{section}</div>;
    }
    return section;
  },
);
