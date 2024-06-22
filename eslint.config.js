const shuunen = require('./index') // @ts-expect-error missing types
const plugin = require('eslint-plugin-eslint-plugin')

module.exports = [
  ...shuunen.configs.base,
  ...shuunen.configs.node,
  {
    rules: {
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
