const { shortName } = require('../src/constants.js')
const unicorn = require('./unicorn.js')
const perfectionist = require('./perfectionist.js')
const eslint = require('./eslint.js')
const jsdoc = require('./jsdoc.js')
const { ignores } = require('../src/ignores.js')
const { myRules, shuunen } = require('./shuunen.js')
//
//     dBBBBb dBBBBb  .dBUBBA   dBEDS
//       dBP      BB  BP
//   adBBQ'   dBP BB  `BBBBb  dBBP
//  dB' db   dBP  BB     dBP dBP
// adcBBQ'  dBBBBBBBdBEBOP' dBUBBA
//
/** @type {import('eslint').Linter.Config[]} */
const config = [
  {
    ignores,
    name: `${shortName}/base/ignores`,
  },
  {
    // files: ['**/*.js', '**/*.mjs', '**/*.cjs', '**/*.ts', '**/*.d.ts', '**/*.tsx'], // needed ?
    name: `${shortName}/base`,
    plugins: {
      ...eslint.plugins,
      ...perfectionist.plugins,
      ...unicorn.plugins,
      ...jsdoc.plugins,
      shuunen,
    },
    // @ts-expect-error unknown type issue
    rules: {
      ...eslint.rules,
      ...perfectionist.rules,
      ...unicorn.rules,
      ...jsdoc.rules,
      ...myRules,
    },
  },
  {
    files: ['**/*.test.*'],
    name: `${shortName}/base/tests-overrides`,
    rules: {
      'max-lines-per-function': 'off', // 🟨 tests can be long
      'max-statements': 'off', // 🟨 tests can be long
      'no-magic-numbers': 'off', // 🟨 mess with snaps
      'unicorn/template-indent': 'off', // 🟨 mess with snaps
    },
  },
]
module.exports = config
