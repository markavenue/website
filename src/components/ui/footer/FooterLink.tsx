import * as React from 'react';
import { ComponentProps } from 'react';

import * as styles from './Common.module.css';

export default function FooterLink({
  href,
  children,
}: Pick<ComponentProps<'a'>, 'href' | 'children'>) {
  return (
    <a href={href} className={styles.footerLink}>
      {children}
    </a>
  );
}
