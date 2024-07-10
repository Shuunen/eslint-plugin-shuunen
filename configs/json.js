const jsonc = require('eslint-plugin-jsonc').configs['flat/recommended-with-json']
const { writeFileSync } = require('node:fs')
const { shortName } = require('../src/constants.js')
const { capNesting } = require('../rules/utils/objects.js')
//
writeFileSync('jsonc.json', JSON.stringify(capNesting(jsonc, 4), null, 2))
//
/** @type {import('eslint').Linter.FlatConfig} */
const config = {
  // @ts-ignore
  // extends: jsonc.extends,
  name: `${shortName}/json/rules`,
  rules: {
    ...jsonc.rules,
    'jsonc/sort-keys': 'error', // styling
  },
}
module.exports = config
