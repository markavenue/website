import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';

import { paragraph } from './Paragraph.module.css';

interface ParagraphProps extends PropsWithChildren {
  className?: string;
}

export default function Paragraph({ children, className }: ParagraphProps) {
  return <p className={classNames(paragraph, className)}>{children}</p>;
}
