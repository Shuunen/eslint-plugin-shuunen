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
/** @type {import('eslint').Linter.FlatConfig[]} */
const config = [
  ...vue,
  {
    name: `${shortName}/vue/rules`,
    rules: {
      'vue/attributes-order': 'off', // styling, perfectionist does this
      'vue/first-attribute-linebreak': 'off', // styling
      'vue/html-closing-bracket-newline': 'off', // styling
      'vue/html-indent': 'off', // styling
      'vue/max-attributes-per-line': 'off', // styling
    },
  },
]
module.exports = config
