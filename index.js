const browser = require('./configs/browser.js')
const node = require('./configs/node.js')
const base = require('./configs/base.js')
const vue = require('./configs/vue.js')
const { shuunen } = require('./configs/shuunen.js')

/** @type {Record<'base' | 'browser' | 'node' | 'vue', import('eslint').Linter.FlatConfig[]>} */
const configs = {
  base,
  browser,
  node,
  vue,
}

const plugin = { ...shuunen, configs }

module.exports = plugin
