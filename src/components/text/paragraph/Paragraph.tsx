import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

import * as styles from './Paragraph.module.css';

interface ParagraphProps extends PropsWithChildren {
  className?: string;
}

export default function Paragraph({ children, className }: ParagraphProps) {
  return <p className={classNames(styles.paragraph, className)}>{children}</p>;
}
