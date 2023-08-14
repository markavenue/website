import {
  AnchorLink as GatsbyAnchorLink,
  AnchorLinkProps as GatsbyAnchorLinkProps,
} from 'gatsby-plugin-anchor-links';
import React, { useEffect, useState } from 'react';

export default function AnchorLink({
  stripHash,
  ...props
}: GatsbyAnchorLinkProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return <GatsbyAnchorLink {...props} stripHash={isClient && stripHash} />;
}
