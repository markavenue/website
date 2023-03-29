import React, { ComponentProps } from 'react';

import { footerLink } from './Common.module.css';

export default function FooterLink({
  href,
  children,
}: Pick<ComponentProps<'a'>, 'href' | 'children'>) {
  return (
    <a href={href} className={footerLink}>
      {children}
    </a>
  );
}
