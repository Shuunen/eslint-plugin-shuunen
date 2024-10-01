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
    'perfectionist/sort-imports': 'off', // 🟨 not needed, vscode & biome does this
  },
}
module.exports = config
