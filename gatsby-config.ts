import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Mark Avenue',
    siteUrl: 'https://www.markavenue.sk',
  },
  // More easily incorporate content into your pages through automatic
  // TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: false,
  plugins: [
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        extensions: ['js', 'jsx', 'ts', 'tsx'],
      },
    },
    {
      resolve: 'gatsby-omni-font-loader',
      options: {
        enableListener: true,
        preconnect: ['https://fonts.googleapis.com', 'https://fonts.gstatic.com'],
        web: [
          {
            name: 'Noto Serif Georgian',
            file: 'https://fonts.googleapis.com/css2?family=Noto+Serif+Georgian:wght@300;400&display=swap',
          },
          {
            name: 'Anton',
            file: 'https://fonts.googleapis.com/css2?family=Anton&display=swap',
          },
          {
            name: 'Red Hat Mono',
            file: 'https://fonts.googleapis.com/css2?family=Red+Hat+Mono:wght@400;500&display=swap',
          },
        ],
      },
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-dts-css-modules',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        duration: 200,
      },
    },
  ],
};

export default config;
