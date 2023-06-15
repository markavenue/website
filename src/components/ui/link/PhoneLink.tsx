import React, { ComponentProps } from 'react';

interface PhoneLinkProps
  extends Omit<ComponentProps<'a'>, 'children' | 'href'> {
  number: string;
}

export default function PhoneLink({ number, ...props }: PhoneLinkProps) {
  return (
    <a {...props} href={`tel:${number.replace(/ /g, '')}`}>
      {number}
    </a>
  );
}
