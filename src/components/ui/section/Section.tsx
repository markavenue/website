import classNames from 'classnames';
import React, { forwardRef, PropsWithChildren } from 'react';

import * as styles from './Section.module.css';

interface SectionProps extends PropsWithChildren {
  variant?: 'normal' | 'dark';
  className?: string;
}

export default forwardRef<HTMLDivElement, SectionProps>(
  ({ children, variant = 'normal', className }, ref) => {
    const section = (
      <section ref={ref} className={classNames(styles.section, className)}>
        {children}
      </section>
    );

    if (variant === 'dark') {
      return <div className={styles.dark}>{section}</div>;
    }
    return section;
  },
);
