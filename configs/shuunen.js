const { loadRules } = require('../rules/utils/load-rules.js')
const { name, version } = require('../package.json')
const { shortName } = require('../src/constants.js')
//
//  _________.__
// /   _____/|  |__  __ __ __ __  ____   ____   ____
// \_____  \ |  |  \|  |  \  |  \/    \_/ __ \ /    \
//  /        \|   Y  \  |  /  |  /   |  \  ___/|   |  \
// /_______  /|___|  /____/|____/|___|  /\___  >___|  /
//         \/      \/                 \/     \/     \/
//
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
