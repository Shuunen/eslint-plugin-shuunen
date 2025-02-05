import vuePlugin from 'eslint-plugin-vue'
import { shortName } from '../src/constants.js'
//
// /^^         /^^
//  /^^       /^^
//   /^^     /^^  /^^  /^^   /^^
//    /^^   /^^   /^^  /^^ /^   /^^
//     /^^ /^^    /^^  /^^/^^^^^ /^^
//      /^^^^     /^^  /^^/^
//       /^^        /^^/^^  /^^^^
//
const [, base, essential, stronglyRecommended, recommended] = vuePlugin.configs['flat/recommended']
/** @type {import('eslint').Linter.Config[]} */
export const vue = [
  {
    ...base,
    name: `${shortName}/vue`,
    rules: {
      ...base?.rules,
      ...essential?.rules,
      ...stronglyRecommended?.rules,
      ...recommended?.rules,
      'jsdoc/require-jsdoc': 'off', // annoying in vue files
      'vue/attributes-order': 'off', // styling, perfectionist does this
      'vue/first-attribute-linebreak': 'off', // styling
      'vue/html-closing-bracket-newline': 'off', // styling
      'vue/html-indent': 'off', // styling
      'vue/max-attributes-per-line': 'off', // styling
      'vue/order-in-components': 'off', // styling, perfectionist does this
      'vue/singleline-html-element-content-newline': 'off', // styling
    },
  },
]
