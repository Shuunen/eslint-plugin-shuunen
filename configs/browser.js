const globals = require('globals')
const { shortName } = require('../src/constants.js')
const tailwind = require('./tailwind.js')
//     _____
//  __|___  |__  _____   _____  __  __  __  ______  ______  _____
// |      >    ||     | /     \|  \/  \|  ||   ___||   ___||     |
// |     <     ||     \ |     ||     /\   | `-.`-. |   ___||     \
// |______>  __||__|\__\\_____/|____/  \__||______||______||__|\__\
//   |_____|
//
/** @type {import('eslint').Linter.FlatConfig[]} */
const config = [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    name: `${shortName}/browser`,
  },
  ...tailwind,
]
module.exports = config
