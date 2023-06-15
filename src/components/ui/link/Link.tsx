import React from 'react';
import classNames from 'classnames';
import { GatsbyLinkProps, Link as GatsbyLink } from 'gatsby';

import { image, link, primary } from './Link.module.css';

interface LinkProps
  extends Pick<GatsbyLinkProps<unknown>, 'aria-label' | 'to' | 'children'> {
  variant?: 'primary' | 'image';
}

export default function Link({
  to,
  children,
  variant = 'primary',
  ...props
}: LinkProps) {
  return (
    <GatsbyLink
      aria-label={props['aria-label']}
      to={to}
      className={classNames(
        link,
        variant === 'primary' && primary,
        variant === 'image' && image,
      )}
    >
      {children}
    </GatsbyLink>
  );
}
