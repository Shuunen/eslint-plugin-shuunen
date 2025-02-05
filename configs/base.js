import { shortName } from '../src/constants.js'
import { ignores } from '../src/ignores.js'
import { eslint } from './eslint.js'
import { jsdoc } from './jsdoc.js'
import { perfectionist } from './perfectionist.js'
import { myRules, shuunen } from './shuunen.js'
import { unicorn } from './unicorn.js'
//
//     dBBBBb dBBBBb  .dBUBBA   dBEDS
//       dBP      BB  BP
//   adBBQ'   dBP BB  `BBBBb  dBBP
//  dB' db   dBP  BB     dBP dBP
// adcBBQ'  dBBBBBBBdBEBOP' dBUBBA
//
/** @type {import('eslint').Linter.Config[]} */
export const base = [
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
