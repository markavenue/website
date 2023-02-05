import React, { ComponentProps } from 'react';

import * as styles from './Common.module.css';

export default function FooterIconLink({
  href,
  children,
}: Pick<ComponentProps<'a'>, 'href' | 'children'>) {
  return (
    <a href={href} className={styles.footerIconLink}>
      {children}
    </a>
  );
}
