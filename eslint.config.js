// @ts-expect-error missing types
import plugin from 'eslint-plugin-eslint-plugin'
import shuunen from './index.js'

export default [
  ...shuunen.configs.base,
  ...shuunen.configs.node,
  {
    rules: {
      'jsdoc/require-jsdoc': 'off',
      'jsdoc/require-param': 'off',
      'jsdoc/require-param-description': 'off',
      'jsdoc/require-returns': 'off',
      'jsdoc/require-returns-description': 'off',
      'unicorn/prefer-module': 'off',
    },
  },
  // eslint-plugin
  plugin.configs['flat/all'],
  {
    rules: {
      'eslint-plugin/meta-property-ordering': 'off', // conflicting with perfectionist
      'eslint-plugin/require-meta-docs-url': 'off', // I have no docs yet
    },
  },
]
