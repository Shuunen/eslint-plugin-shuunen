// @ts-expect-error missing types
const { plugins, rules } = require('eslint-plugin-perfectionist/configs/recommended-natural')
//
// /=\        /=         |-                 |-
// |=/ /=\ /= |= /=\ /=: |  = /=\ /=\ = /== |
// |   \=  |  |  \=  \=: \= | \=/ | | | ==/ \=
//
/** @type {import('eslint').Linter.FlatConfig} */
const config = {
  plugins,
  rules: {
    ...rules,
    'perfectionist/sort-imports': 'off', // 🟨 not needed, vscode & biome does this
  },
}
module.exports = config
