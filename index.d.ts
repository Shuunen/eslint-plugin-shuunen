// inspired from https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/index.d.ts
import type { ESLint, Linter } from 'eslint'

export type Configs = {
  base: Linter.Config[]
  node: Linter.Config[]
  browser: Linter.Config[]
  typescript: Linter.Config[]
  vue: Linter.Config[]
}

export type Plugin = ESLint.Plugin & { configs: Configs }

/* c8 ignore start */
declare const eslintPluginShuunen: Plugin

export = eslintPluginShuunen
