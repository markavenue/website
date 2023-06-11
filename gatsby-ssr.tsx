import { PreRenderHTMLArgs, RenderBodyArgs } from 'gatsby';
import React from 'react';

export function onRenderBody({ setHeadComponents }: RenderBodyArgs) {
  setHeadComponents([
    <script
      id="cookieyes"
      key="cookieyes"
      src="https://cdn-cookieyes.com/client_data/40f34866b5b77c07eab5de16/script.js"
      type="text/javascript"
    />,
  ]);
}

export function onPreRenderHTML({
  getHeadComponents,
  replaceHeadComponents,
}: PreRenderHTMLArgs) {
  const headComponents = getHeadComponents();

  headComponents.sort((item) =>
    (item as React.ReactElement).key === 'cookieyes' ? -1 : 1,
  );
  if (process.env.NODE_ENV !== 'development') {
    const gtagIndex = headComponents.findIndex(
      (item) =>
        (item as React.ReactElement).key === 'gatsby-plugin-google-gtag',
    );
    headComponents[gtagIndex] = React.cloneElement(
      headComponents[gtagIndex] as React.ReactElement,
      { 'data-cookieyes': 'cookieyes-analytics' },
    );
  }

  replaceHeadComponents(headComponents);
}
