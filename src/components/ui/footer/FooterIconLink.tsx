import React, { ComponentProps } from 'react';

import { footerIconLink } from './Common.module.css';

export default function FooterIconLink({
  href,
  children,
  ...props
}: Pick<ComponentProps<'a'>, 'aria-label' | 'href' | 'children'>) {
  return (
    <a aria-label={props['aria-label']} href={href} className={footerIconLink}>
      {children}
    </a>
  );
}
