import { base } from './configs/base.js'
import { browser } from './configs/browser.js'
import { node } from './configs/node.js'
import { shuunen } from './configs/shuunen.js'
import { tailwind } from './configs/tailwind.js'
import { typescript } from './configs/typescript.js'
import { vue } from './configs/vue.js'

/** @type {import('./index.js').Configs} */
const configs = {
  base,
  browser,
  node,
  tailwind,
  typescript,
  vue,
}

/** @type {import('./index.js').Plugin} */
const plugin = { ...shuunen, configs }

export default plugin
