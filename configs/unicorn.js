import { configs } from 'eslint-plugin-unicorn'
const { plugins, rules } = configs['flat/all']

//
// #     #
// #     # #    # #  ####   ####  #####  #    #
// #     # ##   # # #    # #    # #    # ##   #
// #     # # #  # # #      #    # #    # # #  #
// #     # #  # # # #      #    # #####  #  # #
// #     # #   ## # #    # #    # #   #  #   ##
//  #####  #    # #  ####   ####  #    # #    #
//
/* c8 ignore next 2 */
if (plugins === undefined) throw new Error('failed to extract plugins from eslint-plugin-unicorn')
if (rules === undefined) throw new Error('failed to extract rules from eslint-plugin-unicorn')
/** @type {import('eslint').Linter.Config} */
export const unicorn = {
  plugins,
  rules: {
    ...rules,
    'unicorn/prefer-spread': 'off', // 🔴 not thanks
    'unicorn/prefer-string-replace-all': 'off', // 🔴 not well supported
    'unicorn/prefer-switch': 'off', // 🔴 not thanks
    'unicorn/switch-case-braces': 'off', // 🟨 useless styling
  },
}
