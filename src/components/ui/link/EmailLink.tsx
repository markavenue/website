import React, { ComponentProps } from 'react';

interface EmailLinkProps
  extends Omit<ComponentProps<'a'>, 'children' | 'href'> {
  address: string;
}

export default function EmailLink({ address, ...props }: EmailLinkProps) {
  return (
    <a {...props} href={`mailto:${address}`}>
      {address}
    </a>
  );
}
