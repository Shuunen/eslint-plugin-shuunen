const { loadRules } = require('./rules/utils/load-rules.js')
const legacyConfigBase = require('./configs/legacy-config-base.js')
const flatConfigBase = require('./configs/flat-config-base.js')
const { name, version } = require('./package.json')

const rules = loadRules()

const shortName = 'shuunen'

/* c8 ignore next */
const recommendedRules = Object.fromEntries(Object.entries(rules).map(([id, rule]) => [`${shortName}/${id}`, rule.meta.docs.recommended ? 'error' : 'off']))

const allRules = Object.fromEntries(Object.keys(rules).map(id => [`${shortName}/${id}`, 'error']))

const createConfig = (rules, flatConfigName = false) => ({
  ...(flatConfigName ? { ...flatConfigBase, name: flatConfigName, plugins: { shuunen } } : { ...legacyConfigBase, plugins: [shortName] }),
  rules,
})

const shuunen = {
  meta: {
    name,
    version,
  },
  rules: {
    ...rules,
  },
}

const configs = {
  recommended: createConfig(recommendedRules),
  all: createConfig(allRules),
  'flat/recommended': createConfig(recommendedRules, `${shortName}/flat/recommended`),
  'flat/all': createConfig(allRules, `${shortName}/flat/all`),
}

module.exports = { ...shuunen, configs }
