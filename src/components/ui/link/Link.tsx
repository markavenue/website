import React from 'react';
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby';

import * as styles from './Link.module.css';

type LinkProps = Pick<GatsbyLinkProps<unknown>, 'to' | 'children'>;

export default function Link({ to, children }: LinkProps) {
  return (
    <GatsbyLink to={to} className={styles.link} activeClassName={styles.actvie}>
      {children}
    </GatsbyLink>
  );
}
