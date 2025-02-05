import globals from 'globals'
import { shortName } from '../src/constants.js'
//
// ooooo      ooo                 .o8
// `888b.     `8'                "888
//  8 `88b.    8   .ooooo.   .oooo888   .ooooo.
//  8   `88b.  8  d88' `88b d88' `888  d88' `88b
//  8     `88b.8  888   888 888   888  888ooo888
//  8       `888  888   888 888   888  888    .o
// o8o        `8  `Y8bod8P' `Y8bod88P" `Y8bod8P'
//
/** @type {import('eslint').Linter.Config[]} */
export const node = [
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    name: `${shortName}/node`,
  },
]
