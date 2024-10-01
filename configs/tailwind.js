// @ts-expect-error missing types
const tailwind = require('eslint-plugin-tailwindcss').configs['flat/recommended']
const { shortName } = require('../src/constants.js')
//
// oOoOOoOOo            o                         o
//     o            o  O           o             O
//     o               o                         o
//     O               O                         o
//     o     .oOoO' O  o  'o     O O  'OoOo. .oOoO
//     O     O   o  o  O   O  o  o o   o   O o   O
//     O     o   O  O  o   o  O  O O   O   o O   o
//     o'    `OoO'o o' Oo  `Oo'oO' o'  o   O `OoO'o
//
/** @type {import('eslint').Linter.Config[]} */
const config = [
  ...tailwind,
  {
    name: `${shortName}/browser/tailwind-settings`,
    settings: {
      tailwindcss: {
        callees: ['tw', 'utils.tw', 'classnames', 'clsx', 'ctl'],
        whitelist: [String.raw`app\-[a-z-]+`],
      },
    },
  },
]
module.exports = config
