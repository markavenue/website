import classNames from 'classnames';
import React from 'react';
import * as styles from './Logo.module.css';

interface LogoProps {
  inverse?: boolean;
}

export default function Logo({ inverse = false }: LogoProps) {
  return (
    <span className={classNames(styles.logo, inverse && styles.inverse)}>
      <span className={styles.highlighted}>Mark</span>
      Avenue
    </span>
  );
}
