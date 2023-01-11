// Extends the configuration shipped with Gatsby and makes it possible to use
// the same rules no matter how ESLint is run.

const { eslintConfig } = require('gatsby/dist/utils/eslint-config');
const path = require('path');
const { rules } = require('gatsby/dist/utils/eslint/required');
const rulesDirPlugin = require('eslint-plugin-rulesdir');

const { baseConfig } = eslintConfig(false);

rulesDirPlugin.RULES_DIR = path.resolve(path.join(
  __dirname,
  'node_modules',
  'gatsby',
  'dist',
  'utils',
  'eslint-rules',
));

const commonPresets = [
  'react-app',
  'airbnb',
  'airbnb/hooks',
  'plugin:sonarjs/recommended',
];

const commonRules = {
  ...baseConfig.rules,
  ...Object.fromEntries(Object.keys(rules).map(
    (key) => [`rulesdir/${key}`, rules[key]],
  )),
  'max-len': ['error', 80, { ignoreUrls: true }],
};

module.exports = {
  ...baseConfig,
  plugins: [
    ...baseConfig.plugins,
    'rulesdir',
    'sonarjs',
  ],
  extends: commonPresets,
  // Don't use babel-preset-gatsby, which requires build. Gatsby-related files
  // are in TypeScript anyway.
  parser: undefined,
  parserOptions: undefined,
  rules: {
    ...commonRules,
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        ...commonPresets,
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        ...commonRules,
        'react/require-default-props': 'off',
      },
    },
  ],
};
