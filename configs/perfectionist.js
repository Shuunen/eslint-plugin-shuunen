// @ts-expect-error missing types
const perfectionist = require('eslint-plugin-perfectionist/configs/recommended-natural')
//
// /=\        /=         |-                 |-
// |=/ /=\ /= |= /=\ /=: |  = /=\ /=\ = /== |
// |   \=  |  |  \=  \=: \= | \=/ | | | ==/ \=
//
/** @type {import('eslint').Linter.FlatConfig} */
const config = {
  plugins: perfectionist.plugins,
  rules: {
    ...perfectionist.rules,
    'perfectionist/sort-imports': 'off', // 🟨 not needed, vscode & biome does this
  },
}
module.exports = config
