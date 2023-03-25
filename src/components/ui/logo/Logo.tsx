import React from 'react';
import classNames from 'classnames';

import {
  highlighted,
  inverse as inverseClassName,
  logo,
} from './Logo.module.css';

interface LogoProps {
  inverse?: boolean;
}

export default function Logo({ inverse = false }: LogoProps) {
  return (
    <span className={classNames(logo, inverse && inverseClassName)}>
      <span className={highlighted}>Mark</span>
      &nbsp;Avenue
    </span>
  );
}
