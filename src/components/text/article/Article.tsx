import React, { PropsWithChildren } from 'react';

interface ArticleProps extends PropsWithChildren {
  className?: string;
}

export default function Article({ className, children }: ArticleProps) {
  return <article className={className}>{children}</article>;
}
