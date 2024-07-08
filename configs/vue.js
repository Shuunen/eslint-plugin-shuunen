// @ts-expect-error missing types
const vue = require('eslint-plugin-vue').configs['flat/recommended']
const { shortName } = require('../src/constants.js')
//
// /^^         /^^
//  /^^       /^^
//   /^^     /^^  /^^  /^^   /^^
//    /^^   /^^   /^^  /^^ /^   /^^
//     /^^ /^^    /^^  /^^/^^^^^ /^^
//      /^^^^     /^^  /^^/^
//       /^^        /^^/^^  /^^^^
//
const [, base, essential, stronglyRecommended, recommended] = vue
/** @type {import('eslint').Linter.FlatConfig[]} */
const config = [
  {
    ...base,
    name: `${shortName}/vue`,
    rules: {
      ...base.rules,
      ...essential.rules,
      ...stronglyRecommended.rules,
      ...recommended.rules,
      'jsdoc/require-jsdoc': 'off', // annoying in vue files
      'vue/attributes-order': 'off', // styling, perfectionist does this
      'vue/first-attribute-linebreak': 'off', // styling
      'vue/html-closing-bracket-newline': 'off', // styling
      'vue/html-indent': 'off', // styling
      'vue/max-attributes-per-line': 'off', // styling
      'vue/singleline-html-element-content-newline': 'off', // styling
    },
  },
]
module.exports = config
