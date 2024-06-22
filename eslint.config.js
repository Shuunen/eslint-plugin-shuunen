// @ts-check
const eslint = require('@eslint/js')
const plugin = require('eslint-plugin-eslint-plugin')
const unicorn = require('eslint-plugin-unicorn')
const globals = require('globals')

module.exports = [
  // eslint base
  {
    ignores: ['node_modules/*', 'coverage/*', 'build/*', 'dist/*', 'static/*'],
  },
  eslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  // unicorn
  unicorn.configs['flat/all'],
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
