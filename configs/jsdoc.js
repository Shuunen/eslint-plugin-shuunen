// @ts-expect-error missing types
const { plugins, rules } = require('eslint-plugin-jsdoc').configs['flat/recommended']
//
// MMMMMMMM""M MP""""""`MM M""""""'YMM
// MMMMMMMM  M M  mmmmm..M M  mmmm. `M
// MMMMMMMM  M M.      `YM M  MMMMM  M .d8888b. .d8888b.
// MMMMMMMM  M MMMMMMM.  M M  MMMMM  M 88'  `88 88'  `""
// M. `MMM' .M M. .MMM'  M M  MMMM' .M 88.  .88 88.  ...
// MM.     .MM Mb.     .dM M       .MM `88888P' `88888P'
// MMMMMMMMMMM MMMMMMMMMMM MMMMMMMMMMM
//
/** @type {import('eslint').Linter.FlatConfig} */
const config = {
  plugins,
  rules: {
    ...rules,
    'jsdoc/newline-after-description': 'off', // 🟨 useless styling
    'jsdoc/require-jsdoc': [
      'error',
      {
        require: {
          // biome-ignore lint/style/useNamingConvention: I did not choose this name
          ArrowFunctionExpression: true,
          // biome-ignore lint/style/useNamingConvention: I did not choose this name
          ClassDeclaration: true,
          // biome-ignore lint/style/useNamingConvention: I did not choose this name
          FunctionDeclaration: true,
          // biome-ignore lint/style/useNamingConvention: I did not choose this name
          FunctionExpression: true,
          // biome-ignore lint/style/useNamingConvention: I did not choose this name
          MethodDefinition: true,
        },
      },
    ],
  },
}
module.exports = config
