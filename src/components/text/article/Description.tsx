import React, { PropsWithChildren } from 'react';

import { description } from './Common.module.css';

interface DescriptionProps extends PropsWithChildren {
  title: string;
}

export default function Description({ title, children }: DescriptionProps) {
  return (
    <div className={description}>
      <dt>{title}</dt>
      <dd>{children}</dd>
    </div>
  );
}
