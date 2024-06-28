const { loadRules } = require('../rules/utils/load-rules.js')
const { name, version } = require('../package.json')
const { shortName } = require('../src/constants.js')
const rules = loadRules()

const myRules = Object.fromEntries(Object.keys(rules).map(id => [`${shortName}/${id}`, 'error']))

/** @type {import('eslint').ESLint.Plugin} */
const shuunen = {
  meta: {
    name,
    version,
  },
  rules,
}

module.exports = {
  myRules,
  shuunen,
}
