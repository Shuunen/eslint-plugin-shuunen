// @ts-expect-error missing types
const { plugins, rules } = require('eslint-plugin-unicorn').configs['flat/all']
//
// #     #
// #     # #    # #  ####   ####  #####  #    #
// #     # ##   # # #    # #    # #    # ##   #
// #     # # #  # # #      #    # #    # # #  #
// #     # #  # # # #      #    # #####  #  # #
// #     # #   ## # #    # #    # #   #  #   ##
//  #####  #    # #  ####   ####  #    # #    #
//
/** @type {import('eslint').Linter.FlatConfig} */
const config = {
  plugins,
  rules: {
    ...rules,
    'unicorn/prefer-spread': 'off', // 🔴 not thanks
    'unicorn/prefer-string-replace-all': 'off', // 🔴 not well supported
    'unicorn/prefer-switch': 'off', // 🔴 not thanks
    'unicorn/switch-case-braces': 'off', // 🟨 useless styling
  },
}
module.exports = config
