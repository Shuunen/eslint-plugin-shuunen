import { readdirSync, statSync } from 'node:fs'

const ROOT_DIR = __dirname // eslint-disable-line unicorn/prefer-module

export const PLUGIN_NAME = 'shuunen'

export const listRulesNames = () => {
  const entries = readdirSync(ROOT_DIR)
  return entries.filter((entry) => statSync(`${ROOT_DIR}/${entry}`).isDirectory())
}
