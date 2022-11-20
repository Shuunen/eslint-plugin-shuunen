/* eslint-disable unicorn/prefer-module */
require('ts-node').register()
const { eslintExport } = require('../src')

const exp = eslintExport()

if (Object.keys(exp.rules).length === 0) {
  throw new Error('should exports some rules')
}

module.exports = exp
