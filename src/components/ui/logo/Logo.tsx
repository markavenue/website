import React from 'react';
import * as styles from './Logo.module.css';

export default function Logo() {
  return (
    <span className={styles.logo}>
      <span className={styles.highlighted}>Mark</span>
      Avenue
    </span>
  );
}
