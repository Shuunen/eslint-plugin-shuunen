const browser = require('./configs/browser.js')
const node = require('./configs/node.js')
const base = require('./configs/base.js')
const typescript = require('./configs/typescript.js')
const vue = require('./configs/vue.js')
const { shuunen } = require('./configs/shuunen.js')

/** @type {Record<'base' | 'browser' | 'node' | 'typescript' | 'vue', import('eslint').Linter.FlatConfig[]>} */
const configs = {
  base,
  browser,
  node,
  typescript,
  vue,
}

const plugin = { ...shuunen, configs }

module.exports = plugin
