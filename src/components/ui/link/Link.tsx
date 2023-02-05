import React from 'react';
import classNames from 'classnames';
import { GatsbyLinkProps, Link as GatsbyLink } from 'gatsby';

import * as styles from './Link.module.css';

interface LinkProps extends Pick<GatsbyLinkProps<unknown>, 'to' | 'children'> {
  variant?: 'primary' | 'image';
}

export default function Link({ to, children, variant = 'primary' }: LinkProps) {
  return (
    <GatsbyLink
      to={to}
      className={classNames(
        styles.link,
        variant === 'primary' && styles.primary,
        variant === 'image' && styles.image,
      )}
    >
      {children}
    </GatsbyLink>
  );
}
