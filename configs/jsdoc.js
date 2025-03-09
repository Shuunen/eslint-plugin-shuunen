import jsdocPlugin from 'eslint-plugin-jsdoc'
const { plugins, rules } = jsdocPlugin.configs['flat/recommended']
//
// MMMMMMMM""M MP""""""`MM M""""""'YMM
// MMMMMMMM  M M  mmmmm..M M  mmmm. `M
// MMMMMMMM  M M.      `YM M  MMMMM  M .d8888b. .d8888b.
// MMMMMMMM  M MMMMMMM.  M M  MMMMM  M 88'  `88 88'  `""
// M. `MMM' .M M. .MMM'  M M  MMMM' .M 88.  .88 88.  ...
// MM.     .MM Mb.     .dM M       .MM `88888P' `88888P'
// MMMMMMMMMMM MMMMMMMMMMM MMMMMMMMMMM
//
/* c8 ignore next 4 */
// eslint-disable-next-line no-restricted-syntax
if (plugins === undefined) throw new Error('failed to extract plugins from eslint-plugin-jsdoc')
// eslint-disable-next-line no-restricted-syntax
if (rules === undefined) throw new Error('failed to extract rules from eslint-plugin-jsdoc')
/** @type {import('eslint').Linter.Config} */
export const jsdoc = {
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
