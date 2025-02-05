import packageJson from '../package.json' with { type: 'json' }
import { loadRules } from '../rules/utils/load-rules.js'
import { shortName } from '../src/constants.js'
const { name, version } = packageJson
//
//  _________.__
// /   _____/|  |__  __ __ __ __  ____   ____   ____
// \_____  \ |  |  \|  |  \  |  \/    \_/ __ \ /    \
//  /        \|   Y  \  |  /  |  /   |  \  ___/|   |  \
// /_______  /|___|  /____/|____/|___|  /\___  >___|  /
//         \/      \/                 \/     \/     \/
//
// @ts-ignore
const rules = await loadRules()

/** @type {Record<string, 'error'>} */
export const myRules = Object.fromEntries(Object.keys(rules).map(id => [`${shortName}/${id}`, 'error']))

/** @type {import('eslint').ESLint.Plugin} */
export const shuunen = {
  meta: {
    name,
    version,
  },
  rules,
}
