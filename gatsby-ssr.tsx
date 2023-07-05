import { PreRenderHTMLArgs, RenderBodyArgs } from 'gatsby';
import React from 'react';

export function onRenderBody({ setHtmlAttributes }: RenderBodyArgs) {
  setHtmlAttributes({
    lang: 'sk',
  });
}

export function onPreRenderHTML({
  getHeadComponents,
  getPostBodyComponents,
  replaceHeadComponents,
  replacePostBodyComponents,
}: PreRenderHTMLArgs) {
  if (process.env.NODE_ENV === 'development') {
    return;
  }

  const oldHeadComponents = getHeadComponents();
  const newHeadComponents: React.ReactNode[] = [];
  const postBodyComponents = [
    ...getPostBodyComponents(),
    <script
      id="cookieyes"
      key="cookieyes"
      src="https://cdn-cookieyes.com/client_data/40f34866b5b77c07eab5de16/script.js"
      type="text/javascript"
    />,
  ];

  oldHeadComponents.forEach((item) => {
    const { key } = item as React.ReactElement;

    if (
      typeof key === 'string' &&
      key.startsWith('gatsby-plugin-google-gtag')
    ) {
      postBodyComponents.push(
        key === 'gatsby-plugin-google-gtag'
          ? React.cloneElement(item as React.ReactElement, {
              'data-cookieyes': 'cookieyes-analytics',
            })
          : item,
      );
    } else {
      newHeadComponents.push(item);
    }
  });

  replaceHeadComponents(newHeadComponents);
  replacePostBodyComponents(postBodyComponents);
}
