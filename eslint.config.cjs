'use strict'

const shuunen = require('./index.cjs') // @ts-expect-error missing types
const plugin = require('eslint-plugin-eslint-plugin')

module.exports = [
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
      'eslint-plugin/require-meta-docs-url': 'off', // I have no docs yet
    },
  },
]
