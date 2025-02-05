// @ts-expect-error missing types
import tailwindPlugin from 'eslint-plugin-tailwindcss'
import { shortName } from '../src/constants.js'
const tailwindConfig = tailwindPlugin.configs['flat/recommended']
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
export const tailwind = [
  ...tailwindConfig,
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
