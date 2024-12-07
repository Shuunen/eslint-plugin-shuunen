// @ts-expect-error missing types
const perfectionist = require('eslint-plugin-perfectionist').configs['recommended-natural']
//
// /=\        /=         |-                 |-
// |=/ /=\ /= |= /=\ /=: |  = /=\ /=\ = /== |
// |   \=  |  |  \=  \=: \= | \=/ | | | ==/ \=
//
/** @type {import('eslint').Linter.Config} */
const config = {
  ...perfectionist,
  rules: {
    ...perfectionist.rules,
    'perfectionist/sort-classes': [
      'error',
      {
        groups: [
          'index-signature',
          'static-property',
          'static-block',
          ['protected-property', 'protected-accessor-property', 'private-property', 'private-accessor-property', 'property', 'accessor-property'],
          'constructor',
          ['static-method', 'protected-method', 'private-method', 'method', 'get-method', 'set-method'],
          'unknown',
        ],
        type: 'natural',
      },
    ], // 🟢 nice
    'perfectionist/sort-imports': 'off', // 🟨 not needed, vscode or biome does this
    'perfectionist/sort-modules': 'off', // 🟨 re-order functions, annoying in jsx, tsx
    'perfectionist/sort-named-imports': 'off', // 🟨 not needed, vscode or biome does this
  },
}
module.exports = config
