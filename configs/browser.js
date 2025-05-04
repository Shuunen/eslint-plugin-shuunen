import globals from 'globals'
import { shortName } from '../src/constants.js'
//     _____
//  __|___  |__  _____   _____  __  __  __  ______  ______  _____
// |      >    ||     | /     \|  \/  \|  ||   ___||   ___||     |
// |     <     ||     \ |     ||     /\   | `-.`-. |   ___||     \
// |______>  __||__|\__\\_____/|____/  \__||______||______||__|\__\
//   |_____|
//
/** @type {import('eslint').Linter.Config[]} */
export const browser = [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    name: `${shortName}/browser`,
  },
]
