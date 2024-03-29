import type { GatsbyConfig } from 'gatsby';

import { SITE_TITLE } from './src/const/site-metadata';

const config: GatsbyConfig = {
  // More easily incorporate content into your pages through automatic
  // TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: {
    generateOnBuild: true,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: SITE_TITLE,
        short_name: SITE_TITLE,
        start_url: '/',
        background_color: '#faf5e8',
        theme_color: '#e6433f',
        display: 'standalone',
        icon: 'src/assets/favicon.svg',
      },
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-dts-css-modules',
    {
      resolve: 'gatsby-plugin-react-svg',
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        duration: 200,
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['G-TFKS1EFWRF'],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-force-file-loader',
      options: {
        rules: [
          /* Font embedding increases the size of CSS and therefore each page
          significantly. Modern browsers don't even load fonts that aren't used.
          */
          'fonts',
        ],
      },
    },
  ],
};

export default config;
