import React, { ComponentProps } from 'react';

import { footerIconLink } from './Common.module.css';

export default function FooterIconLink({
  href,
  children,
}: Pick<ComponentProps<'a'>, 'href' | 'children'>) {
  return (
    <a href={href} className={footerIconLink}>
      {children}
    </a>
  );
}
